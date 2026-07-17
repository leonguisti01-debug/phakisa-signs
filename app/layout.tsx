import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phakisa Signs",
  description: "Printing, Signage & Shopfitting Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}