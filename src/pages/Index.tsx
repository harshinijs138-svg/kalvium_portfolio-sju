import { useState, useCallback } from "react";
import GamingLoader from "@/components/GamingLoader";
import GamingNavbar from "@/components/GamingNavbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import StudentsSection from "@/components/StudentsSection";
import SliderSection from "@/components/SliderSection";
import GamingFooter from "@/components/GamingFooter";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <GamingLoader onComplete={handleLoadComplete} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <GamingNavbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      {/* <StudentsSection /> */}
      <SliderSection />
      <GamingFooter />
    </div>
  );
};

export default Index;
