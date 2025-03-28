
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
        Let's Create Your <span className="text-coral">Iconic Sound</span>
      </motion.h2>
      <motion.p 
        className="section-subtitle mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Ready to take your podcast to the next level? Fill out the form below for a free consultation and let's discuss your audio vision.
      </motion.p>
    </div>
  );
};

export default ContactFormHeader;
