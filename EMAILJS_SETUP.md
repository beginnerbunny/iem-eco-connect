# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Inquiry from {{from_name}}

Hello,

You have received a new inquiry from your website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

Reply to: {{reply_to}}

Best regards,
IEM Website
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** in the API Keys section

## Step 5: Configure Environment Variables
Create a `.env.local` file in your project root with:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_COMPANY_EMAIL=iem2012@rediffmail.com
```

## Step 6: Test the Integration
1. Start your development server: `npm run dev`
2. Fill out the contact form
3. Click "Send Inquiry"
4. Check your email for the inquiry

## Troubleshooting
- Make sure all environment variables are set correctly
- Check the browser console for any error messages
- Verify your EmailJS service is active
- Ensure your email template uses the correct variable names
