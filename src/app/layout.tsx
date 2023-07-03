import './globals.css';
import { Encode_Sans } from 'next/font/google';

const encode = Encode_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Pokemon List',
  description: 'Created for Bright Dolphins',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={encode.className}>{children}</body>
    </html>
  );
}
