import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auto-École La Capitale - Votre Permis à Lomé",
  description: "Passez votre permis de conduire avec l'Auto-École La Capitale à Lomé. Formation complète, tarifs transparents et réussite garantie. Agrément N° 020/MTRAF/META.",
  openGraph: {
    title: "Auto-École La Capitale - Votre Permis à Lomé",
    description: "Passez votre permis de conduire avec l'Auto-École La Capitale à Lomé. Formation complète, tarifs transparents et réussite garantie. Agrément N° 020/MTRAF/META.",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Auto-École La Capitale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto-École La Capitale - Votre Permis à Lomé",
    description: "Passez votre permis de conduire avec l'Auto-École La Capitale à Lomé. Formation complète, tarifs transparents et réussite garantie. Agrément N° 020/MTRAF/META.",
    images: ["/images/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
