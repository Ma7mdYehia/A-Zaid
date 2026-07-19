import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Bebas_Neue,
  Inter,
  Caveat,
  Alexandria,
  IBM_Plex_Sans_Arabic,
} from "next/font/google";
import "./globals.css";
import "./neumorphism.css";
import { LanguageProvider } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

const arabicDisplay = Alexandria({
  variable: "--font-arabic-display",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const arabicBody = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic-body",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdulrahman Zaid — MENA Industrial Entrepreneur & Operating Leader",
  description:
    "Digital profile and business portfolio for Abdulrahman Zaid, focused on manufacturing, trading, food industries, and regional operations across Egypt, Saudi Arabia, and the UAE.",
  metadataBase: new URL("https://a-zaid.com"),
  openGraph: {
    title: "Abdulrahman Zaid — MENA Industrial Entrepreneur & Operating Leader",
    description:
      "Manufacturing, trading, food industries, import, distribution, and business operations across Egypt, Saudi Arabia, and the UAE.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${bebasNeue.variable} ${caveat.variable} ${arabicDisplay.variable} ${arabicBody.variable}`}
    >
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
