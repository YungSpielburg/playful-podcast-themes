
import { motion } from 'framer-motion';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2">
              <div className="flex space-x-[2px]">
                <div className="w-1 h-3 bg-coral rounded-full"></div>
                <div className="w-1 h-4 bg-coral rounded-full"></div>
                <div className="w-1 h-2 bg-coral rounded-full"></div>
                <div className="w-1 h-5 bg-coral rounded-full"></div>
                <div className="w-1 h-3 bg-coral rounded-full"></div>
              </div>
              <span className="text-lg font-display font-semibold">Yung Spielburg</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">The #1 Podcast Intro Music Producer</p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 sm:gap-6">
            <div>
              <h2 className="text-sm font-semibold uppercase mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li><a href="#portfolio" className="text-muted-foreground hover:text-teal text-sm">Portfolio</a></li>
                <li><a href="#services" className="text-muted-foreground hover:text-teal text-sm">Services</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-teal text-sm">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-sm font-semibold uppercase mb-4">Social</h2>
              <ul className="space-y-2">
                <li><a href="https://x.com/yung_spielburg" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-teal text-sm">Twitter</a></li>
                <li><a href="https://www.instagram.com/yung_spielburg" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-teal text-sm">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/yung-spielburg-82b64b11/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-teal text-sm">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <hr className="my-8 border-border" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {currentYear} Yung Spielburg. All rights reserved.</p>
          
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="https://x.com/yung_spielburg" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-teal">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/yung_spielburg" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-teal">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/yung-spielburg-82b64b11/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-teal">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
