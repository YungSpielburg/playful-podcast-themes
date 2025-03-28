import { motion } from 'framer-motion';
import { Award, MusicIcon, Radio, Tv, Briefcase } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-12 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="section-title glow-gold">About Yung Spielburg</h2>
          <p className="section-subtitle">Grammy award-winning producer & songwriter with global impact</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="artistic-card rounded-2xl p-8 space-y-4 h-full min-h-[250px] flex flex-col">
              <h3 className="text-2xl font-display font-bold flex items-center gap-2">
                <Award className="h-6 w-6 text-gold" />
                Accolades
              </h3>
              <ul className="space-y-2 text-lg flex-grow">
                <li>Grammy award-winning producer & songwriter</li>
                <li>2x platinum, 2x gold records</li>
                <li>Over 2 billion streams worldwide</li>
              </ul>
            </div>

            <div className="artistic-card rounded-2xl p-8 space-y-4 h-full min-h-[250px] flex flex-col">
              <h3 className="text-2xl font-display font-bold flex items-center gap-2">
                <MusicIcon className="h-6 w-6 text-gold" />
                Artist Collaborations
              </h3>
              <p className="text-lg flex-grow">
                Proud to have worked with amazing talents including Mikky Ekko, Samuel L. Jackson, 
                Rascal Flatts, Simple Plan, The Goo Goo Dolls, Yuna, MIYAVI, and Duckwrth.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="artistic-card rounded-2xl p-8 space-y-4 h-full min-h-[250px] flex flex-col">
              <h3 className="text-2xl font-display font-bold flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-gold" />
                Brand Partnerships
              </h3>
              <p className="text-lg flex-grow">
                Created memorable sonic experiences for global brands including 
                Honda, Samsung, Asahi, and Beats.
              </p>
            </div>

            <div className="artistic-card rounded-2xl p-8 space-y-4 h-full min-h-[250px] flex flex-col">
              <h3 className="text-2xl font-display font-bold flex items-center gap-2">
                <Tv className="h-6 w-6 text-gold" />
                Featured Works
              </h3>
              <p className="text-lg flex-grow">
                Music featured in 2,053 anime, television shows, and movies around the world.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
