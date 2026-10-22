# Jan Marinelle Yap Auditor — Premium Digital Portfolio

An animated personal digital portfolio website created for **Jan Marinelle Yap Auditor** (Aspiring IT Professional | Creative Thinker | Front-End Developer).

Built exclusively with **semantic HTML5, modern CSS3, and modular Vanilla JavaScript**. Designed with a feminine, classy, minimalist, luxurious, and professional aesthetic inspired by luxury editorial publications and modern agency portfolios.

---

## 🌸 Visual Identity & Design System

The visual design is grounded in a delicate, luxury editorial palette with full dark-mode support:

- **Soft blush pink:** `#F7E7E8`
- **Dusty rose:** `#C98C95`
- **Champagne beige:** `#F4EDE4`
- **Ivory white:** `#FFFAF7`
- **Deep charcoal:** `#29252B`
- **Muted gold:** `#C6A77D`

### Typography
- **Primary Headings:** [Playfair Display](https://fonts.google.com/specimen/Playfair+Display)
- **Secondary Headings & Accents:** [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) (Italic Serif)
- **Body & Interface:** [Poppins](https://fonts.google.com/specimen/Poppins)
- **Icons:** [Font Awesome 6 Pro/Free CDN](https://fontawesome.com/)

---

## ✨ Features & Included Animations

This portfolio features **30 animations and interactive enhancements**:

1. **Animated Luxury Loading Screen:** Custom monogram badge with spinning gold ring and smooth percentage counter.
2. **Rotating Subtitle Typewriter:** Hero section typing and deletion effect cycling through customizable professional titles.
3. **Custom Animated Cursor:** Trailing follower ring with smooth physics and hover expansion over interactive elements (auto-disabled on touch devices).
4. **Scroll Progress Indicator:** Real-time top progress bar tracking reading depth.
5. **Back-to-Top Button:** Floating action button featuring an SVG circular scroll progress ring.
6. **Persistent Dark / Light Theme:** Seamless mode switcher saved to `localStorage`.
7. **Frosted-Glass Navigation:** Transparent header that transitions into frosted glass on scroll.
8. **Active Section Navigation Highlighting:** Scroll-spy highlighting for desktop navigation and mobile drawer.
9. **Animated Mobile Navigation Menu:** Smooth backdrop and slide-in drawer with accessible close controls.
10. **Interactive 3D Card Tilt:** Mouse-following perspective tilt on featured cards and portrait frames.
11. **Magnetic CTA Buttons:** Cursor attraction effect on primary desktop buttons.
12. **Button Ripple & Shimmer Effects:** Delicate ripple on click and gold foil shimmer on hover.
13. **Dynamic Skills Showcase:** Tabbed filtering (Technical vs Professional) with animated progress bars.
14. **Vertical Animated Timeline:** Educational and professional milestones with line drawing effect and date chips.
15. **Project Category Filtering:** Instant filtering (All, Web Development, UI/UX Design, Academic Projects, Other Works).
16. **Interactive Project Details Modal:** Pop-up preview dialog with full project overview, feature lists, and external links.
17. **Certificate Gallery & Zoom Modal:** Interactive credential cards with full-resolution preview and toggle zoom.
18. **Download CV & View CV Triggers:** Direct HTML download link connected to a valid sample PDF (`assets/files/Jan_Marinelle_Yap_Auditor_CV.pdf`) and an in-browser preview modal.
19. **Client-Side Contact Form Validation:** Real-time field validation with custom error states.
20. **Mailto Email Workflow:** As a static website, form submissions automatically format and trigger the user's default email client, while copying the message to the clipboard as a failsafe.
21. **One-Click Clipboard Helpers:** Instant copy buttons for email address and drafted messages.
22. **Toast Notification System:** Animated status notifications for user actions (theme toggle, copy events, form submissions).
23. **Animated Stat Counters:** Counts up to achievement milestones upon entering viewport.
24. **Decorative Geometric Accents:** Ambient glowing background orbs and floating badges.
25. **Asymmetrical Editorial Layouts:** Magazine-style photo frames and gold border geometry.
26. **Accessibility & Reduced Motion:** Full compliance with `prefers-reduced-motion` settings.
27. **Keyboard Accessible:** Trap-focus inside modals with `Escape` key listeners.
28. **Open Graph & SEO Meta:** Pre-configured social media card previews.
29. **Automatic Copyright Year:** Automatically updates in the footer via JavaScript.
30. **Zero Backend Dependencies:** 100% static, fast-loading, and zero-configuration.

---

## 📂 Project Structure

```text
Portfolio Final/
│
├── index.html                           # Semantic HTML5 entry point
│
├── css/
│   ├── style.css                        # Design system, layout, glassmorphism, modals
│   ├── animations.css                   # Keyframes, cursor physics, tilt, reveals
│   └── responsive.css                   # Media queries, mobile drawer, touch layouts
│
├── js/
│   ├── config.js                        # CENTRAL DATA SOURCE (Edit personal details here!)
│   ├── projects.js                      # Project filtering, modals, certificates
│   ├── animations.js                    # Preloader, GSAP / Observer, typewriter, tilt
│   └── main.js                          # Theme toggle, navigation, validation, toasts
│
├── assets/
│   ├── images/
│   │   ├── profile.jpg                  # Editorial portrait photo
│   │   ├── about.jpg                    # About section photo
│   │   ├── projects/                    # Project thumbnails (project-1.jpg to 6.jpg)
│   │   └── certificates/                # Certificate thumbnails (cert-1.jpg to 4.jpg)
│   │
│   ├── files/
│   │   └── Jan_Marinelle_Yap_Auditor_CV.pdf # Official Curriculum Vitae PDF document
│   │
│   └── icons/
│       └── favicon.svg                  # Luxury JMYA monogram favicon
│
└── README.md                            # Complete documentation & customization guide
```

---

## 🛠️ How to Customize

All textual content, project details, skills, and links are managed from **a single configuration file**: [`js/config.js`](file:///c:/Users/USER/OneDrive/Desktop/Portfolio%20Final/js/config.js).

### 1. Update Personal Information
Open `js/config.js` and modify the `personal` section:
```javascript
personal: {
  fullName: "Jan Marinelle Yap Auditor",
  shortName: "Jan Marinelle",
  monogram: "JMYA",
  rotatingTitles: [
    "Aspiring IT Professional",
    "Creative Front-End Thinker",
    "UI/UX Design Enthusiast",
    "Dedicated Lifelong Learner"
  ],
  details: {
    location: "Cebu, Philippines",
    email: "jan.auditor@example.com",
    phone: "+63 (000) 000-0000"
  }
}
```

### 2. Replace Photos & Images
To add real photos, overwrite the placeholder files in `assets/images/`:
- **Portrait Photo:** Replace `assets/images/profile.jpg` (Recommended size: 800 × 1000 px).
- **About Photo:** Replace `assets/images/about.jpg` (Recommended size: 800 × 1000 px).
- **Projects:** Replace images in `assets/images/projects/` (Recommended size: 1200 × 800 px).
- **Certificates:** Replace images in `assets/images/certificates/` (Recommended size: 1200 × 850 px).

### 3. Replace the Curriculum Vitae (CV)
Replace `assets/files/Jan_Marinelle_Yap_Auditor_CV.pdf` with your real PDF document. Keep the same filename, or update the `cv.filePath` in `js/config.js`.

### 4. Add or Edit Projects
Inside `js/config.js`, update the `projects` array:
```javascript
{
  id: "project-1",
  title: "My New Web App",
  category: "web-dev",             // web-dev | ui-ux | academic | other
  categoryLabel: "Web Development",
  shortDescription: "Short overview of the project.",
  fullDescription: "Detailed description of the technology and architecture.",
  technologies: ["HTML5", "CSS3", "JavaScript"],
  image: "assets/images/projects/project-1.jpg",
  liveUrl: "https://my-live-demo.com", // Set to null if not hosted
  githubUrl: "https://github.com/my-username/my-repo"
}
```

---

## 🚀 How to Run Locally

You do not need Node.js or any build tools to run this website.

### Option A: Direct Open
Double-click [`index.html`](file:///c:/Users/USER/OneDrive/Desktop/Portfolio%20Final/index.html) to open directly in Google Chrome, Microsoft Edge, Safari, or Mozilla Firefox.

### Option B: Local Web Server (Recommended)
Using Python:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

Using Node.js `npx serve`:
```bash
npx serve .
```

---

## 🌐 How to Deploy for Free

### GitHub Pages
1. Create a new repository on GitHub named `portfolio` or `username.github.io`.
2. Push all the files in this directory to the `main` branch.
3. In GitHub, go to **Settings > Pages**.
4. Set the Source to `Deploy from a branch`, choose `main` / `root`, and click **Save**.
5. Your portfolio will be live at `https://<username>.github.io/<repo-name>`.

### Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Drag and drop this folder directly into the Netlify dashboard.
3. Instant deployment with HTTPS and custom domain support.

### Vercel
1. Run `npx vercel` in the project directory or import your GitHub repository to [Vercel](https://vercel.com/).
2. Select default static project settings and click **Deploy**.

---

## 📱 Browser Compatibility

- **Google Chrome:** Latest (macOS, Windows, Android, iOS)
- **Apple Safari:** Latest (macOS, iOS)
- **Mozilla Firefox:** Latest
- **Microsoft Edge:** Latest

Includes graceful fallbacks for systems without hardware acceleration or when network CDNs are unavailable.

---

© 2026 Jan Marinelle Yap Auditor. All Rights Reserved.
