
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  Headphones, 
  Mic, 
  FileAudio, 
  MessagesSquare, 
  DollarSign, 
  Clock, 
  FileText, 
  Phone,
  Music,
  PenLine,
  Scissors
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const HowTo = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-foreground relative overflow-hidden">
      <Navbar />
      
      <motion.div
        className="pt-32 pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-16">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 glow-gold">
              How To Work With Me
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              A simple guide to creating the perfect podcast intro music for your show
            </p>

            <Card className="artistic-card p-6 mb-10">
              <CardContent className="p-0">
                <div className="flex items-center justify-center mb-4">
                  <Music className="w-12 h-12 text-gold" />
                </div>
                <p className="italic text-muted-foreground">
                  "My goal is to create a sonic identity that perfectly captures your podcast's essence, 
                  engages your audience from the first note, and establishes your show as a professional, 
                  memorable production."
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Process Timeline */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">The Process</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="space-y-12">
              {/* Step 1 */}
              <motion.div 
                className="flex flex-col md:flex-row gap-6 items-start"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="flex-shrink-0 bg-accent/10 p-5 rounded-full">
                  <MessagesSquare className="w-10 h-10 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-3">1. Initial Consultation</h3>
                  <p className="text-muted-foreground mb-4">
                    We begin with an initial consultation to discuss your podcast's theme, target audience, 
                    and the emotions you want to evoke. I'll ask about your preferences in terms of style, 
                    instruments, and overall vibe. This consultation helps me understand your vision and begin 
                    conceptualizing your sound.
                  </p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                className="flex flex-col md:flex-row gap-6 items-start"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="flex-shrink-0 bg-gold/10 p-5 rounded-full">
                  <PenLine className="w-10 h-10 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-3">2. Creative Brief</h3>
                  <p className="text-muted-foreground mb-4">
                    Following our consultation, I'll create a creative brief that outlines the music direction,
                    including genre, tone, instrumentation, and length. This document serves as our roadmap and 
                    ensures we're aligned on expectations. You'll review this brief and provide feedback before 
                    I begin composing.
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                className="flex flex-col md:flex-row gap-6 items-start"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="flex-shrink-0 bg-accent/10 p-5 rounded-full">
                  <FileAudio className="w-10 h-10 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-3">3. Composition & Demo</h3>
                  <p className="text-muted-foreground mb-4">
                    Based on the approved creative brief, I'll compose a 30-second demo of your podcast intro music.
                    This demo gives you a sense of the direction while allowing for adjustments before final production.
                    I'll share the demo with you for feedback and revisions.
                  </p>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div 
                className="flex flex-col md:flex-row gap-6 items-start"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="flex-shrink-0 bg-gold/10 p-5 rounded-full">
                  <Scissors className="w-10 h-10 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-3">4. Revisions</h3>
                  <p className="text-muted-foreground mb-4">
                    After you've reviewed the demo, we'll discuss any necessary revisions. My standard package includes 
                    up to two rounds of revisions to ensure the music perfectly matches your vision. Each revision cycle 
                    typically takes 2-3 days, depending on the extent of changes requested.
                  </p>
                </div>
              </motion.div>

              {/* Step 5 */}
              <motion.div 
                className="flex flex-col md:flex-row gap-6 items-start"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="flex-shrink-0 bg-accent/10 p-5 rounded-full">
                  <Headphones className="w-10 h-10 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-3">5. Final Production</h3>
                  <p className="text-muted-foreground mb-4">
                    Once you're satisfied with the revisions, I'll proceed with the final production. This includes 
                    professional mixing and mastering to ensure your intro sounds polished and broadcast-ready. 
                    I'll create multiple versions of varying lengths (e.g., 15 seconds, 30 seconds, and 60 seconds) 
                    to give you flexibility in usage.
                  </p>
                </div>
              </motion.div>

              {/* Step 6 */}
              <motion.div 
                className="flex flex-col md:flex-row gap-6 items-start"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="flex-shrink-0 bg-gold/10 p-5 rounded-full">
                  <FileText className="w-10 h-10 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-3">6. Delivery & Licensing</h3>
                  <p className="text-muted-foreground mb-4">
                    I'll deliver your final podcast intro music in high-quality digital formats (WAV and MP3). 
                    You'll also receive a licensing agreement that grants you full usage rights for your podcast. 
                    This ensures you have the legal right to use the music across all podcast platforms and promotional materials.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing & Timeline */}
        <section className="container mx-auto px-4 py-16 bg-secondary/20 rounded-3xl mb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Pricing & Timeline</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="artistic-card backdrop-blur-md">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <DollarSign className="w-8 h-8 text-gold mr-3" />
                    <h3 className="text-2xl font-display font-bold">Pricing</h3>
                  </div>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <div>
                        <p className="font-medium">Basic Package: $500-$1,000</p>
                        <p className="text-sm text-muted-foreground">Custom composed intro music (up to 30 seconds) with up to two rounds of revisions</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <div>
                        <p className="font-medium">Premium Package: $1,000-$2,000</p>
                        <p className="text-sm text-muted-foreground">Custom composed intro/outro suite with transitions and multiple versions, plus unlimited revisions</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <div>
                        <p className="font-medium">Enterprise Package: $2,000+</p>
                        <p className="text-sm text-muted-foreground">Complete audio branding package including intro/outro, transitions, sonic logo, and segment bumpers</p>
                      </div>
                    </li>
                  </ul>
                  
                  <p className="mt-6 text-sm text-muted-foreground">
                    * Pricing may vary based on project complexity, specific requirements, and usage rights.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="artistic-card backdrop-blur-md">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Clock className="w-8 h-8 text-accent mr-3" />
                    <h3 className="text-2xl font-display font-bold">Timeline</h3>
                  </div>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <div>
                        <p className="font-medium">Initial Consultation</p>
                        <p className="text-sm text-muted-foreground">1-2 days to schedule and complete</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <div>
                        <p className="font-medium">Creative Brief & Approval</p>
                        <p className="text-sm text-muted-foreground">2-3 days</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <div>
                        <p className="font-medium">Composition & Demo</p>
                        <p className="text-sm text-muted-foreground">5-7 days</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <div>
                        <p className="font-medium">Revision Cycles</p>
                        <p className="text-sm text-muted-foreground">2-3 days per round</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <div>
                        <p className="font-medium">Final Production & Delivery</p>
                        <p className="text-sm text-muted-foreground">3-5 days</p>
                      </div>
                    </li>
                  </ul>
                  
                  <p className="mt-6 text-sm text-muted-foreground">
                    * Total timeline: Typically 2-4 weeks from start to finish, depending on feedback and revision cycles.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-b border-border/30">
                <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline hover:text-gold transition-all">
                  Do I own the rights to the music you create?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Yes, you receive a license granting you full usage rights for your podcast. This means you can use the music 
                  across all podcast platforms and promotional materials related to your show. I retain the composition copyright, 
                  which is standard practice in the industry.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b border-border/30">
                <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline hover:text-gold transition-all">
                  What if I don't like the initial demo?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  If the initial demo doesn't align with your vision, we'll discuss your specific concerns and I'll create 
                  a new demo in a different direction. My goal is your complete satisfaction, so I'm committed to getting 
                  it right, even if that means starting from scratch.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b border-border/30">
                <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline hover:text-gold transition-all">
                  What formats will I receive the final music in?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  You'll receive your final music in both high-quality WAV format (uncompressed, suitable for production) 
                  and MP3 format (compressed, suitable for digital distribution). If you need additional formats, just let me know.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-b border-border/30">
                <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline hover:text-gold transition-all">
                  Can you match a specific song or style I like?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  I can certainly create music inspired by a particular style, genre, or mood. However, for legal reasons, 
                  I cannot create direct copies of existing songs. I'll work with you to capture the essence of what you love 
                  about a reference track while creating something original for your podcast.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border-b border-border/30">
                <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline hover:text-gold transition-all">
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  I accept payment via bank transfer, PayPal, and credit card. For most projects, I require a 50% deposit 
                  to begin work, with the remaining 50% due upon final delivery.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="border-b border-border/30">
                <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline hover:text-gold transition-all">
                  Can you also create music for podcast segments or transitions?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Absolutely! In addition to intro/outro music, I can create a complete audio branding package 
                  including segment bumpers, transitions, and sonic logos. These additional elements create a 
                  cohesive audio identity for your podcast.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto text-center py-16 bg-gradient-to-br from-accent/20 to-gold/10 rounded-3xl px-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's create the perfect sound for your podcast. Schedule a consultation to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary px-8 py-4 text-lg">
                Schedule Consultation
              </a>
              <a href="mailto:hello@yungspielburg.com" className="btn-secondary px-8 py-4 text-lg flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Me Directly
              </a>
            </div>
          </div>
        </section>
      </motion.div>

      <Footer />
    </div>
  );
};

export default HowTo;
