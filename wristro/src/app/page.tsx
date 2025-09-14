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
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
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
    console.log("Navigate to Men Collection page");
  };

  const handleWomenClick = () => {
    console.log("Navigate to Women Collection page");
  };

  const handleCoupleClick = () => {
    console.log("Navigate to Couple Collection page");
  };

  return (
    <div className={`relative min-h-screen ${theme}`}>
      {/* Hero Section */}
      <div className="relative w-full h-[75vh] sm:h-[70vh] md:h-[75vh] lg:h-[85vh] p-[5%] flex justify-center">
        {/* Background WRISTRO text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none hidden-initial animate-fade-in">
          <h1
            className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] mt-[-8rem] font-bold text-primary opacity-10"
            style={{ fontFamily: "Oryn", letterSpacing: "0.1em" }}
          >
            WRISTRO
          </h1>
        </div>
        
        {/* Transparent box */}
        <div 
          className="absolute w-[80%] lg:w-[70%] h-[400px] md:h-[600px] lg:h-[400px] right-0 hidden-initial animate-from-right"          
          style={{
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 10px rgba(0, 0, 0, 0.2)',
            borderRadius: '30px 0 0 30px',
            zIndex: 10,
          }}
        >
          {/* Theme Switcher */}
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
              className="w-8 h-8 md:w-10 md:h-10 rounded-md overflow-hidden hover:border-2 cursor-pointer transition-all hover:scale-110 bg-white bg-opacity-10 duration-500"
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
          <div className="absolute w-[80%] lg:w-[50%] pr-4" style={{ right: '5%', bottom: '10%' }}>
            {theme === 'theme-1' && (
              <div className="text-primary">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">Crafted with elegance and powered by design.</h2>
                <p className="text-xs sm:text-sm opacity-80">
                  Engineered with a sleek steel frame, this timepiece blends innovation with minimalist luxury, offering durability and timeless appeal for every occasion.
                </p>
              </div>
            )}

            {theme === 'theme-2' && (
              <div className="text-accent">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">Rooted in tradition, styled for the present.</h2>
                <p className="text-xs sm:text-sm opacity-80">
                  Genuine leather meets modern engineering — a perfect balance of rugged charm and refined detail, designed to complement both casual wear and formal style.
                </p>
              </div>
            )}

            {theme === 'theme-3' && (
              <div className="text-secondary">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">Where shadow meets sophistication.</h2>
                <p className="text-xs sm:text-sm opacity-80">
                  A commanding presence forged in deep blacks and cool metal tones — style that speaks in silence, leaving an impression of strength and quiet confidence.
                </p>
              </div>
            )}

          </div>
        </div>
        
        {/* Watch images */}
        {theme === 'theme-1' && (
          <div className="absolute z-20 left-[14%] top-[-2%] sm:left-[25%] sm:top-[0%] lg:left-[30%] hidden-initial animate-watch">
            <Image
              src="/watch1.png" 
              alt="Luxury Watch - Theme 1"
              width={500} 
              height={500}
              className="object-contain w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] lg:h-[400px] lg:w-[400px] xl:h-[450px] xl:w-[450px]"
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
              className="object-contain w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[480px] md:h-[480px] lg:h-[380px] lg:w-[380px] xl:h-[420px] xl:w-[420px]"
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
              alt="Luxury Watch - Theme 3"
              width={400} 
              height={400}
              className="object-contain w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[480px] md:h-[480px] lg:h-[400px] lg:w-[400px] xl:h-[450px] xl:w-[450px]"
              style={{
                transform: 'rotateY(20deg) perspective(1000px)',
                borderRadius: '30px',
                zIndex: 20
              }}
            />
          </div>
        )}

        {/* Promotional box */}
      <div 
        className="absolute bg-secondary text-white p-4 px-6 rounded-tr-3xl rounded-br-3xl
                  w-[80%] lg:bottom-[10%] md:bottom-[0%] bottom-[-10%] h-auto sm:w-[60%] lg:w-[24%] left-0 hidden-initial animate-from-left"
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
      

      {/* Icon Section */}
      <div ref={iconSectionRef} className="w-full justify-center items-center px-6 sm:px-8 md:px-12 py-8 mt-20 sm:mt-10 md:mt-12 hidden-initial">
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-6xl">
          {[
            { icon: "fas fa-shield-alt", title: "Yearly Warranty", desc: "Enjoy 1 year of coverage for peace of mind." },
            { icon: "fas fa-truck", title: "Free Shipping", desc: "Free shipping on all orders worldwide." },
            { icon: "fas fa-headset", title: "Customer Service", desc: "24/7 support for all your needs." },
            { icon: "fas fa-tint", title: "Water Resistant", desc: "Engineered to endure your every move." },
            { icon: "fas fa-gem", title: "Premium Materials", desc: "Crafted with stainless steel & genuine leather." },
            { icon: "fas fa-diamond", title: "Modern Design", desc: "Minimalist meets luxury." }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center group hover:scale-105 transition-transform duration-300 p-3 sm:p-4 rounded-lg hover:bg-background hover:shadow-md">
              <i className={`${item.icon} text-3xl sm:text-4xl md:text-5xl text-text transition-all duration-300 group-hover:text-primary`}></i>
              <h3 className="text-sm sm:text-base md:text-lg font-bold mt-2 text-text text-center">{item.title}</h3>
              <p className="text-xs sm:text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center mt-1 text-text">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Exclusive Collections Section */}
      <div className="w-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-4 sm:mb-6">
          Exclusive Collections
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-text text-center max-w-2xl mb-8 sm:mb-12 md:mb-16 px-4 font-light">
          Discover meticulously crafted timepieces. 
          Each collection tells a unique story of precision and elegance.
        </p>
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center items-center gap-10 md:gap-12 w-full max-w-6xl">
          <TiltedCard
            imageSrc="/mens.jpg"
            altText="Men Collection"
            containerHeight="380px"
            containerWidth="320px"
            imageHeight="380px"
            imageWidth="320px"
            rotateAmplitude={12}
            scaleOnHover={1.08}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <div className="flex flex-col items-center justify-end h-full pb-6">
                <h3 className="text-white text-xl sm:text-2xl font-light text-center mb-2">Men's Collection</h3>
                <p className="text-white text-sm sm:text-base text-center font-light opacity-90">Bold & Sophisticated</p>
              </div>
            }
            onClick={handleMenClick}
          />
          <TiltedCard
            imageSrc="/womens.jpg"
            altText="Women Collection"
            containerHeight="380px"
            containerWidth="320px"
            imageHeight="380px"
            imageWidth="320px"
            rotateAmplitude={12}
            scaleOnHover={1.08}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <div className="flex flex-col items-center justify-end h-full pb-6">
                <h3 className="text-white text-xl sm:text-2xl font-light text-center mb-2">Women's Collection</h3>
                <p className="text-white text-sm sm:text-base text-center font-light opacity-90">Elegant & Refined</p>
              </div>
            }
            onClick={handleWomenClick}
          />
          <TiltedCard
            imageSrc="/couples.jpg"
            altText="Couple Collection"
            containerHeight="380px"
            containerWidth="320px"
            imageHeight="380px"
            imageWidth="320px"
            rotateAmplitude={12}
            scaleOnHover={1.08}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <div className="flex flex-col items-center justify-end h-full pb-6">
                <h3 className="text-white text-xl sm:text-2xl font-light text-center mb-2">Couple Collection</h3>
                <p className="text-white text-sm sm:text-base text-center font-light opacity-90">Perfect Harmony</p>
              </div>
            }
            onClick={handleCoupleClick}
          />
        </div>
      </div>
    </div>
  );
}