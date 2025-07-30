"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow sticky top-0 z-50">
      <Link
        href="/"
        className="text-3xl tracking-wider uppercase text-indigo-600"
        style={{ fontFamily: "Oryn", letterSpacing: "0.1em" }}
      >
        Wristro
      </Link>
      <div className="flex gap-6 text-sm font-medium">
        <Link href="/products" className="hover:text-indigo-600">Products</Link>
        <Link href="/cart" className="hover:text-indigo-600">Cart</Link>
        <Link href="/admin" className="hover:text-indigo-600">Admin</Link>
      </div>
    </nav>
  );
}
