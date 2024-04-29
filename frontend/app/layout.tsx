import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SavePro",
  description: "Easily create pockets to save money",
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
