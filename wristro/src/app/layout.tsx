import "../styles/globals.css";
import { Maven_Pro } from 'next/font/google';
import Link from "next/link";
import { ReactNode } from "react";
import Navbar from "../components/navbar";
import { ThemeProvider } from './themeContext';

const maven = Maven_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: "Wristro",
  description: "Your modern watches shopping store",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
      <ThemeProvider>
        <html lang="en">
          <head>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
          </head>
          <body className={`min-h-screen bg-conic-mix text-text ${maven.className}`}>
            <header className="flex flex-col sm:flex-row items-center justify-between px-4 py-4">
              <Link
                href="/"
                className="text-4xl sm:text-5xl uppercase text-center w-full sm:w-auto sm:mx-0 p-3 font-bold text-logo hover:text-hover-text transition-colors duration-500 hidden-initial animate-from-top"
                style={{ fontFamily: "Oryn", letterSpacing: "0.1em" }}
              >
                Wristro
              </Link>
              <div className="flex flex-row items-center justify-between w-full sm:w-auto mt-2 sm:mt-0 hidden-initial animate-from-top">
                <Navbar />
              </div>
            </header>
            <main className="min-h-screen">{children}</main>
          </body>
        </html>
      </ThemeProvider>
  );
}