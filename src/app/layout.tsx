import './globals.css'
import { Inter } from 'next/font/google'
import LocalFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export const metadata = {
  title: 'Phenyo Pilatso',
  description: 'Hi, my name is Phenyo Pilatso. I am a software developer, specializing in web development.',
  icons: {
    shortcut: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={[inter.className, calSans.variable].join("")}>
      <body>{children}</body>
    </html>
  )
}
