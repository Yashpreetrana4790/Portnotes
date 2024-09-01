import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Great_Vibes, Inter } from 'next/font/google'

import "./globals.css";

export const metadata: Metadata = {
  title: "Rambler Rana",
  description:
    "I'm Yashpreet Rana, a software engineer and web developer. I build websites and web applications.",
};


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const greatVibesFont = Great_Vibes({
  variable: '--font-greatvibes',
  weight: ['400'],
  subsets: ['latin'],
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.className} ${greatVibesFont.variable} ${inter.variable} ${GeistMono.className} font-regular`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="sm:container mx-auto w-[100vw] h-auto px-4">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
