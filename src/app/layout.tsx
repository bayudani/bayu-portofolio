import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GridBackground } from "@/src/components/effects/GridBackground";
import { Particles } from "@/src/components/effects/Particles";
import { Dock } from "@/src/components/dock/Dock";
import { AiSummary } from "@/src/components/shared/AiSummary";
import { FAQ_DATA } from "@/src/data/faq";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bayudanikurniawan.byvictech.site"),
  title: {
    default: "Bayu Dani Kurniawan | Fullstack Developer & Mobile Engineer",
    template: "%s | Bayu Dani Kurniawan",
  },
  applicationName: "Bayu Dani Kurniawan Portfolio",
  description:
    "Fullstack Developer & Mobile Engineer specializing in web applications, mobile apps, AI-integrated systems, and augmented reality experiences. Based in Bengkalis, Riau, Indonesia.",
  other:{
    "apple-mobile-web-app-title":"Bayu Dani Kurniawan Portfolio",
    "application-name":"Bayu Dani Kurniawan Portfolio"
  },
  keywords: [
    "Bayu Dani Kurniawan",
    "Fullstack Developer",
    "Mobile Engineer",
    "Web Developer",
    "AI Developer",
    "AR Developer",
    "Laravel",
    "Flutter",
    "React",
    "Next.js",
    "Indonesia",
    "Riau",
    "Portfolio",
  ],
  authors: [{ name: "Bayu Dani Kurniawan", url: "https://github.com/bayudani" }],
  creator: "Bayu Dani Kurniawan",
  publisher: "Bayu Dani Kurniawan",
  category: "portfolio",
  referrer: "origin-when-cross-origin",
  generator: "Next.js",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bayudanikurniawan.byvictech.site",
    siteName: "Bayu Dani Kurniawan Portfolio",
    title: "Bayu Dani Kurniawan | Fullstack Developer & Mobile Engineer",
    description:
      "Fullstack Developer & Mobile Engineer specializing in web applications, mobile apps, AI-integrated systems, and augmented reality experiences.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bayu Dani Kurniawan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bayu Dani Kurniawan | Fullstack Developer & Mobile Engineer",
    description:
      "Fullstack Developer & Mobile Engineer specializing in web applications, mobile apps, AI-integrated systems, and augmented reality experiences.",
    images: ["/og-image.png"],
    creator: "@bayukrnwn",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/profile.png" },
    ],
    apple: [{ url: "/images/profile.png" }],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://bayudanikurniawan.byvictech.site",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://bayudanikurniawan.byvictech.site/#person",
      name: "Bayu Dani Kurniawan",
      givenName: "Bayu Dani",
      familyName: "Kurniawan",
      jobTitle: "Fullstack Developer & Mobile Engineer",
      description:
        "Fullstack Developer & Mobile Engineer specializing in web applications, mobile apps, AI-integrated systems, and augmented reality experiences.",
      url: "https://bayudanikurniawan.byvictech.site",
      image: "https://bayudanikurniawan.byvictech.site/images/profile.png",
      sameAs: [
        "https://github.com/bayudani",
        "https://linkedin.com/in/bayu-dani-kurniawan",
        "https://instagram.com/bayukrnw_n",
      ],
      knowsAbout: [
        "Web Development",
        "Mobile Development",
        "Artificial Intelligence",
        "Augmented Reality",
        "Backend Engineering",
        "Full Stack Development",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengkalis",
        addressRegion: "Riau",
        addressCountry: "Indonesia",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://bayudanikurniawan.byvictech.site/#website",
      url: "https://bayudanikurniawan.byvictech.site",
      name: "Bayu Dani Kurniawan Portfolio",
      alternateName: "Bayu Dani Kurniawan",
      description:
        "Fullstack Developer & Mobile Engineer specializing in web applications, mobile apps, AI-integrated systems, and augmented reality experiences.",
      publisher: {
        "@id": "https://bayudanikurniawan.byvictech.site/#person",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://bayudanikurniawan.byvictech.site/#organization",
      name: "Bayu Dani Kurniawan Portfolio",
      url: "https://bayudanikurniawan.byvictech.site",
      logo: "https://bayudanikurniawan.byvictech.site/og-image.png",
    },
    {
      "@type": "FAQPage",
      "@id": "https://bayudanikurniawan.byvictech.site/#faq",
      mainEntity: FAQ_DATA.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Search Console — ganti content dengan kode verifikasi */}
        <meta name="google-site-verification" content="92z-rdbSwgCc0iJ0ayO3rqeaTlNZ3AVbk6TdaOChTrI" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#050505] text-[#F5F5F5]">
        <GridBackground />
        <Particles />
        <AiSummary />
        {children}
        <footer className="relative py-8 px-4 z-10 border-t border-white/5">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Bayu Dani Kurniawan.
            </p>
          </div>
        </footer>
        <Dock />
      </body>
    </html>
  );
}
