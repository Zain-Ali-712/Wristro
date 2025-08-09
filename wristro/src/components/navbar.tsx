'use client';
import { ClerkProvider } from "@clerk/nextjs";
import { SignedIn, SignInButton, SignOutButton, SignedOut } from "@clerk/nextjs";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { useTheme } from '../app/themeContext';

const Navbar: FC = () => {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <ClerkProvider>
      <div className="flex justify-center w-full"> 
        <nav className={`flex flex-row flex-wrap justify-center items-center z-50 px-2 py-2 gap-2 sm:gap-3 rounded-4xl ${theme} w-full sm:w-auto`}>
          <Link
            href="/"
            className={`px-4 py-2 text-sm sm:text-base font-medium border border-accent rounded-4xl hover:bg-hover-bg hover:text-hover-text transition-all duration-500 `}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={`px-4 py-2 text-sm sm:text-base font-medium border border-accent rounded-4xl hover:bg-hover-bg hover:text-hover-text transition-all duration-500 `}
          >
            Products
          </Link>
          <Link
            href="/cart"
            className={`px-4 py-2 text-sm sm:text-base font-medium border border-accent rounded-4xl hover:bg-hover-bg hover:text-hover-text transition-all duration-500 `}
          >
            Cart
          </Link>
          <SignedOut>
            <SignInButton mode="modal">
              <span className="px-4 py-2 text-sm sm:text-base text-accent font-medium rounded-4xl bg-primary hover:bg-hover-bg hover:text-hover-text border border-accent transition-all duration-500">
                Sign In
              </span>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <SignOutButton>
              <span className="px-4 py-2 text-sm sm:text-base text-accent font-medium rounded-4xl bg-primary hover:bg-hover-bg hover:text-hover-text border border-accent transition-all duration-500">
                Sign Out
              </span>
            </SignOutButton>
          </SignedIn>
        </nav>
      </div>
    </ClerkProvider>
  );
};

export default Navbar;