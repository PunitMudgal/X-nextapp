import type { Metadata } from "next";
import "./globals.css";

import { Rubik } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Home | X",
  description: "Home | X",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${rubik.variable} antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
