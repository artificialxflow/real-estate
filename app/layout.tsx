import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "./globals.css";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazir",
});

export const metadata: Metadata = {
  title: "سیستم مدیریت بنگاه معاملات ملکی",
  description: "سیستم جامع مدیریت و اتوماسیون بنگاه معاملات ملکی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${vazir.variable}`}>
        {children}
      </body>
    </html>
  );
}
