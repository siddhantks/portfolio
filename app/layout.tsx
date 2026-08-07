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
  title: "Siddhant Singh — Software Engineer",
  description:
    "Portfolio of Siddhant Singh — Building scalable products for real-world impact: React, Next.js, and Spring Boot. B.Tech CSE, MNNIT Prayagraj.",
  keywords: [
    "Siddhant Singh",
    "AI Engineer",
    "LangGraph",
    "RAG Pipeline",
    "Edge ML",
    "Agentic AI",
    "MNNIT",
    "Machine Learning",
    "FastAPI",
    "Next.js",
  ],
  authors: [{ name: "Siddhant Singh", url: "https://www.linkedin.com/in/siddhant-singh-mnnit-allahabad/" }],
  creator: "Siddhant Singh",
  openGraph: {
    title: "Siddhant Singh — Software Engineer",
    description: "Fault-tolerant systems. Not demos — systems that ship.",
    type: "website",
    locale: "en_US",
    siteName: "Siddhant Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddhant Singh — Software Engineer",
    description: "Fault-tolerant systems. Not demos — systems that ship.",
    creator: "@SiddhantSingh",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
