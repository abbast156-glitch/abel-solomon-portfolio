import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abel Solomon Asfaw | Flutter Developer & Educator in Addis Ababa",
  description: "BA English Language & Literature graduate from Kotebe University of Education with 9+ years of classroom experience. Specializing in building Flutter and Firebase EdTech apps aligned with the Ethiopian curriculum.",
  keywords: [
    "Abel Solomon Asfaw",
    "Flutter developer Addis Ababa",
    "Ethiopian curriculum app developer",
    "English Language and Literature educator",
    "EdTech developer Ethiopia",
    "Android developer Addis Ababa",
    "Firebase developer Addis Ababa",
  ],
  authors: [{ name: "Abel Solomon Asfaw" }],
  creator: "Abel Solomon Asfaw",
  metadataBase: new URL("https://abelsolomon.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Abel Solomon Asfaw | Flutter Developer & Educator in Addis Ababa",
    description: "BA English Language & Literature graduate from Kotebe University of Education with 9+ years of classroom experience. Specializing in building Flutter and Firebase EdTech apps aligned with the Ethiopian curriculum.",
    url: "https://abelsolomon.vercel.app",
    siteName: "Abel Solomon Asfaw Portfolio",
    locale: "en_US",
    type: "website",
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
      className={`${outfit.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
