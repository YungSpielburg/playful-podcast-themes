
import ContactForm from './contact/ContactForm';
import ContactFormHeader from './contact/ContactFormHeader';
import DirectContact from './contact/DirectContact';

const ContactSection = () => {
  return (
    <section id="contact" className="py-8 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-purple/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <ContactFormHeader />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <ContactForm />
          <DirectContact />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
