# Email Setup Guide for CrewReady Contact Form

## Option 1: Web3Forms (Recommended - Already Implemented)

**Zero backend needed, completely free!**

### Setup Steps:

1. Go to https://web3forms.com
2. Sign up with your email (free account)
3. Create a new form and get your Access Key
4. Open `/src/components/landing/ContactModal.tsx`
5. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key (around line 110)
6. Emails will be sent to: joe@crewready.ai

### Features:
- ✅ No server required
- ✅ No external dependencies
- ✅ Spam protection included
- ✅ Free for up to 250 submissions/month
- ✅ Email notifications
- ✅ JSON API response

---

## Option 2: EmailJS (Alternative)

If you prefer EmailJS instead:

1. Install package:
   ```bash
   npm install @emailjs/browser
   ```

2. Sign up at https://www.emailjs.com
3. Get your Service ID, Template ID, and Public Key
4. Update the ContactModal component

---

## Option 3: Simple mailto: Link (No backend at all)

If you want the absolute simplest solution with ZERO setup:

Replace the form submission with:

```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  const subject = encodeURIComponent(`New Worker Request from ${formData.name}`);
  const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Role: ${formData.role}
Workers: ${formData.workersCount}
Start Date: ${formData.startDate}
Pay Range: ${formData.payRange}
Address: ${formData.address}
ZIP: ${formData.zipCode}
Requirements: ${formData.requirements?.join(", ") || "None"}
  `);
  
  window.location.href = `mailto:joe@crewready.ai?subject=${subject}&body=${body}`;
};
```

**Note:** This opens the user's email client, which may not always work on mobile.

---

## Option 4: Netlify Forms (If hosted on Netlify)

If you deploy to Netlify, add to your form:

```html
<form name="contact" netlify>
```

Netlify automatically handles form submissions and emails you.

---

## Current Implementation

The contact form is currently set up with **Web3Forms** (Option 1).

Just get your free access key and replace it in the code!

**File to edit:** `/src/components/landing/ContactModal.tsx`
**Line:** ~110
**Replace:** `YOUR_WEB3FORMS_ACCESS_KEY`
