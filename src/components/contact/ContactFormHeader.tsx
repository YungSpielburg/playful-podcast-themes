
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
        Let's Create Your <span className="text-coral">Signature Sound</span>
      </motion.h2>
    </div>
  );
};

export default ContactFormHeader;
