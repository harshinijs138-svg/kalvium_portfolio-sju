import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GamingLoaderProps {
  onComplete: () => void;
}

const GamingLoader = ({ onComplete }: GamingLoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Top progress bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-secondary">
          <motion.div
            className="h-full gradient-red"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Glowing title */}
        <motion.h1
          className="text-2xl md:text-4xl lg:text-5xl font-orbitron font-bold neon-text-strong text-center px-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Welcome to Kalvium 
        </motion.h1>

        <motion.p
          className="mt-4 text-muted-foreground font-rajdhani text-lg tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Initializing...
        </motion.p>

        {/* Progress percentage */}
        <motion.div
          className="mt-8 font-orbitron text-sm text-primary tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {progress}%
        </motion.div>

        {/* Corner decorations */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50" />
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/50" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/50" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/50" />
      </motion.div>
    </AnimatePresence>
  );
};

export default GamingLoader;
