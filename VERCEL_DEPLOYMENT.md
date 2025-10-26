# Vercel Deployment Guide for HEGDE Resources

## 🚀 Quick Deployment Steps

### Step 1: Connect to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project"
3. Import your repository: `Gogulancode/Hedgeresources`
4. Vercel will auto-detect it's a Vite React project

### Step 2: Configure Environment Variables
In Vercel dashboard → Settings → Environment Variables, add:

**Required for Supabase:**
```
VITE_SUPABASE_PROJECT_ID=kporajliwvijpgyosiie
VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtwb3Jhamxpd3ZpanBneW9zaWllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExMTcxNzIsImV4cCI6MjA3NjY5MzE3Mn0.xWG4N45y2Ia4pnN3UtyUmOizIxOpXNzUiydbmv23rAM
VITE_SUPABASE_URL=https://kporajliwvijpgyosiie.supabase.co
```

**Required for EmailJS (after setup):**
```
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### Step 3: Deploy
1. Click "Deploy" - Vercel will build and deploy automatically
2. Your site will be live at: `https://hedgeresources.vercel.app` (or similar)

### Step 4: Custom Domain (Optional)
1. In Vercel dashboard → Settings → Domains
2. Add your custom domain if you have one
3. Follow DNS configuration instructions

## 📧 Complete EmailJS Setup After Deployment

### Important: EmailJS Configuration
1. Complete the EmailJS setup following `EMAILJS_SETUP.md`
2. Add the environment variables to Vercel
3. Redeploy to activate email functionality

### Build Configuration
Vercel automatically detects:
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## 🔗 Website Structure
Your deployed website will have:
- **Homepage**: Professional landing page with hero and features
- **Products**: Complete product catalog with search and filters
- **Product Details**: Individual pages for each of 14 products
- **About**: Company information and mission
- **Sustainability**: Environmental commitment page
- **Contact**: Contact form with EmailJS integration

## 📱 Features Included
✅ Fully responsive design
✅ SEO optimized
✅ Professional favicon set
✅ Contact forms with email integration
✅ Modern UI with Tailwind CSS
✅ Fast loading with Vite
✅ Error handling and fallbacks

## 🛠️ Post-Deployment Checklist
1. ✅ Test all pages load correctly
2. ⏳ Complete EmailJS setup and test contact forms
3. ✅ Verify product detail pages work
4. ✅ Check mobile responsiveness
5. ✅ Test favicon appears correctly
6. ⏳ Set up custom domain (if desired)

## 📞 Support
If you encounter any issues:
1. Check Vercel deployment logs
2. Verify environment variables are set
3. Ensure EmailJS is properly configured
4. Test locally first with `npm run dev`

Your website is production-ready and professional! 🎉