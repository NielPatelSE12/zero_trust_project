import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Example from "./Components/example";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zero Trust Project",
  description: "Team Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <h1>Testing first commit by Mark (again)</h1>
      <Example />
    </html>
  );
}
