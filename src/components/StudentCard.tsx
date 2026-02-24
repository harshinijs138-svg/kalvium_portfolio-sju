import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Student } from "@/data/students";

interface StudentCardProps {
  student: Student;
  index: number;
}

const StudentCard = ({ student, index }: StudentCardProps) => {
  const [flipped, setFlipped] = useState(false);
  const navigate = useNavigate();

  const goToProfile = () => navigate(`/student/${student.id}`);

  return (
    <motion.div
      className="perspective-1000 h-[340px] cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.5) }}
      layout
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onHoverStart={() => setFlipped(true)}
        onHoverEnd={() => setFlipped(false)}
      >
        {/* Front */}
        <div
          className="absolute inset-0 glass neon-border neon-border-hover p-6 flex flex-col items-center justify-center gap-4"
          style={{ backfaceVisibility: "hidden" }}
          onClick={goToProfile}
        >
          <div className="relative">
            <img
              src={student.image}
              alt={student.name}
              className="w-24 h-24 rounded-full border-2 border-primary/40"
              loading="lazy"
            />
            <div className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-primary/20 border border-primary/40">
              <span className="text-[10px] font-orbitron text-primary font-bold">{student.squad}</span>
            </div>
          </div>

          <div className="text-center">
            <h3 className="font-orbitron text-sm font-bold text-foreground">{student.name}</h3>
            <p className="text-xs text-muted-foreground mt-1 font-poppins">{student.email}</p>
          </div>

          <div className="flex gap-3">
            <a href={student.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" onClick={e => e.stopPropagation()}>
              <Github size={18} />
            </a>
            <a href={student.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" onClick={e => e.stopPropagation()}>
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 glass neon-border p-6 flex flex-col items-center justify-center gap-3"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          onClick={goToProfile}
        >
          <h3 className="font-orbitron text-sm font-bold neon-text">{student.name}</h3>
          <p className="text-xs text-muted-foreground text-center leading-relaxed font-poppins">
            {student.intro}
          </p>
          <div className="flex flex-wrap gap-2 justify-center mt-2">
            {student.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 text-[10px] font-rajdhani font-semibold tracking-wider uppercase rounded-md bg-primary/10 border border-primary/20 text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
          <button className="mt-3 text-xs font-orbitron text-primary hover:underline">
            View Profile →
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StudentCard;
