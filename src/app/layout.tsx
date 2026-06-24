import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karl Konsult International | Overseas Education Consultants",
  description:
    "Karl Konsult International guides students through admissions, visas, and test prep for studying in Canada, the UK, Australia, Germany and beyond.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
