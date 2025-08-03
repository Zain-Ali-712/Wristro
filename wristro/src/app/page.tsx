'use client';

import Link from 'next/link';
import { useTheme } from './themeContext';

export default function Home() {
  const { theme, changeTheme } = useTheme();

  return (
    <div className={`relative min-h-screen ${theme}`}>
      {/* Hero Section with Background Text */}
      <div className="relative w-full h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1
            className="text-[10rem] font-bold text-primzry opacity-10"
            style={{ fontFamily: "Oryn", letterSpacing: "0.1em" }}
          >
            WRISTRO
          </h1>
        </div>
      </div>
      {/* Theme Switcher Circles */}
      <div className="flex justify-center gap-4 p-8">
        <div
          className="w-8 h-8 rounded-full bg-primary cursor-pointer"
          onClick={() => changeTheme('theme-1')}
        />
        <div
          className="w-8 h-8 rounded-full bg-accent cursor-pointer"
          onClick={() => changeTheme('theme-2')}
        />
        <div
          className="w-8 h-8 rounded-full bg-secondary cursor-pointer"
          onClick={() => changeTheme('theme-3')}
        />
      </div>
    </div>
  );
}