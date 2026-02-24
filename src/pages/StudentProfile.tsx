import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, Linkedin, Mail } from "lucide-react";
import { students } from "@/data/students";
import GamingNavbar from "@/components/GamingNavbar";
import GamingFooter from "@/components/GamingFooter";

const StudentProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const student = students.find((s) => s.id === Number(id));

  if (!student) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-orbitron text-2xl font-bold text-foreground mb-4">Student Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="font-rajdhani text-primary hover:underline"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <GamingNavbar />

      <main className="pt-24 pb-16 px-4 max-w-4xl mx-auto">
        <motion.button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 font-rajdhani text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ArrowLeft size={18} />
          Back
        </motion.button>

        <motion.div
          className="glass neon-border p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar */}
            <div className="relative shrink-0">
              <img
                src={student.image}
                alt={student.name}
                className="w-32 h-32 rounded-full border-2 border-primary/40"
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary/20 border border-primary/40">
                <span className="text-xs font-orbitron text-primary font-bold">
                  Squad {student.squad}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="font-orbitron text-2xl md:text-3xl font-bold neon-text mb-2">
                {student.name}
              </h1>
              <p className="font-rajdhani text-sm tracking-widest uppercase text-muted-foreground mb-6">
                {student.department} • St. Joseph's University
              </p>

              <p className="font-poppins text-muted-foreground leading-relaxed mb-8">
                {student.intro}
              </p>

              {/* Skills */}
              <div className="mb-8">
                <h3 className="font-orbitron text-xs font-bold text-foreground mb-3 tracking-wider uppercase">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {student.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-rajdhani font-semibold tracking-wider uppercase rounded-md bg-primary/10 border border-primary/20 text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Links */}
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href={`mailto:${student.email}`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg glass neon-border text-sm font-rajdhani font-semibold text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  Email
                </a>
                <a
                  href={student.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg glass neon-border text-sm font-rajdhani font-semibold text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href={student.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg glass neon-border text-sm font-rajdhani font-semibold text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <GamingFooter />
    </div>
  );
};

export default StudentProfile;
