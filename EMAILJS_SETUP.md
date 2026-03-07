# EmailJS Setup Guide for HEGDE Resources

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up with your email: hegde.resources@gmail.com
3. Password: Contactus@0987

## Step 2: Create Email Service
1. After logging in, go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Follow these steps:
   - Service ID: Give it a name like "hegde_gmail_service"
   - Gmail account: hegde.resources@gmail.com
   - Click "Connect Account" and authorize with Google
5. Note down the Service ID (you'll need this)

## Step 3: Create Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template content:

**Template Name:** contact_form_template

**Subject:** New Contact Form Submission - {{product_name}}

**Content:**
```
Hello HEGDE Resources Team,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone_number}}
Product Interest: {{product_name}}

Message:
{{message}}

---
This message was sent from your website contact form.
Please respond to: {{from_email}}
```

4. Note down the Template ID (you'll need this)

## Step 4: Get Public Key
1. Go to "Account" → "General" in the dashboard
2. Copy your Public Key (it looks like: user_xxxxxxxxxxxxxxxxx)

## Step 5: Update Environment Variables
Update your .env file with the actual values:

```
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Gmail Configuration (Important!)
1. Go to your Gmail account (hegde.resources@gmail.com)
2. Go to Google Account settings → Security
3. Enable 2-factor authentication if not already enabled
4. Create an "App Password" for EmailJS:
   - Go to Security → App passwords
   - Select "Mail" and your device
   - Copy the generated 16-character password
   - Use this in EmailJS service setup instead of your regular password

## Step 7: Test the Setup
1. After updating the .env file, restart your development server
2. Try submitting the contact form
3. Check if emails are received at hegde.resources@gmail.com

## Troubleshooting
- Make sure 2-factor authentication is enabled on Gmail
- Use App Password, not regular password
- Check spam folder for test emails
- Verify all IDs are correctly copied without extra spaces

## Email Template Variables Available:
- {{from_name}} - Customer's name
- {{from_email}} - Customer's email
- {{phone_number}} - Customer's phone
- {{product_name}} - Product they're interested in
- {{message}} - Their message
- {{to_email}} - Your email (hegde.resources@gmail.com)

If EmailJS fails, the user will be shown an error message with a direct contact email.