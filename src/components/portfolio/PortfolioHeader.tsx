
import { motion } from 'framer-motion';

const PortfolioHeader = () => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Trusted by the World's <span className="text-coral glow-coral">Top Podcasts</span>
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
  );
};

export default PortfolioHeader;
