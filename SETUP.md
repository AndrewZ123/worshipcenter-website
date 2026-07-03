# Setup Instructions for WorshipCenter Website

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `worshipcenter-website`
3. Set to Public or Private (your choice)
4. Click "Create repository"

## Step 2: Push to GitHub

Run these commands in this folder:

```bash
git branch -M main
git remote add origin https://github.com/AndrewZ123/worshipcenter-website.git
git push -u origin main
```

## Step 3: Deploy to Vercel

1. Go to https://vercel.com/new
2. Import the `worshipcenter-website` repository
3. Click "Deploy"
4. Once deployed, go to Settings → Domains
5. Add custom domain: `worshipcenter.app`

## Step 4: Configure Domain

You'll need to update your DNS settings to point `worshipcenter.app` to Vercel.

After this, your marketing site will be live at https://worshipcenter.app! 🎉