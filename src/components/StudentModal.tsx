import { motion, AnimatePresence } from "framer-motion";
import { X, Github, Linkedin, Mail } from "lucide-react";
import type { Student } from "@/data/students";

interface StudentModalProps {
  student: Student | null;
  onClose: () => void;
}

const StudentModal = ({ student, onClose }: StudentModalProps) => {
  if (!student) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />

        {/* Modal */}
        <motion.div
          className="relative glass neon-border max-w-lg w-full p-8 overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/15 rounded-full blur-3xl" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col items-center text-center gap-4">
            <img
              src={student.image}
              alt={student.name}
              className="w-24 h-24 rounded-full border-2 border-primary/50"
            />

            <div>
              <h2 className="text-xl font-orbitron font-bold neon-text">{student.name}</h2>
              <p className="text-sm text-muted-foreground font-rajdhani tracking-wider mt-1">
                {student.department} • Squad {student.squad}
              </p>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed font-poppins">
              {student.intro}
            </p>

            <div className="flex flex-wrap gap-2 justify-center">
              {student.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-rajdhani font-semibold tracking-wider uppercase rounded-md bg-primary/10 border border-primary/20 text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-2">
              <a href={`mailto:${student.email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={16} /> Email
              </a>
              <a href={student.github} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Github size={16} /> GitHub
              </a>
              <a href={student.linkedin} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StudentModal;
