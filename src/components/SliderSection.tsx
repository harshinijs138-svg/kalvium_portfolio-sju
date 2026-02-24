import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Cpu, Rocket, Users } from "lucide-react";

const slides = [
  { icon: Lightbulb, title: "Innovation", desc: "Pioneering solutions for tomorrow's challenges" },
  { icon: Cpu, title: "Technology", desc: "Mastering cutting-edge tools and frameworks" },
  { icon: Rocket, title: "Future Engineers", desc: "Building careers that shape the digital world" },
  { icon: Users, title: "Collaboration", desc: "Growing stronger together through teamwork" },
];

const SliderSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="glass neon-border p-10 md:p-14"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5 }}
          >
            {(() => {
              const Icon = slides[current].icon;
              return <Icon className="mx-auto text-primary mb-4" size={40} />;
            })()}
            <h3 className="text-2xl md:text-3xl font-orbitron font-bold neon-text mb-3">
              {slides[current].title}
            </h3>
            <p className="text-muted-foreground font-poppins">
              {slides[current].desc}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
