import "../styles/globals.css";
import { ReactNode } from "react";
import Navbar from "../components/navbar";

export const metadata = {
  title: "GadgetNest",
  description: "Your modern gadget shopping store",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-black via-black to-slate-900 text-gray-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
