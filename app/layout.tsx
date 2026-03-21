import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { CustomCursor } from "@/components/custom-cursor";
import { BackgroundEffects } from "@/components/background-effects";

export const metadata: Metadata = {
  title: "iDesign4U | Web Design, Branding & Digital Marketing Agency",
  description:
    "iDesign4U — Premium web design, branding & digital marketing for businesses worldwide. Stunning websites that convert visitors into leads.",
  keywords: [
    "web design",
    "branding",
    "digital marketing",
    "UI/UX design",
    "SEO",
    "landing pages",
  ],
  authors: [{ name: "iDesign4U" }],
  openGraph: {
    title: "iDesign4U | Web Design, Branding & Digital Marketing Agency",
    description:
      "Premium web design, branding & digital marketing for businesses worldwide.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07070f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <CustomCursor />
        <BackgroundEffects />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
