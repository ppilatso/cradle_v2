import './globals.css';
import { Inter, Josefin_Sans } from 'next/font/google';
import LocalFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] });
const josefin = Josefin_Sans({ subsets: ['latin']});

export const metadata = {
  title: 'Phenyo Pilatso',
  description: 'Hi, my name is Phenyo Pilatso. I am a software developer, specializing in web development.',
  icons: {
    shortcut: './favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={josefin.className}>
      <body>{children}</body>
    </html>
  );
}
