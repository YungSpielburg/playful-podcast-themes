
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetClose 
} from '@/components/ui/sheet';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHowToPage = location.pathname === '/how-to';
  
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
        scrolled ? 'py-4 glass border-b border-white/5' : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-display font-bold text-foreground flex items-center gap-2 opacity-0">
          Yung Spielburg
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {isHowToPage ? (
            <Link to="/" className="navlink">Home</Link>
          ) : (
            <>
              <a href="#portfolio" className="navlink">Portfolio</a>
              <a href="#services" className="navlink">Services</a>
              <a href="#about" className="navlink">About</a>
              <Link to="/how-to" className="navlink">How To</Link>
              <a href="#contact" className="btn-primary">Connect With Me</a>
            </>
          )}
        </div>
        
        {/* Mobile menu implementation */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden text-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] bg-background border-l border-white/10 pt-12">
            <div className="flex flex-col space-y-4">
              {isHowToPage ? (
                <SheetClose asChild>
                  <Link to="/" className="px-4 py-2 hover:bg-white/5 rounded-md text-foreground transition-colors">
                    Home
                  </Link>
                </SheetClose>
              ) : (
                <>
                  <SheetClose asChild>
                    <a href="#portfolio" className="px-4 py-2 hover:bg-white/5 rounded-md text-foreground transition-colors">
                      Portfolio
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="#services" className="px-4 py-2 hover:bg-white/5 rounded-md text-foreground transition-colors">
                      Services
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="#about" className="px-4 py-2 hover:bg-white/5 rounded-md text-foreground transition-colors">
                      About
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/how-to" className="px-4 py-2 hover:bg-white/5 rounded-md text-foreground transition-colors">
                      How To
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="#contact" className="px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md text-center transition-colors">
                      Connect With Me
                    </a>
                  </SheetClose>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
};

export default Navbar;
