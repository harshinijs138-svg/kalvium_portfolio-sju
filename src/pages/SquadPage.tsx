import { useParams, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, ArrowLeft } from "lucide-react";
import { students } from "@/data/students";
import StudentCard from "@/components/StudentCard";
import GamingNavbar from "@/components/GamingNavbar";
import GamingFooter from "@/components/GamingFooter";
import ScrollProgress from "@/components/ScrollProgress";

const SquadPage = () => {
  const { squad } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return students.filter((s) => {
      const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
      const matchSquad = squad === "all" ? true : s.squad === squad;
      return matchSearch && matchSquad;
    });
  }, [search, squad]);

  const getTitle = () => {
    if (squad === "138") return "Squad 138";
    if (squad === "139") return "Squad 139";
    if (squad === "mentor") return "Mentors";
    return "All Students";
  };

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <GamingNavbar />
      
      <section className="section-padding pt-32">
        <div className="max-w-7xl mx-auto">
          <motion.button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-primary hover:text-primary/80 mb-8 font-rajdhani"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <ArrowLeft size={20} />
            Back to Dashboard
          </motion.button>

          <motion.h1
            className="text-center text-3xl md:text-5xl font-orbitron font-bold mb-10 neon-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {getTitle()}
          </motion.h1>

          <motion.div
            className="flex items-center gap-4 mb-10 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Search students..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="gaming-input w-full pl-10"
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((student, i) => (
              <StudentCard key={student.id} student={student} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground mt-12 font-poppins">
              No students found matching your search.
            </p>
          )}
        </div>
      </section>

      <GamingFooter />
    </div>
  );
};

export default SquadPage;
