# Ajay Rathore — Engineering Portfolio

A next-generation engineering portfolio built with Next.js 16, Framer Motion, and Tailwind CSS v4.

---

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx          ← Root layout, fonts, metadata
│   ├── page.tsx            ← Main page assembler
│   └── api/
│       └── contact/
│           └── route.ts    ← Contact form API route
├── sections/
│   ├── Hero.tsx            ← Hero + dashboard panel
│   ├── About.tsx           ← Engineering identity
│   ├── Expertise.tsx       ← Interactive skill modules
│   ├── Projects.tsx        ← Project operations center
│   ├── Hackathons.tsx      ← Hackathon achievements
│   ├── Leadership.tsx      ← Leadership + certifications
│   ├── Timeline.tsx        ← Growth timeline
│   ├── Terminal.tsx        ← Interactive CLI
│   ├── Contact.tsx         ← Contact form
│   └── Footer.tsx          ← Footer
├── systems/
│   ├── Loader.tsx          ← Cinematic intro loader
│   ├── Cursor.tsx          ← Custom cursor
│   └── Navbar.tsx          ← Fixed navigation
├── data/
│   └── index.ts            ← All content data
├── types/
│   └── index.ts            ← TypeScript interfaces
├── animations/
│   └── variants.ts         ← Framer Motion variants
├── lib/
│   └── utils.ts            ← Utility functions
└── styles/
    └── globals.css         ← Design tokens + global styles
```

---

## Setup Checklist

### 1. Personal Info
Edit `src/data/index.ts` → `personalInfo`:
- [ ] Add `resumeUrl` (Google Drive public link or `/resume.pdf`)
- [ ] Add `avatarUrl` (your photo URL or leave blank)

### 2. Contact Form
Choose one option in `src/app/api/contact/route.ts`:

**Option A — Resend (Recommended)**
```bash
npm install resend
```
Add to `.env.local`:
```
RESEND_API_KEY=your_resend_api_key
```
Uncomment the Resend block in `route.ts`.

**Option B — Gmail + Nodemailer**
```bash
npm install nodemailer @types/nodemailer
```
Add to `.env.local`:
```
GMAIL_USER=your@gmail.com
GMAIL_APP_PASSWORD=your_app_password
```

**Option C — Formspree (No backend)**
Replace the `fetch('/api/contact', ...)` call in `Contact.tsx` with:
```js
fetch('https://formspree.io/f/YOUR_FORM_ID', { ... })
```

### 3. Project Links
Edit `src/data/index.ts` → `projects[]`:
- [ ] Add `githubUrl` for each project
- [ ] Add `liveUrl` if deployed

### 4. Resume
Place `resume.pdf` in `/public/` folder and update:
```ts
resumeUrl: '/resume.pdf'
```

### 5. Profile Photo (Optional)
If you want a photo in the About section:
- Place image in `/public/` or use external URL
- Update `avatarUrl` in `personalInfo`

---

## Environment Variables

Create `.env.local` in root:

```env
# Choose based on email provider
RESEND_API_KEY=
GMAIL_USER=
GMAIL_APP_PASSWORD=

# Optional
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Add environment variables in Vercel Dashboard → Project Settings → Environment Variables.

### Netlify
```bash
npm run build
# Deploy /out directory
```

---

## Customization

- **Colors**: Edit CSS variables in `src/styles/globals.css`
- **Content**: Edit `src/data/index.ts`
- **Sections**: Add/remove sections in `src/app/page.tsx`
- **Animations**: Tune timing in `src/animations/variants.ts`

---

Built by Ajay Rathore · CSE'27 · IES College of Technology, Bhopal