import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true
});

export const metadata: Metadata = {
  title: "Lowe's Home Improvement - Shop Tools, Appliances & More",
  description: "Shop Lowe's for all your home improvement needs: appliances, bathroom, building supplies, flooring, hardware, paint, patio furniture, tools and more.",
  keywords: "home improvement, tools, appliances, building supplies, Lowe's",
  openGraph: {
    title: "Lowe's Home Improvement",
    description: "Shop Lowe's for all your home improvement needs",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full">
      <body className={`${inter.className} w-full m-0 p-0`}>
        {children}
      </body>
    </html>
  );
}
