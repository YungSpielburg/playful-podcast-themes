
import { motion } from 'framer-motion';

const clientLogos = [
  { 
    name: 'All In Podcast', 
    description: 'The theme helped them become a top 10 podcast worldwide',
    highlight: true
  },
  { 
    name: 'Acquired.fm', 
    description: 'Custom intro music for their tech acquisition analysis',
    highlight: false
  },
  { 
    name: 'A16Z', 
    description: 'Theme music for one of technology\'s top VC podcasts',
    highlight: false
  },
  { 
    name: 'Not Boring', 
    description: 'Distinctive sound created for Packy McCormick\'s business analysis',
    highlight: false
  },
  { 
    name: 'Balaji Srinivasan', 
    description: 'Unique audio identity for the renowned tech philosopher',
    highlight: false
  },
  { 
    name: 'ConsumerVC', 
    description: 'Crafted the perfect sound for consumer investment insights',
    highlight: false
  },
];

const PortfolioSection = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      }
    })
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 w-64 h-64 bg-teal/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>
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
            Trusted by the World's <span className="text-teal glow-teal">Top Podcasts</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I've had the privilege of working with some of the most influential voices in podcasting, helping them create unforgettable audio identities.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {clientLogos.map((client, index) => (
            <motion.div
              key={client.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              className={`rounded-xl overflow-hidden ${client.highlight ? 'glass border-2 border-accent/20' : 'artistic-card'} p-6 flex flex-col h-full hover:shadow-lg transition-all duration-300`}
            >
              <div className={`mb-4 rounded-lg p-3 inline-flex ${client.highlight ? 'bg-accent text-white shadow-neon-accent' : 'bg-teal/10 text-teal'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="">
                  <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z"></path>
                </svg>
              </div>
              
              <h3 className="text-xl font-display font-bold mb-2">{client.name}</h3>
              <p className="text-muted-foreground flex-grow">{client.description}</p>
              
              {client.highlight && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                    <span className="text-sm font-medium text-accent">Featured Client</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a href="#contact" className="btn-primary shadow-neon">
            Join These Success Stories
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
