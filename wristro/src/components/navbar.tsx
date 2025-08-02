'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

const Navbar: FC = () => {
  const router = useRouter();

  return (
    <nav className="flex items-center px-6 py-0.5 gap-6 border-accent rounded-4xl group-hover:animate-rotate-border">
      <Link
        href="/"
        className={`relative px-6 py-2 text-lg font-medium border-1 rounded-4xl hover:text-slate-950 hover:bg-gray-700  hover:text-slate-700 group transition-all duration-500`}
      >
        Home
      </Link>
      <Link
        href="/products"
        className={`relative px-4 py-2 text-lg font-medium border-1 rounded-4xl hover:text-slate-950 hover:bg-gray-700  hover:text-slate-700 group transition-all duration-500`}
      >
        Products
      </Link>
      <Link
        href="/cart"
        className={`relative px-4 py-2 text-lg font-medium border-1 rounded-4xl hover:text-slate-950 hover:bg-gray-700  hover:text-slate-700 group transition-all duration-500`}
      >
        Cart
      </Link>
    </nav>
  );
};

export default Navbar;