#!/bin/bash
# Portfolio Setup Script for macOS/Linux
# Run: bash setup.sh

echo -e "\033[36m================================\033[0m"
echo -e "\033[36mAhmed AYOUBI Portfolio Setup\033[0m"
echo -e "\033[36m================================\033[0m"
echo ""

# Check if Node.js is installed
echo -e "\033[33mChecking Node.js installation...\033[0m"
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo -e "\033[32m✓ Node.js found: $NODE_VERSION\033[0m"
else
    echo -e "\033[31m✗ Node.js not found. Please install Node.js 16+ from https://nodejs.org\033[0m"
    exit 1
fi

# Navigate to portfolio directory
echo ""
echo -e "\033[33mSetting up portfolio directory...\033[0m"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PORTFOLIO_PATH="$SCRIPT_DIR/portfolio"

if [ ! -d "$PORTFOLIO_PATH" ]; then
    echo -e "\033[31m✗ Portfolio directory not found at $PORTFOLIO_PATH\033[0m"
    exit 1
fi

cd "$PORTFOLIO_PATH"
echo -e "\033[32m✓ Changed to portfolio directory\033[0m"

# Install dependencies
echo ""
echo -e "\033[33mInstalling dependencies...\033[0m"
npm install
if [ $? -eq 0 ]; then
    echo -e "\033[32m✓ Dependencies installed successfully\033[0m"
else
    echo -e "\033[31m✗ Failed to install dependencies\033[0m"
    exit 1
fi

# Create public/projects-html directory
echo ""
echo -e "\033[33mSetting up HTML projects directory...\033[0m"
HTML_DIR="$PORTFOLIO_PATH/public/projects-html"
mkdir -p "$HTML_DIR"
echo -e "\033[32m✓ Created: $HTML_DIR\033[0m"

# Copy HTML projects if they exist
echo ""
echo -e "\033[33mLooking for HTML projects to copy...\033[0m"

PROJECTS_DIR="$(dirname "$SCRIPT_DIR")/Projects"
if [ -d "$PROJECTS_DIR" ]; then
    HTML_FILES=$(find "$PROJECTS_DIR" -maxdepth 1 -name "*.html" -type f)
    
    if [ -n "$HTML_FILES" ]; then
        FILE_COUNT=$(echo "$HTML_FILES" | wc -l)
        echo -e "\033[32mFound $FILE_COUNT HTML files\033[0m"
        
        while IFS= read -r file; do
            FILENAME=$(basename "$file")
            cp "$file" "$HTML_DIR/$FILENAME"
            echo -e "\033[32m  ✓ Copied: $FILENAME\033[0m"
        done <<< "$HTML_FILES"
    else
        echo -e "\033[33m  No HTML files found in Projects directory\033[0m"
        echo -e "\033[36m  You can add them later to: $HTML_DIR\033[0m"
    fi
else
    echo -e "\033[33m  Projects directory not found at: $PROJECTS_DIR\033[0m"
    echo -e "\033[36m  You can manually copy HTML files to: $HTML_DIR\033[0m"
fi

# Create .env.local if it doesn't exist
echo ""
echo -e "\033[33mSetting up environment configuration...\033[0m"
ENV_FILE="$PORTFOLIO_PATH/.env.local"
if [ ! -f "$ENV_FILE" ]; then
    cat > "$ENV_FILE" << EOF
NEXT_PUBLIC_SITE_URL=http://localhost:3000
EOF
    echo -e "\033[32m✓ Created .env.local\033[0m"
else
    echo -e "\033[32m✓ .env.local already exists\033[0m"
fi

# Display completion message
echo ""
echo -e "\033[36m================================\033[0m"
echo -e "\033[32m✓ Setup Complete!\033[0m"
echo -e "\033[36m================================\033[0m"
echo ""
echo -e "\033[36mNext steps:\033[0m"
echo -e "\033[37m1. Navigate to portfolio folder: cd portfolio\033[0m"
echo -e "\033[37m2. Start development server: npm run dev\033[0m"
echo -e "\033[37m3. Open browser: http://localhost:3000\033[0m"
echo -e "\033[37m4. Edit pages and customize content as needed\033[0m"
echo ""
echo -e "\033[36mAdditional resources:\033[0m"
echo -e "\033[37m- Setup guide: SETUP.md\033[0m"
echo -e "\033[37m- Full docs: README.md\033[0m"
echo -e "\033[37m- Deployment: DEPLOYMENT.md\033[0m"
echo ""
echo -e "\033[36mHTML projects are stored locally at:\033[0m"
echo -e "\033[33m$HTML_DIR\033[0m"
echo ""
echo -e "\033[32mReady to launch! 🚀\033[0m"
