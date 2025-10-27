import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({ subsets: ["hebrew", "latin"], weight: ["300","400","500","700","900"] });

export const metadata: Metadata = {
  title: "נדל״ן אשדוד והסביבה",
  description: "סוכן נדל״ן למכירה/קנייה/השכרה באשדוד, יבנה, גן יבנה, גדרה, אשקלון והסביבה.",
  openGraph: {
    title: "נדל״ן אשדוד והסביבה",
    description: "סוכן נדל״ן למכירה/קנייה/השכרה באשדוד, יבנה, גן יבנה, גדרה, אשקלון והסביבה.",
    type: "website",
    locale: "he_IL",
  },
  twitter: {
    card: "summary_large_image",
    title: "נדל״ן אשדוד והסביבה",
    description: "סוכן נדל״ן למכירה/קנייה/השכרה באשדוד, יבנה, גן יבנה, גדרה, אשקלון והסביבה.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body className={heebo.className + " antialiased"}>{children}</body>
    </html>
  );
}
