# Portfolio Setup Script for Windows
# Run: powershell -ExecutionPolicy Bypass -File setup.ps1

Write-Host "================================" -ForegroundColor Cyan
Write-Host "Ahmed AYOUBI Portfolio Setup" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
$nodeCheck = node --version 2>$null
if ($?) {
    Write-Host "✓ Node.js found: $nodeCheck" -ForegroundColor Green
} else {
    Write-Host "✗ Node.js not found. Please install Node.js 16+ from https://nodejs.org" -ForegroundColor Red
    exit 1
}

# Navigate to portfolio directory
Write-Host ""
Write-Host "Setting up portfolio directory..." -ForegroundColor Yellow
$portfolioPath = Join-Path $PSScriptRoot "portfolio"

if (-not (Test-Path $portfolioPath)) {
    Write-Host "✗ Portfolio directory not found at $portfolioPath" -ForegroundColor Red
    exit 1
}

Set-Location $portfolioPath
Write-Host "✓ Changed to portfolio directory" -ForegroundColor Green

# Install dependencies
Write-Host ""
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install
if ($?) {
    Write-Host "✓ Dependencies installed successfully" -ForegroundColor Green
} else {
    Write-Host "✗ Failed to install dependencies" -ForegroundColor Red
    exit 1
}

# Create public/projects-html directory
Write-Host ""
Write-Host "Setting up HTML projects directory..." -ForegroundColor Yellow
$htmlDir = Join-Path $portfolioPath "public" "projects-html"
if (-not (Test-Path $htmlDir)) {
    New-Item -ItemType Directory -Path $htmlDir -Force | Out-Null
    Write-Host "✓ Created: $htmlDir" -ForegroundColor Green
} else {
    Write-Host "✓ Directory exists: $htmlDir" -ForegroundColor Green
}

# Copy HTML projects if they exist
Write-Host ""
Write-Host "Looking for HTML projects to copy..." -ForegroundColor Yellow

$projectsDir = Join-Path $PSScriptRoot ".." ".." "Projects"
if (Test-Path $projectsDir) {
    $htmlFiles = Get-ChildItem $projectsDir -Filter "*.html"
    
    if ($htmlFiles.Count -gt 0) {
        Write-Host "Found $($htmlFiles.Count) HTML files" -ForegroundColor Green
        
        foreach ($file in $htmlFiles) {
            $destPath = Join-Path $htmlDir $file.Name
            Copy-Item $file.FullName $destPath -Force
            Write-Host "  ✓ Copied: $($file.Name)" -ForegroundColor Green
        }
    } else {
        Write-Host "  No HTML files found in Projects directory" -ForegroundColor Yellow
        Write-Host "  You can add them later to: $htmlDir" -ForegroundColor Cyan
    }
} else {
    Write-Host "  Projects directory not found at: $projectsDir" -ForegroundColor Yellow
    Write-Host "  You can manually copy HTML files to: $htmlDir" -ForegroundColor Cyan
}

# Create .env.local if it doesn't exist
Write-Host ""
Write-Host "Setting up environment configuration..." -ForegroundColor Yellow
$envFile = Join-Path $portfolioPath ".env.local"
if (-not (Test-Path $envFile)) {
    @"
NEXT_PUBLIC_SITE_URL=http://localhost:3000
"@ | Out-File $envFile -Encoding UTF8
    Write-Host "✓ Created .env.local" -ForegroundColor Green
} else {
    Write-Host "✓ .env.local already exists" -ForegroundColor Green
}

# Display completion message
Write-Host ""
Write-Host "================================" -ForegroundColor Green
Write-Host "✓ Setup Complete!" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Navigate to portfolio folder: cd portfolio" -ForegroundColor White
Write-Host "2. Start development server: npm run dev" -ForegroundColor White
Write-Host "3. Open browser: http://localhost:3000" -ForegroundColor White
Write-Host "4. Edit pages and customize content as needed" -ForegroundColor White
Write-Host ""
Write-Host "Additional resources:" -ForegroundColor Cyan
Write-Host "- Setup guide: SETUP.md" -ForegroundColor White
Write-Host "- Full docs: README.md" -ForegroundColor White
Write-Host "- Deployment: DEPLOYMENT.md" -ForegroundColor White
Write-Host ""
Write-Host "HTML projects are stored locally at:" -ForegroundColor Cyan
Write-Host "$htmlDir" -ForegroundColor Yellow
Write-Host ""
Write-Host "Ready to launch! 🚀" -ForegroundColor Green
