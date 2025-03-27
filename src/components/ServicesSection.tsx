
import { motion } from 'framer-motion';
import { Music, FileAudio2, Headphones, MusicIcon } from 'lucide-react';

const services = [
  {
    title: "Audio Brand Definition",
    description: "Who would you have as the musical guest at a live taping of your show? What values connect everyone in the audience? Questions like these will help us uncover your sound.",
    icon: (
      <Headphones className="w-6 h-6" />
    )
  },
  {
    title: "Main Intro & Outro Themes",
    description: "Signature podcast intro music and an extended outro theme for a pavlovian effect of anticipation and excitement!",
    icon: (
      <Music className="w-6 h-6" />
    )
  },
  {
    title: "Instrumental & Acapella Versions",
    description: "Variations of your theme music including full instrumental versions, acapella versions, and stems for maximum flexibility.",
    icon: (
      <MusicIcon className="w-6 h-6" />
    )
  },
  {
    title: "Transition Stings & Audio Elements",
    description: "Short audio stings and transition elements built from your theme for a cohesive listening experience.",
    icon: (
      <FileAudio2 className="w-6 h-6" />
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
            Complete <span className="text-accent glow-accent">Audio Branding</span> for Podcasters
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            From defining your audio brand to creating a complete package of custom music elements that elevate your podcast's identity.
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
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-coral to-coral-dark flex items-center justify-center text-white shadow-neon">
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
