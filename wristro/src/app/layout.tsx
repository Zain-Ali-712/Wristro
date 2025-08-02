import "../styles/globals.css";
import { Maven_Pro } from 'next/font/google';
import Link from "next/link";
import { ReactNode } from "react";
import Navbar from "../components/navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { SignedIn, SignInButton, SignOutButton, SignedOut } from "@clerk/nextjs";

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
      <html lang="en">
        <body className={`min-h-screen bg-conic-mix text-gray-900 ${maven.className}`}>
          <div className="flex items-center justify-between mt-4 px-8">
            <Link
              href="/"
              className="text-5xl uppercase mx-w-max p-4 font-bold text-slate-800 hover:text-slate-600 transition-colors duration-500"
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
                  <span className="relative px-6 py-2 text-lg font-medium rounded-4xl hover:text-slate-950 hover:bg-gray-700 border-1 hover:text-slate-700 group transition-all duration-500">
                    Sign In
                  </span>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <SignOutButton>
                  <span className="relative px-6 py-2 text-lg font-medium rounded-4xl hover:text-slate-950 hover:bg-gray-700 border-1 hover:text-slate-700 group transition-all duration-500">
                    Sign Out
                  </span>
                </SignOutButton>
              </SignedIn>
            </div>
          </div>
          <main className="min-h-screen">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}