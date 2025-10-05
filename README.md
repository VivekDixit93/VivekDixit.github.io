# Vivek Dixit - Portfolio

This repository contains my personal portfolio website that has been configured for static hosting on GitHub Pages as a personal site.

## Deployment to GitHub Pages (Personal Site)

Since this repository is named `VivekDixit93.github.io`, it will be served as a personal GitHub Pages site (available at vivekdixit93.github.io).

### Option 1: Using GitHub Actions (Recommended)

1. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Under "Build and deployment", select "GitHub Actions" as the source

2. Create the following GitHub Actions workflow file at `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm install

      - name: Build static files
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          publish_branch: gh-pages
```

### Option 2: Manual Deployment to gh-pages branch

1. Make sure you have Node.js installed on your system

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the static files:
   ```bash
   npm run build
   ```

4. Push the contents of the `dist` folder to the `gh-pages` branch:
   ```bash
   # Copy the contents of dist folder to a temporary location
   cp -r dist ../vivekdixit_backup
   # Create and switch to gh-pages branch
   git checkout -b gh-pages
   # Remove all current files
   git rm -rf .
   # Copy the build files from the temporary location
   cp -r ../vivekdixit_backup/* .
   # Clean up the temporary folder
   rm -rf ../vivekdixit_backup
   # Add and commit the build files
   git add .
   git commit -m "Deploy to GitHub Pages"
   # Push to the gh-pages branch
   git push origin gh-pages
   # Switch back to main branch
   git checkout main
   ```

5. In your GitHub repository settings, under the "Pages" section:
   - Set the source to "Deploy from a branch"
   - Select "gh-pages" branch and "/ (root)" folder

### Option 3: Deploy to Root of Main Branch (Alternative approach)

For personal GitHub Pages sites, you can also deploy directly to the main branch root:

1. Build the project:
   ```bash
   npm run build
   ```

2. Copy all files from the `dist` folder to the root of your project
3. Commit all files to the main branch
4. In GitHub repository settings, under "Pages" section:
   - Set the source to "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder

## Project Structure

- `client/` - Contains the React frontend application
- `server/` - Contains the Express backend (not used in static version)
- `dist/` - Generated static files directory (created after running `npm run build`)

## Development

To work on the application locally:
```bash
npm run dev
```

## Troubleshooting

If you're getting 404 errors:
- Check that your GitHub Pages source is correctly configured in repository settings
- For personal sites (username.github.io), make sure you're not using a subdirectory setting
- Verify that your built files are in the correct location (either root of main branch or gh-pages branch)
- Ensure the 404.html and .nojekyll files are present in your deployment

## Notes

- This application is designed to work as a static site but originally had backend integration capabilities
- Any API calls will need to be handled by external services or mocked in the static version
- Client-side routing is handled using wouter, with fallback configuration for GitHub Pages
- For personal GitHub Pages (username.github.io), the site is served from root path without subdirectories