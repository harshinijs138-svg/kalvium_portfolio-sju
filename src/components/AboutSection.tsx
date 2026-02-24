import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import sjuLogo from "@/assets/sju-logo.png";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          className="glass neon-border p-8 md:p-12 relative overflow-hidden neon-border-hover"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Corner glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

          <div className="flex flex-col md:flex-row items-center gap-8">
            <img src={sjuLogo} alt="St. Joseph's University" className="h-20 md:h-24 object-contain" />
            <div>
              <h2 className="text-2xl md:text-3xl font-orbitron font-bold mb-4 neon-text">
                About Kalvium
              </h2>
              <p className="text-muted-foreground leading-relaxed font-poppins">
                Kalvium CSE students at St. Joseph's University focus on innovation, collaboration, 
                and real-world tech solutions. Through a project-based learning approach, our squads 
                tackle challenges in software engineering, AI, cloud computing, and beyond — building 
                the skills that shape tomorrow's technology landscape.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
