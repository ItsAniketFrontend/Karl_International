import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://karlkonsult.com"),
  title: {
    default:
      "Karl Konsult International | Study Abroad & Overseas Education Consultants in Jaipur",
    template: "%s | Karl Konsult International",
  },
  description:
    "Karl Konsult International is a trusted study abroad consultancy in Jaipur. Get free counselling, IELTS/PTE coaching, scholarship and student visa support for studying in the UK, Canada, Australia, Germany, Europe and beyond — plus MBBS abroad.",
  keywords: [
    "study abroad consultants in Jaipur",
    "overseas education consultants",
    "student visa consultants",
    "IELTS coaching",
    "best IELTS coaching in Jaipur",
    "top IELTS institute in Jaipur",
    "PTE coaching Jaipur",
    "MBBS abroad consultants",
    "study in UK",
    "study in Canada",
    "study in Australia",
    "study in Germany",
    "scholarship assistance for international students",
    "Karl Konsult International",
  ],
  openGraph: {
    title:
      "Karl Konsult International | Study Abroad & Overseas Education Consultants in Jaipur",
    description:
      "Free counselling, IELTS/PTE coaching, scholarships and student visa support for studying in the UK, Canada, Australia, Germany, Europe and beyond.",
    type: "website",
    locale: "en_IN",
    siteName: "Karl Konsult International",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
