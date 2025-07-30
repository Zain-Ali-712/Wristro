import "../styles/globals.css";
import { Maven_Pro } from 'next/font/google'
import { ReactNode } from "react";
import Navbar from "../components/navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { Sign .SignedOut } from "@clerk/nextjs";

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
        <body className={`min-h-screen bg-[radial-gradient(ellipse_at_right,_#6366f1,_#a5b4fc,_#e0e7ff)] text-gray-950 ${maven.className}`}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
        </body>
      </html >
    </ClerkProvider>
  );
}
