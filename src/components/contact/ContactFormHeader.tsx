
import { motion } from 'framer-motion';

const ContactFormHeader = () => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Let's Create Your <span className="text-accent">Signature Sound</span>
      </motion.h2>
      <motion.p
        className="mt-4 text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Fill out the form for a free call
      </motion.p>
    </div>
  );
};

export default ContactFormHeader;
