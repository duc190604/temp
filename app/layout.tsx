import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { StickyPromoBar } from "@/components/StickyPromoBar";
import { Footer } from "@/components/Footer";
import { ModalProvider } from "@/contexts/ModalContext";

export const metadata: Metadata = {
  title: "IM8 Health Clone",
  description: "IM8 Health - Premium health supplements clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ModalProvider>
          <StickyPromoBar />
          <Header />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}

