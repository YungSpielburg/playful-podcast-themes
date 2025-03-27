
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PortfolioSection from '../components/PortfolioSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const id = href.substring(1);
          const element = document.getElementById(id);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80, // Adjust for navbar height
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Video Background */}
      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute w-full h-full object-cover opacity-20 scale-105 blur-md"
        >
          <source src="/391242_Sitiing Computer Console Studio_By_RIVERSCOPE_Artlist_HD.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/90"></div>
      </div>
      
      {/* Background noise texture overlay */}
      <div className="fixed inset-0 bg-noise opacity-[0.03] mix-blend-soft-light pointer-events-none"></div>
      
      {/* Gradient orbs */}
      <div className="fixed -top-[30%] -right-[20%] w-[70%] h-[70%] bg-gradient-radial from-gold/10 to-transparent opacity-20 blur-3xl pointer-events-none"></div>
      <div className="fixed -bottom-[30%] -left-[20%] w-[70%] h-[70%] bg-gradient-radial from-gold/10 to-transparent opacity-20 blur-3xl pointer-events-none"></div>
      
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <PortfolioSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </motion.div>
      
      {/* Decorative Elements */}
      <div className="fixed top-1/4 right-10 w-2 h-2 rounded-full bg-gold/50 animate-sparkle-1 opacity-50"></div>
      <div className="fixed top-1/3 left-20 w-3 h-3 rounded-full bg-gold/50 animate-sparkle-2 opacity-50"></div>
      <div className="fixed bottom-1/4 right-20 w-2 h-2 rounded-full bg-gold/50 animate-sparkle-3 opacity-50"></div>
    </div>
  );
};

export default Index;
