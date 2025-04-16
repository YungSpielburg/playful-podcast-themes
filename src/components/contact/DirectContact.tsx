
import { motion } from 'framer-motion';

const DirectContact = () => {
  return (
    <motion.div 
      className="mt-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <p className="text-muted-foreground">
        Prefer to reach out directly? Email me at <a href="mailto:YungIntros@gmail.com" className="text-accent font-medium">YungIntros@gmail.com</a>
      </p>
    </motion.div>
  );
};

export default DirectContact;
