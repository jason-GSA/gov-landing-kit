# Deploying Government Template to GitHub Pages

This guide explains how to deploy your government website template to GitHub Pages.

## Quick Setup

1. **Connect to GitHub** (if not already done):
   - In Lovable, click the GitHub button in the top right
   - Authorize the Lovable GitHub App
   - Create a new repository

2. **Configure GitHub Pages**:
   - Go to your GitHub repository
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"

3. **Update Base Path**:
   - Edit `vite.config.ts` and replace `'/your-repo-name/'` with your actual repository name
   - For example: if your repo is `my-gov-site`, change it to `'/my-gov-site/'`

4. **Deploy**:
   - Push any changes to the main branch
   - GitHub Actions will automatically build and deploy your site
   - Your site will be available at: `https://yourusername.github.io/your-repo-name/`

## Custom Domain (Optional)

To use a custom domain like `yoursite.gov`:

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure your domain's DNS to point to GitHub Pages
3. Enable "Enforce HTTPS" in repository settings

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features Included

- ✅ USWDS-inspired design system
- ✅ Government color palette and typography
- ✅ Responsive layout
- ✅ SEO optimized
- ✅ Accessible components
- ✅ Professional government styling
- ✅ GitHub Pages deployment ready

## Customization

- **Colors**: Modify CSS variables in `src/index.css`
- **Content**: Update components in `src/components/`
- **Branding**: Change agency name and content
- **Sections**: Add/remove sections as needed

Your government website template is now ready for deployment!