import type { Metadata } from "next";
import { inter } from "@/config/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julian | Shop",
  description: "E-commerce make from JulianDev ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
