import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'سیستم اتوماسیون بنگاه معاملات ملکی',
  description: 'سیستم مدیریت و اتوماسیون کامل برای بنگاه معاملات ملکی',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-vazir">
        {children}
      </body>
    </html>
  );
}