'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from './themeContext';

export default function Home() {
  const { theme, changeTheme } = useTheme();

  return (
    <div className={`relative min-h-screen ${theme}`}>
      {/* Hero Section with Background Text */}
      <div className="relative w-full h-[65vh] md:h-[75vh] lg:h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1
            className="text-[5rem] sm:text-[7rem] md:text-[8rem] lg:text-[10rem] font-bold text-primary opacity-10 mt-[-3rem] sm:mt-[-4rem] md:mt-[-5rem] lg:mt-[-6rem]"
            style={{ fontFamily: "Oryn", letterSpacing: "0.1em" }}
          >
            WRISTRO
          </h1>
        </div>
        
        {/* Transparent box with shadow overlaying the text */}
        <div 
          className="absolute hidden sm:block sm:w-[85%] md:w-[80%] lg:w-[72%]"
          style={{
            right: '0',
            top: '5%',
            height: '450px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 10px rgba(0, 0, 0, 0.2)',
            borderRadius: '30px 0 0 30px',
            zIndex: 10,
          }}
        >
          {/* Theme Switcher Squares with Watch Images - Inside transparent div */}
          <div className="w-20 h-auto p-5 flex flex-col items-center gap-4 bg-primary absolute" style={{ right: '5%' }}>
            <div
              className="w-12 h-12 rounded-md overflow-hidden hover:border-1 cursor-pointer transition-all hover:scale-110 bg-white bg-opacity-10 duration-500"
              style={{ borderColor: theme === 'theme-1' ? 'border-1 border-var(--color-accent)' : 'transparent' }}
              onClick={() => changeTheme('theme-1')}
            >
              <Image 
                src="/watchA.jpg" 
                alt="Theme 1" 
                width={48} 
                height={48} 
                className="object-cover w-full h-full"
              />
            </div>
            <div
              className="w-12 h-12 rounded-md overflow-hidden hover:border-1 cursor-pointer transition-all hover:scale-110 bg-white bg-opacity-10 duration-500"
              style={{ borderColor: theme === 'theme-2' ? 'border-1 border-var(--color-accent)' : 'transparent' }}
              onClick={() => changeTheme('theme-2')}
            >
              <Image 
                src="/watchB.jpg" 
                alt="Theme 2" 
                width={48} 
                height={48} 
                className="object-cover w-full h-full"
              />
            </div>
            <div
              className="w-12 h-12 rounded-md overflow-hidden hover:border-1 cursor-pointer transition-all hover:scale-110 bg-white bg-opacity-10 duration-500"
              style={{ borderColor: theme === 'theme-3' ? 'border-1 border-var(--color-accent)' : 'transparent' }}
              onClick={() => changeTheme('theme-3')}
            >
              <Image 
                src="/watchC.jpg" 
                alt="Theme 3" 
                width={48} 
                height={48} 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          {/* Theme-specific content */}
          <div className="absolute max-w-md pr-8" style={{ right: '5%', bottom: '5%' }}>
            {theme === 'theme-1' && (
              <div className="text-primary">
                <h2 className="text-2xl font-bold mb-2">Crafted with elegance and powered by design.</h2>
                <p className="text-sm opacity-80">Engineered with a sleek steel frame, this timepiece blends innovation with minimalist luxury.</p>
              </div>
            )}
            
            {theme === 'theme-2' && (
              <div className="text-accent">
                <h2 className="text-2xl font-bold mb-2">Rooted in tradition, styled for the present.</h2>
                <p className="text-sm opacity-80">Genuine leather meets modern engineering — a perfect balance of rugged charm and refined detail.</p>
              </div>
            )}
            
            {theme === 'theme-3' && (
              <div className="text-secondary">
                <h2 className="text-2xl font-bold mb-2">Where shadow meets sophistication.</h2>
                <p className="text-sm opacity-80">A commanding presence forged in deep blacks and cool metal tones — style that speaks in silence.</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Watch image overlaying both the text and transparent box */}
        {theme === 'theme-3' && (
          <div className="absolute z-20 right-[20%] top-[5%] sm:right-[25%] sm:top-[-5%] md:right-[30%] md:top-[-10%] lg:right-[32%] lg:top-[-10%]">
            <Image
              src="/watch3.png" 
              alt="Luxury Watch - Theme 1"
              width={600} 
              height={600}
              className="object-contain w-[200px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px]"
              style={{
                transform: 'rotateY(20deg) perspective(1000px)',
                borderRadius: '30px',
                zIndex: 20
              }}
            />
          </div>
        )}
        {theme === 'theme-2' && (
          <div className="absolute z-20 right-[25%] top-[10%] sm:right-[30%] sm:top-[5%] md:right-[35%] md:top-[2%] lg:right-[30%] lg:top-[-20%]">
            <Image
              src="/watch2.png" 
              alt="Luxury Watch - Theme 2"
              width={600} 
              height={600}
              className="object-contain w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[330px] md:h-[330px] lg:w-[600px] lg:h-[600px]"
              style={{
                transform: 'rotateY(20deg) perspective(1000px)',
                borderRadius: '30px',
                zIndex: 20
              }}
            />
          </div>
        )}
        {theme === 'theme-1' && (
          <div className="absolute z-20 right-[22%] top-[8%] sm:right-[28%] sm:top-[0%] md:right-[32%] md:top-[-5%] lg:right-[32%] lg:top-[-5%]">
            <Image
              src="/watch1.png" 
              alt="Luxury Watch - Theme 3"
              width={550} 
              height={550}
              className="object-contain w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[550px] lg:h-[550px]"
              style={{
                transform: 'rotateY(20deg) perspective(1000px)',
                borderRadius: '30px',
                zIndex: 20
              }}
            />
          </div>
        )}
        
        {/* Promotional box on bottom left */}
        <div 
          className="absolute bg-secondary text-white p-6 sm:p-8 rounded-tr-3xl rounded-br-3xl hidden sm:block sm:w-[220px] md:w-[270px]"
          style={{
            left: '0',
            bottom: '7%',
            height: '200px',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
            zIndex: 15
          }}
        >
          <h3 className="text-lg sm:text-xl font-bold mb-2">Timeless Elegance</h3>
          <p className="text-xs sm:text-sm mb-3 sm:mb-4">Discover our collection of handcrafted timepieces that blend tradition with innovation.</p>
          <button className="bg-primary text-white px-3 py-1 sm:px-4 sm:py-2 mb-3 sm:mb-4 rounded-md hover:bg-opacity-80 transition-all text-sm cursor-pointer">
            Explore Collection
          </button>
        </div>
      </div>
    </div>
  );
}