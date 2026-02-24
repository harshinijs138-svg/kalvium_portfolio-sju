import { useState, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search } from "lucide-react";
import { students } from "@/data/students";
import StudentCard from "./StudentCard";

const StudentsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return students.filter((s) => {
      const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
      return matchSearch && s.squad === "138";
    });
  }, [search]);

  return (
    <section id="students" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-center text-2xl md:text-4xl font-orbitron font-bold mb-10 neon-text"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Student Portfolio
        </motion.h2>

        {/* Search */}
        <motion.div
          className="flex items-center gap-4 mb-10 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((student, i) => (
            <StudentCard
              key={student.id}
              student={student}
              index={i}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground mt-12 font-poppins">
            No students found matching your search.
          </p>
        )}
      </div>
    </section>
  );
};

export default StudentsSection;
