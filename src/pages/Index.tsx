
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
      {/* Background noise texture overlay */}
      <div className="fixed inset-0 bg-noise opacity-[0.03] mix-blend-soft-light pointer-events-none"></div>
      
      {/* Enhanced gradient orbs with accent tones */}
      <div className="fixed -top-[30%] -right-[20%] w-[70%] h-[70%] bg-gradient-radial from-accent/30 to-transparent opacity-30 blur-3xl pointer-events-none"></div>
      <div className="fixed -bottom-[30%] -left-[20%] w-[70%] h-[70%] bg-gradient-radial from-accent/30 to-transparent opacity-30 blur-3xl pointer-events-none"></div>
      
      {/* Soft accent bursts in background */}
      <div className="fixed top-[15%] left-[10%] w-[50%] h-[50%] bg-gradient-radial from-accent/20 to-transparent opacity-40 blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-[20%] right-[15%] w-[40%] h-[40%] bg-gradient-radial from-accent/25 to-transparent opacity-30 blur-3xl pointer-events-none"></div>
      <div className="fixed top-[40%] right-[5%] w-[30%] h-[30%] bg-gradient-radial from-accent/20 to-transparent opacity-40 blur-3xl pointer-events-none"></div>
      
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
    </div>
  );
};

export default Index;
