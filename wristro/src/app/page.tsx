'use client';
import Image from 'next/image';
import { useTheme } from './themeContext';
import { useEffect, useRef } from 'react';
import TiltedCard from '../components/Tiltedcard';

export default function Home() {
  const { theme, changeTheme } = useTheme();
  const iconSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-from-bottom');
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (iconSectionRef.current) {
      observer.observe(iconSectionRef.current);
    }

    return () => {
      if (iconSectionRef.current) {
        observer.unobserve(iconSectionRef.current);
      }
    };
  }, []);

  const handleMenClick = () => {
    // Placeholder for Men category page navigation
    console.log("Navigate to Men Collection page");
  };

  const handleWomenClick = () => {
    // Placeholder for Women category page navigation
    console.log("Navigate to Women Collection page");
  };

  const handleCoupleClick = () => {
    // Placeholder for Couple category page navigation
    console.log("Navigate to Couple Collection page");
  };

  return (
    <div className={`relative min-h-screen ${theme}`}>
      <div className="relative w-full h-[75vh] sm:h-[70vh] md:h-[75vh] lg:h-[85vh] p-[5%] flex justify-center ">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none hidden-initial animate-fade-in">
          <h1
            className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] mt-[-8rem] font-bold text-primary opacity-10"
            style={{ fontFamily: "Oryn", letterSpacing: "0.1em" }}
          >
            WRISTRO
          </h1>
        </div>
        
        {/* Transparent box with shadow overlaying the text */}
        <div 
          className="absolute w-[80%] lg:w-[70%] h-[400px] md:h-[400px] lg:h-[400px] xl:h-[400px] 2xl:h-[500px] right-0 hidden-initial animate-from-right"          
          style={{
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 10px rgba(0, 0, 0, 0.2)',
            borderRadius: '30px 0 0 30px',
            zIndex: 10,
          }}
        >
          {/* Theme Switcher Squares with Watch Images - Inside transparent div */}
          <div className="w-14 md:w-18 h-auto py-4 md:py-5 flex flex-col items-center gap-4 md:gap-5 rounded-br-xl rounded-bl-xl bg-primary absolute" style={{ right: '5%', top: '0' }}>
            <div
              className="w-8 h-8 md:w-10 md:h-10 rounded-md overflow-hidden hover:border-2 cursor-pointer transition-all hover:scale-110 bg-white bg-opacity-10 duration-500"
              style={{ borderColor: theme === 'theme-1' ? 'var(--color-accent)' : 'transparent' }}
              onClick={() => changeTheme('theme-1')}
            >
              <Image 
                src="/watchA.jpg" 
                alt="Theme 1" 
                width={32} 
                height={32} 
                className="object-cover w-full h-full"
              />
            </div>
            <div
              className="w-8 h-8 md:w-10 md:h-10  rounded-md overflow-hidden hover:border-2 cursor-pointer transition-all hover:scale-110 bg-white bg-opacity-10 duration-500"
              style={{ borderColor: theme === 'theme-2' ? 'var(--color-accent)' : 'transparent' }}
              onClick={() => changeTheme('theme-2')}
            >
              <Image 
                src="/watchB.jpg" 
                alt="Theme 2" 
                width={32} 
                height={32} 
                className="object-cover w-full h-full"
              />
            </div>
            <div
              className="w-8 h-8 md:w-10 md:h-10 rounded-md overflow-hidden hover:border-2 cursor-pointer transition-all hover:scale-110 bg-white bg-opacity-10 duration-500"
              style={{ borderColor: theme === 'theme-3' ? 'var(--color-accent)' : 'transparent' }}
              onClick={() => changeTheme('theme-3')}
            >
              <Image 
                src="/watchC.jpg" 
                alt="Theme 3" 
                width={32} 
                height={32} 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          {/* Theme-specific content */}
          <div className="absolute w-[80%] md:w-[50%] pr-4" style={{ right: '5%', bottom: '10%' }}>
            {theme === 'theme-1' && (
              <div className="text-primary">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">Crafted with elegance and powered by design.</h2>
                <p className="text-xs sm:text-sm opacity-80">Engineered with a sleek steel frame, this timepiece blends innovation with minimalist luxury.</p>
              </div>
            )}
            
            {theme === 'theme-2' && (
              <div className="text-accent">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">Rooted in tradition, styled for the present.</h2>
                <p className="text-xs sm:text-sm opacity-80">Genuine leather meets modern engineering — a perfect balance of rugged charm and refined detail.</p>
              </div>
            )}
            
            {theme === 'theme-3' && (
              <div className="text-secondary">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">Where shadow meets sophistication.</h2>
                <p className="text-xs sm:text-sm opacity-80">A commanding presence forged in deep blacks and cool metal tones — style that speaks in silence.</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Watch image overlaying both the text and transparent box */}
        
        {theme === 'theme-1' && (
          <div className="absolute z-20 left-[14%] top-[-2%] sm:left-[25%] sm:top-[0%] lg:left-[30%] hidden-initial animate-watch">
            <Image
              src="/watch1.png" 
              alt="Luxury Watch - Theme 3"
              width={500} 
              height={500}
              className="object-contain w-[300px] h-[300px] md:w-[380px] md:h-[380px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[500px]"
              style={{
                transform: 'rotateY(20deg) perspective(1000px)',
                borderRadius: '30px',
                zIndex: 20
              }}
            />
          </div>
        )}
        {theme === 'theme-2' && (
          <div className="absolute z-20 left-[20%] top-[-7%] sm:left-[25%] sm:top-[-5%] lg:left-[30%] hidden-initial animate-watch">
            <Image
              src="/watch2.png" 
              alt="Luxury Watch - Theme 2"
              width={400} 
              height={400}
              className="object-contain w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[500px]"
              style={{
                transform: 'rotateY(20deg) perspective(1000px)',
                borderRadius: '30px',
                zIndex: 20
              }}
            />
          </div>
        )}
        {theme === 'theme-3' && (
          <div className="absolute z-20 left-[15%] top-[-5%] sm:left-[25%] sm:top-[-5%] lg:left-[30%] hidden-initial animate-watch">
            <Image
              src="/watch3.png" 
              alt="Luxury Watch - Theme 1"
              width={400} 
              height={400}
              className="object-contain w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] lg:h-[500px] lg:w-[500px] xl:h-[520px] xl:w-[520px]"
              style={{
                transform: 'rotateY(20deg) perspective(1000px)',
                borderRadius: '30px',
                zIndex: 20
              }}
            />
          </div>
        )}
        
        {/* Promotional box on bottom right */}
        <div 
          className="absolute bg-secondary text-white p-4 px-8 rounded-tr-3xl rounded-br-3xl
                    w-[80%] h-auto bottom-[-10%] left-0
                    sm:w-[70%] sm:bottom-[-20%]
                    md:w-[50%] md:h-[120px] md:bottom-[0%]
                    lg:w-[240px] lg:h-[150px] lg:bottom-[15%] lg:left-[0%] hidden-initial animate-from-left"
          style={{
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
            zIndex: 15
          }}
        >
          <h3 className="text-sm sm:text-md md:text-lg font-bold mb-1">Timeless Elegance</h3>
          <p className="text-xs mb-2">Discover our collection of handcrafted timepieces that blend tradition with innovation</p>
          <button className="bg-primary text-white px-2 py-1 rounded-md hover:bg-opacity-80 transition-all text-xs sm:text-sm">
            Explore Collection
          </button>
        </div>
      </div>

      {/* Icon Section outside hero section */}
      <div ref={iconSectionRef} className="w-full flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center px-12 py-6 mt-6 hidden-initial">
        <div className="flex flex-row justify-center items-center gap-4">
          <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-300">
            <i className="fas fa-shield-alt text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-text transition-all duration-300"></i>
            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mt-1 text-text text-center">Yearly Warranty</h3>
            <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">Enjoy 1 year of coverage for peace of mind.</p>
          </div>
          <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-300">
            <i className="fas fa-truck text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-text transition-all duration-300"></i>
            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mt-1 text-text text-center">Free Shipping</h3>
            <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">Free shipping on all orders worldwide.</p>
          </div>
          <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-300">
            <i className="fas fa-headset text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-text transition-all duration-300"></i>
            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mt-1 text-text text-center">Customer Service</h3>
            <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">24/7 support for all your needs.</p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-4 mt-4 sm:mt-4 md:mt-4 lg:mt-0">
          <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-300">
            <i className="fas fa-tint text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-text transition-all duration-300"></i>
            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mt-1 text-text text-center">Water Resistant</h3>
            <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">Engineered to endure your every move.</p>
          </div>
          <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-300">
            <i className="fas fa-gem text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-text transition-all duration-300"></i>
            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mt-1 text-text text-center">Premium Materials</h3>
            <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">Crafted with stainless steel & genuine leather.</p>
          </div>
          <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-300">
            <i className="fas fa-diamond text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-text transition-all duration-300"></i>
            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mt-1 text-text text-center">Modern Design</h3>
            <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">Minimalist meets luxury.</p>
          </div>
        </div>
      </div>

      {/* Exclusive Collections Section */}
      <div className="w-full flex flex-col justify-evenly items-center px-12 py-8 mt-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-8">Exclusive Collections</h2>
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center items-center gap-6">
          <TiltedCard
            imageSrc="/mens.jpg"
            altText="Men Collection"
            containerHeight="250px"
            containerWidth="250px"
            imageHeight="250px"
            imageWidth="250px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text text-text text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                Explore Men Collection
              </p>
            }

            onClick={handleMenClick}
          />
          <TiltedCard
            imageSrc= "/womens.jpg"
            altText="Women Collection"
            containerHeight="250px"
            containerWidth="250px"
            imageHeight="250px"
            imageWidth="250px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text text-text text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                Explore Women Collection
              </p>
            }
            onClick={handleWomenClick}
          />
          <TiltedCard
            imageSrc="/couples.jpg"
            altText="Couple Collection"
            containerHeight="250px"
            containerWidth="250px"
            imageHeight="250px"
            imageWidth="250px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text text-text text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                Couple Collection
              </p>
            }
            onClick={handleCoupleClick}
          />
        </div>
      </div>
    </div>
  );
}