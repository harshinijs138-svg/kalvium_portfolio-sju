import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Users, Shield, Zap } from "lucide-react";
import { students } from "@/data/students";

const useCounter = (end: number, inView: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, inView]);
  return count;
};

const stats = [
  {
    label: "Squad 138",
    value: students.filter((s) => s.squad === "138").length,
    icon: Shield,
    delay: 0,
    route: "/squad/138",
  },
  {
    label: "Squad 139",
    value: students.filter((s) => s.squad === "139").length,
    icon: Shield,
    delay: 0.15,
    route: "/squad/139",
  },
  {
    label: "Mentors",
    value: students.filter((s) => s.squad === "mentor").length,
    icon: Users,
    delay: 0.3,
    route: "/squad/mentor",
  },
  {
    label: "Total Students",
    value: students.length,
    icon: Users,
    delay: 0.45,
    route: "/squad/all",
  },
];

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-center text-2xl md:text-4xl font-orbitron font-bold mb-12 neon-text"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <Zap className="inline-block mr-2 text-primary" size={28} />
          Squad Dashboard
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({
  label,
  value,
  icon: Icon,
  delay,
  inView,
  route,
}: {
  label: string;
  value: number;
  icon: typeof Shield;
  delay: number;
  inView: boolean;
  route: string;
}) => {
  const count = useCounter(value, inView);
  const navigate = useNavigate();

  return (
    <motion.div
      className="glass neon-border p-8 text-center hover-lift neon-border-hover cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      onClick={() => navigate(route)}
    >
      <Icon className="mx-auto mb-4 text-primary" size={32} />
      <div className="text-4xl md:text-5xl font-orbitron font-black neon-text-strong mb-2">
        {count}
      </div>
      <div className="text-muted-foreground font-rajdhani text-lg tracking-wider uppercase">
        {label}
      </div>
    </motion.div>
  );
};

export default StatsSection;
