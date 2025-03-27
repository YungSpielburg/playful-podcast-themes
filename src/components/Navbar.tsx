
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 glass border-b border-gold/10' : 'py-5 bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
          <div className="flex space-x-[2px]">
            <div className="w-1 h-5 bg-gold rounded-full animate-wave-1"></div>
            <div className="w-1 h-6 bg-gold rounded-full animate-wave-2"></div>
            <div className="w-1 h-4 bg-gold rounded-full animate-wave-3"></div>
            <div className="w-1 h-7 bg-gold rounded-full animate-wave-4"></div>
            <div className="w-1 h-3 bg-gold rounded-full animate-wave-5"></div>
          </div>
          <span className="glow-gold">Yung Spielburg</span>
          <Award className="text-gold h-5 w-5 ml-1" />
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#portfolio" className="navlink">Portfolio</a>
          <a href="#services" className="navlink">Services</a>
          <a href="#about" className="navlink">About</a>
          <a href="#contact" className="bg-gradient-to-r from-gold to-gold-light text-black rounded-full px-5 py-2 font-medium transition-all hover:shadow-lg hover:shadow-gold/20 border border-gold/50">Get in Touch</a>
        </div>
        
        <button className="md:hidden text-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
