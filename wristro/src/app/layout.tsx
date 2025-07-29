import "../styles/globals.css";
import { ReactNode } from "react";
import Navbar from "../components/navbar";

export const metadata = {
  title: "Wristro",
  description: "Your modern watches shopping store",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-radial-gradient text-gray-950">
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
