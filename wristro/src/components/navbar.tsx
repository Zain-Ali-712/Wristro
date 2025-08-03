'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, useContext } from 'react';
import { useTheme } from '../app/themeContext';

const Navbar: FC = () => {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <nav className={`flex items-center px-6 py-0.5 gap-6 rounded-4xl ${theme}`}>
      <Link
        href="/"
        className={`relative px-6 py-2 text-lg font-medium border border-accent rounded-4xl hover:bg-hover-bg hover:text-hover-text transition-all duration-500 ${
          router.pathname === '/' ? 'bg-primary text-background' : ''
        }`}
      >
        Home
      </Link>
      <Link
        href="/products"
        className={`relative px-4 py-2 text-lg font-medium border border-accent rounded-4xl hover:bg-hover-bg hover:text-hover-text transition-all duration-500 ${
          router.pathname === '/products' ? 'bg-primary text-background' : ''
        }`}
      >
        Products
      </Link>
      <Link
        href="/cart"
        className={`relative px-4 py-2 text-lg font-medium border border-accent rounded-4xl hover:bg-hover-bg hover:text-hover-text transition-all duration-500 ${
          router.pathname === '/cart' ? 'bg-primary text-background' : ''
        }`}
      >
        Cart
      </Link>
    </nav>
  );
};

export default Navbar;