import "../styles/globals.css";
import { Maven_Pro } from 'next/font/google';
import Link from "next/link";
import { ReactNode } from "react";
import Navbar from "../components/navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { SignedIn, SignInButton, SignOutButton, SignedOut } from "@clerk/nextjs";
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
    <ClerkProvider>
      <ThemeProvider>
        <html lang="en">
          <head>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
          </head>
          <body className={`min-h-screen bg-conic-mix text-text ${maven.className}`}>
            <div className="flex items-center justify-between mt-4 px-8">
              <Link
                href="/"
                className="text-5xl uppercase mx-w-max p-4 font-bold text-logo hover:text-hover-text transition-colors duration-500"
                style={{ fontFamily: "Oryn", letterSpacing: "0.1em" }}
              >
                Wristro
              </Link>
              <div className="flex items-center gap-6">
                <Navbar />
              </div>
              <div className="flex items-center gap-2">
                <SignedOut>
                  <SignInButton mode="modal">
                    <span className="relative px-6 py-2 text-accent text-lg font-medium rounded-4xl bg-primary hover:bg-hover-bg hover:text-hover-text border border-accent group transition-all duration-500">
                      Sign In
                    </span>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <SignOutButton>
                    <span className="relative px-6 py-2 text-accent text-lg font-medium rounded-4xl bg-primary hover:bg-hover-bg hover:text-hover-text border border-accent group transition-all duration-500">
                      Sign Out
                    </span>
                  </SignOutButton>
                </SignedIn>
              </div>
            </div>
            <main className="min-h-screen">{children}</main>
          </body>
        </html>
      </ThemeProvider>
    </ClerkProvider>
  );
}