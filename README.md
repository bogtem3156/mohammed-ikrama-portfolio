# Academic Portfolio & Digital CV — Mohammed Ikrama

A modern, production-grade Academic Portfolio and Digital Curriculum Vitae web application built for **Mohammed Ikrama Shakeel Ahmed**, Assistant Professor of Pharmacology and Ph.D. Researcher in Pharmaceutical Sciences.

[![Live Production](https://img.shields.io/badge/Live%20Website-mohammed--ikrama--portfolio.vercel.app-emerald?style=for-the-badge&logo=vercel)](https://mohammed-ikrama-portfolio.vercel.app)
[![GitHub Repository](https://img.shields.io/badge/GitHub-bogtem3156%2Fmohammed--ikrama--portfolio-181717?style=for-the-badge&logo=github)](https://github.com/bogtem3156/mohammed-ikrama-portfolio)
[![ATS Academic CV](https://img.shields.io/badge/Printable%20CV-%2Fcv-0284c7?style=for-the-badge&logo=adobeacrobatreader)](https://mohammed-ikrama-portfolio.vercel.app/cv)

- 🌐 **Live Website:** [https://mohammed-ikrama-portfolio.vercel.app](https://mohammed-ikrama-portfolio.vercel.app)
- 📄 **Printable ATS Academic CV:** [https://mohammed-ikrama-portfolio.vercel.app/cv](https://mohammed-ikrama-portfolio.vercel.app/cv)
- 📦 **GitHub Repository:** [https://github.com/bogtem3156/mohammed-ikrama-portfolio](https://github.com/bogtem3156/mohammed-ikrama-portfolio)

---

## 🔬 Academic Profile & Verified Information

- **Full Name:** Mohammed Ikrama Shakeel Ahmed
- **Current Designation:** Assistant Professor of Pharmacology
- **Department:** Department of Pharmacology
- **Institution:** Gangamai Institute of Pharmacy, Nagaon, Dhule - 424005, Maharashtra, India
- **University Affiliation:** Dr. Babasaheb Ambedkar Technological University (DBATU), Lonere
- **Professional Registration:** Registered Pharmacist, Maharashtra State Pharmacy Council (MSPC)
  - **Registration No:** 375736
  - **Pharmacist Professional Profile (PPP) No:** N/314678
  - **Validity:** Valid until 31/12/2053 (Life Validated)
- **ORCID:** [0009-0002-3334-2966](https://orcid.org/0009-0002-3334-2966)
- **Email:** mohemedikrama@gmail.com
- **Phone:** +91 9511602973
- **Core Research:** Phytopharmacology, Neuropharmacology (Depression & Stress Animal Models), Nanoformulations (Niosomes & Biodegradable PLGA Nanocarriers), Molecular Docking.

---

## ✨ Key Features & Architecture

1. **Academic Hero & Identity Showcase:**
   - High-resolution formal portrait (`/assets/profile/photo.webp`) with verified statutory badges.
   - Quick one-click copy buttons for Institutional Email and ORCID ID with feedback tooltips.
   - Primary Call-to-Action to view and download the comprehensive academic CV.

2. **Peer-Reviewed Publications Explorer:**
   - Filterable cards by category (`All`, `Scopus`, `PubMed`, `Nanoformulation Study`).
   - Real-time search query across titles, abstracts, DOIs, and keywords.
   - Interactive citation generator with one-click copy for **APA** and **Vancouver** styles.
   - Direct outbound DOI hyperlinks with verified badges.

3. **Interactive Credential & Certificate Gallery (with Lightbox Modal):**
   - High-resolution digital scans organized into categories:
     - Licensure & Statutory Registration (MSPC Certificate & Smart ID Card)
     - Institutional Leadership & Research Mentorship (DBATU Avishkar Coordinator)
     - Conferences & Scientific Presentations (VNIPRC AI Regulatory Paper, PM-USHA 2025, ICCR 2023)
     - Workshops & Faculty Development (KBHSS Anatek Analytical QA Workshop)
     - Awards & Professional Recognition (IPA 58th National Pharmacy Week, MHRD Swachhta Pakhwada)
   - **Interactive Lightbox Modal:**
     - Zoom In / Zoom Out / Reset View
     - Drag to Pan when zoomed
     - Keyboard arrow keys navigation & Escape to close
     - **Dual-Sided Card Flip:** Toggle between front profile and back regulatory instructions for the MSPC Pharmacist ID card.
     - Direct high-resolution download option.

4. **Teaching Pedagogy & Institutional Governance:**
   - Curricular breakdown of courses instructed: Human Anatomy & Physiology (HAP), Pathophysiology, Pharmacology, and Communication Skills.
   - Institutional governance roles: **DBATU Avishkar Institute Coordinator (2025–2026)**, **Sessional Examination In-charge**, and **University End-Semester Examination In-charge**.

5. **Chronological Academic Timeline:**
   - Visual milestone timeline tracing education (B.Pharm, M.Pharm Pharmacology, Ph.D. Scholar), licensure, faculty appointment, and scientific distinctions.

6. **Dedicated Print-to-PDF / ATS Academic CV (`/cv`):**
   - Clean, standard multi-page formatted academic Curriculum Vitae.
   - Fully optimized print stylesheet (`@media print`) for instant export to PDF via `window.print()` or browser print.

7. **Institutional Contact & Map Integration:**
   - Institutional card for Gangamai Institute of Pharmacy, Dhule.
   - Responsive embedded Google Maps interactive iframe.
   - Direct inquiry email drafting modal.

8. **Design & Theming:**
   - Modern medical/academic palette: Slate / Deep Navy (`#0f172a`), Clean White/Off-white, Emerald/Teal accents (`#0d9488` / `#059669`).
   - Dark/Light mode toggle with persistence.
   - Full mobile responsiveness across smartphones, tablets, laptops, and 4K displays.
   - Schema.org `Person` JSON-LD and OpenGraph metadata for scholarly search indexing.

---

## 🚀 How to Run the Application Locally

### Prerequisites
- Node.js (v18+ or v20+)
- npm (v9+)

### Installation & Development Server
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### Production Build & Launch
```bash
# Build optimized production bundle
npm run build

# Start production server
npm run start
```
Open [http://localhost:3000](http://localhost:3000) to view the production application.
To view the printable ATS academic CV, visit [http://localhost:3000/cv](http://localhost:3000/cv).
