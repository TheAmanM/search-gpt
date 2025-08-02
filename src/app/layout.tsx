import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://search-gpt-app.vercel.app"),
  title: "Search GPT",
  description: 'A "search engine" but for Chat GPT.',
  openGraph: {
    title: "Search GPT",
    description: 'A "search engine" but for Chat GPT.',
  },
  twitter: {
    title: "Search GPT",
    description: 'A "search engine" but for Chat GPT.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
