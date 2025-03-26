
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PortfolioSection from '../components/PortfolioSection';
import ServicesSection from '../components/ServicesSection';
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
      
      {/* Gradient orbs */}
      <div className="fixed -top-[30%] -right-[20%] w-[70%] h-[70%] bg-gradient-radial from-accent/20 to-transparent opacity-30 blur-3xl pointer-events-none"></div>
      <div className="fixed -bottom-[30%] -left-[20%] w-[70%] h-[70%] bg-gradient-radial from-teal/20 to-transparent opacity-30 blur-3xl pointer-events-none"></div>
      
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <PortfolioSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </motion.div>
      
      {/* Decorative Elements */}
      <div className="fixed top-1/4 right-10 w-2 h-2 rounded-full bg-accent animate-sparkle-1 opacity-70"></div>
      <div className="fixed top-1/3 left-20 w-3 h-3 rounded-full bg-teal animate-sparkle-2 opacity-70"></div>
      <div className="fixed bottom-1/4 right-20 w-2 h-2 rounded-full bg-accent animate-sparkle-3 opacity-70"></div>
    </div>
  );
};

export default Index;
