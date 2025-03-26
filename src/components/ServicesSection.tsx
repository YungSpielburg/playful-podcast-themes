
import { motion } from 'framer-motion';

const services = [
  {
    title: "Custom Podcast Themes",
    description: "Signature opening and closing themes that perfectly capture your podcast's essence and make you instantly recognizable.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13"></path>
        <circle cx="6" cy="18" r="3"></circle>
        <circle cx="18" cy="16" r="3"></circle>
      </svg>
    )
  },
  {
    title: "Segment Transitions",
    description: "Smooth audio transitions between podcast segments that maintain energy and keep listeners engaged.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 7.5V2H9v5.5"></path>
        <path d="M4 12.5h16"></path>
        <path d="M15 17v5h-6v-5"></path>
        <path d="M9 12.545 4 7.455"></path>
        <path d="m20 7.5-5 5"></path>
        <path d="m9 17.5 5-5"></path>
        <path d="m20 17.5-5-5"></path>
      </svg>
    )
  },
  {
    title: "Sound Design Package",
    description: "Complete audio branding including theme music, transitions, sound effects, and background elements.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5.5" cy="17.5" r="2.5"></circle>
        <circle cx="18.5" cy="17.5" r="2.5"></circle>
        <path d="M15 17.5H8"></path>
        <path d="M17.5 15V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v9"></path>
      </svg>
    )
  },
  {
    title: "Audio Refinement",
    description: "Polishing and enhancing existing audio elements to give your podcast a more professional, cohesive sound.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 18 3-3 3 3"></path>
        <path d="m13 6 3 3 3-3"></path>
        <circle cx="6" cy="18" r="3"></circle>
        <circle cx="16" cy="6" r="3"></circle>
        <path d="M6 15v-3a6 6 0 0 1 12 0v0"></path>
      </svg>
    )
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Premium <span className="text-accent glow-accent">Audio Services</span> for Podcasters
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            From signature theme music to complete audio branding packages, I create custom solutions that elevate your podcast's identity.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl p-8 flex gap-4 hover:border-accent/20 border border-white/5 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center text-white shadow-neon">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-20 p-8 glass rounded-xl border border-accent/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-display font-bold mb-2">Ready to stand out with premium audio?</h3>
              <p className="text-muted-foreground">Let's create the perfect sound that captures your podcast's unique personality.</p>
            </div>
            <div className="flex-shrink-0">
              <a href="#contact" className="btn-primary shadow-neon">
                Book a Free Consultation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
