import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}

