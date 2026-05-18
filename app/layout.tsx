import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "ИНИЗ — бурение скважин на воду и геология в Твери и Тверской области",
    template: "%s · ИНИЗ Тверь",
  },
  description:
    "Бурение скважин на воду «под ключ» и инженерно-геологические изыскания в Твери и Тверской области. 15 лет на рынке, своя техника, гарантия 5 лет.",
  applicationName: "ИНИЗ",
  authors: [{ name: SITE.fullName }],
  keywords: [
    "бурение скважин Тверь",
    "скважина на воду Тверская область",
    "инженерно-геологические изыскания Тверь",
    "ИГИ Тверь",
    "водоснабжение под ключ",
    "артезианская скважина Тверь",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE.url,
    siteName: SITE.brand,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.brand }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  icons: { icon: "/img/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
