import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammed Ikrama | Assistant Professor of Pharmacology & PhD Researcher",
  description: "Official Academic Portfolio & Digital CV of Mohammed Ikrama Shakeel Ahmed, Assistant Professor of Pharmacology at Gangamai Institute of Pharmacy and Doctoral Researcher at Vikrant University. Registered Pharmacist MSPC #375736.",
  keywords: [
    "Mohammed Ikrama",
    "Mohammed Ikrama Shakeel Ahmed",
    "Assistant Professor Pharmacology",
    "Pharmacology Researcher",
    "Gangamai Institute of Pharmacy Dhule",
    "MSPC Registered Pharmacist 375736",
    "Vikrant University PhD Scholar",
    "Phytopharmacology",
    "Niosomes",
    "PLGA Nanocarriers",
    "Avishkar DBATU Coordinator"
  ],
  authors: [{ name: "Mohammed Ikrama Shakeel Ahmed", url: "https://orcid.org/0009-0002-3334-2966" }],
  creator: "Mohammed Ikrama",
  metadataBase: new URL("https://ikrama-pharmacology.edu"),
  openGraph: {
    type: "profile",
    firstName: "Mohammed Ikrama",
    lastName: "Shakeel Ahmed",
    username: "mohammedikrama",
    title: "Mohammed Ikrama | Assistant Professor of Pharmacology & PhD Researcher",
    description: "Academic Portfolio, Peer-Reviewed Research Publications (Scopus / PubMed), Scanned MSPC Licensures, and Curriculum Vitae.",
    images: [
      {
        url: "/assets/profile/photo.jpg",
        width: 1105,
        height: 1424,
        alt: "Mohammed Ikrama Shakeel Ahmed - Assistant Professor of Pharmacology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Ikrama | Assistant Professor of Pharmacology",
    description: "Academic Portfolio, Scopus & PubMed Publications, Scanned Credentials, and Digital CV.",
    images: ["/assets/profile/photo.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  },
  other: {
    "citation_author": "Mohammed Ikrama Shakeel Ahmed",
    "citation_publication_date": "2024",
    "citation_institution": "Gangamai Institute of Pharmacy",
  }
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mohammed Ikrama Shakeel Ahmed",
  "givenName": "Mohammed Ikrama",
  "familyName": "Shakeel Ahmed",
  "jobTitle": "Assistant Professor of Pharmacology",
  "worksFor": {
    "@type": "EducationalOrganization",
    "name": "Gangamai Institute of Pharmacy",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nagaon, Dhule",
      "addressRegion": "Maharashtra",
      "postalCode": "424005",
      "addressCountry": "IN"
    }
  },
  "alumniOf": [
    {
      "@type": "CollegeOrUniversity",
      "name": "Vikrant University",
      "location": "Gwalior, Madhya Pradesh"
    },
    {
      "@type": "CollegeOrUniversity",
      "name": "K.B.H.S.S. Institute of Pharmacy",
      "location": "Malegaon, Nashik, Maharashtra"
    },
    {
      "@type": "CollegeOrUniversity",
      "name": "Royal College of Pharmaceutical Education & Research",
      "location": "Malegaon, Nashik, Maharashtra"
    }
  ],
  "sameAs": [
    "https://orcid.org/0009-0002-3334-2966"
  ],
  "knowsAbout": [
    "Pharmacology",
    "Phytopharmacology",
    "Neuropharmacology",
    "Niosomes",
    "PLGA Nanoparticles",
    "Preclinical Animal Models",
    "Molecular Docking",
    "Regulatory Compliance"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 antialiased selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
