
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

// EmailJS service configuration
const EMAILJS_SERVICE_ID = 'service_8qbgl3r'; 
const EMAILJS_TEMPLATE_ID = 'template_fu1taph';
const EMAILJS_USER_ID = 'fGW3QoXQobtK5laDC'; 

type FormData = {
  name: string;
  email: string;
  podcast: string;
  message: string;
};

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    podcast: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare the template parameters
      const templateParams = {
        name: formData.name,        // {{name}} in the EmailJS template
        reply_to: formData.email,   // Changed to reply_to as it's a common EmailJS parameter
        email: formData.email,      // Also include as email for backward compatibility
        podcastname: formData.podcast, // {{podcastname}} in the EmailJS template
        message: formData.message,
        to_name: 'Lenny',           // Adding recipient name for better email formatting
        to_email: 'Lennyskolnik@gmail.com'
      };
      
      console.log('Sending email with params:', templateParams);
      
      // Send the email
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );
      
      // Show success message
      toast({
        title: "Request received!",
        description: "Thanks for reaching out. I'll be in touch soon to discuss your podcast's audio needs.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        podcast: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Something went wrong",
        description: "We couldn't send your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      className="glass rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="p-2">
        <div className="bg-gradient-to-br from-gold to-gold-dark rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-dark-bg text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-charcoal/90 backdrop-blur-sm border border-white/20 text-dark-bg placeholder:text-dark-bg/60 focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-dark-bg text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-charcoal/90 backdrop-blur-sm border border-white/20 text-dark-bg placeholder:text-dark-bg/60 focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="podcast" className="block text-dark-bg text-sm font-medium mb-2">Podcast Name</label>
              <input
                type="text"
                id="podcast"
                name="podcast"
                value={formData.podcast}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-charcoal/90 backdrop-blur-sm border border-white/20 text-dark-bg placeholder:text-dark-bg/60 focus:outline-none focus:ring-2 focus:ring-gold/50"
                placeholder="Your Amazing Podcast"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-dark-bg text-sm font-medium mb-2">What are you looking for?</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-charcoal/90 backdrop-blur-sm border border-white/20 text-dark-bg placeholder:text-dark-bg/60 focus:outline-none focus:ring-2 focus:ring-gold/50"
                placeholder="Tell me about your podcast and what kind of sound you're looking for..."
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-gold-dark font-medium py-3 px-6 rounded-lg transition-all hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gold-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : "Connect With Me"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
