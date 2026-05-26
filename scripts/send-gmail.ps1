param(
  [Parameter(Mandatory = $true)]
  [string]$Subject,

  [string]$Body,

  [string]$BodyFile,

  [string]$To = "sevenfayu@gmail.com"
)

$ErrorActionPreference = "Stop"

$from = "sevenfayu1@gmail.com"
$workspaceSecretPath = Join-Path (Split-Path -Parent $PSScriptRoot) ".codex-secrets\gmail-app-password.sec"
$userSecretPath = Join-Path $HOME ".codex-secrets\gmail-app-password.sec"
$secretPath = if (Test-Path -LiteralPath $workspaceSecretPath) {
  $workspaceSecretPath
} else {
  $userSecretPath
}
$logPath = Join-Path $HOME ".codex-secrets\gmail-send.log"

if (-not (Test-Path -LiteralPath $secretPath)) {
  throw "Missing Gmail app password secret: $secretPath"
}

if ($BodyFile) {
  $messageBody = Get-Content -LiteralPath $BodyFile -Raw -Encoding UTF8
} elseif ($Body) {
  $messageBody = $Body
} else {
  throw "Provide either -Body or -BodyFile."
}

$encryptedPassword = (Get-Content -LiteralPath $secretPath -Raw).Trim()
$securePassword = $encryptedPassword | ConvertTo-SecureString
$credential = [System.Management.Automation.PSCredential]::new($from, $securePassword)
$plainPassword = $credential.GetNetworkCredential().Password

$message = [System.Net.Mail.MailMessage]::new($from, $To, $Subject, $messageBody)
$message.BodyEncoding = [System.Text.Encoding]::UTF8
$message.SubjectEncoding = [System.Text.Encoding]::UTF8

$client = [System.Net.Mail.SmtpClient]::new("smtp.gmail.com", 587)
$client.EnableSsl = $true
$client.Credentials = [System.Net.NetworkCredential]::new($from, $plainPassword)

try {
  $client.Send($message)
  $logDir = Split-Path -Parent $logPath
  New-Item -ItemType Directory -Force -Path $logDir | Out-Null
  "$(Get-Date -Format o) OK sent to $To subject=$Subject" | Add-Content -LiteralPath $logPath -Encoding UTF8
  "OK: email sent to $To"
} finally {
  $message.Dispose()
  $client.Dispose()
}
