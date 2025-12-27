import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DEDEP SUPRIYADI - Budidaya Ikan Tawar Berkualitas",
  description: "Ahli budidaya ikan tawar dengan pengalaman 10+ tahun. Menyediakan ikan konsumsi, benih berkualitas, dan konsultasi budidaya di Cianjur, Jawa Barat.",
  keywords: ["DEDEP SUPRIYADI", "budidaya ikan tawar", "ikan konsumsi", "benih ikan", "konsultasi perikanan", "Cianjur", "Jawa Barat"],
  authors: [{ name: "DEDEP SUPRIYADI" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "DEDEP SUPRIYADI - Budidaya Ikan Tawar Berkualitas",
    description: "Ahli budidaya ikan tawar dengan pengalaman 10+ tahun. Menyediakan ikan konsumsi, benih berkualitas, dan konsultasi budidaya.",
    url: "https://dedepsupriyadi.com",
    siteName: "DEDEP SUPRIYADI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DEDEP SUPRIYADI - Budidaya Ikan Tawar",
    description: "Ahli budidaya ikan tawar dengan pengalaman 10+ tahun di Cianjur, Jawa Barat",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="facebook-domain-verification" content="a0py7n8q552bwpsidp3yaguay2437q" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
