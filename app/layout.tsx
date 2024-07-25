import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatPal",
  description: "People Connecting People",
  
  openGraph: {
    type: "website",
    url: "/chatpal-og.jpg",
    title: "ChatPal - People Connecting People",
    description: "People Connecting People",
    images: [
      {
          url: "/chatpal-og.jpg",
          width: 1200,
          height: 630,
          alt: 'People Connecting People'
        }
      ]
    },


    twitter: {
      card: "summary_large_image",
      site: "@chatpal",  
      title: "People Connecting People",
      description: "People Connecting People",
      creator:"@chatpal",
    },

    
    keywords: "People Connecting People",
    robots: "index, follow",
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
