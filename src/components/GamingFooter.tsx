const GamingFooter = () => {
  return (
    <footer className="relative pt-12 pb-8 px-4">
      {/* Top glow border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-5xl mx-auto text-center">
        <h3 className="font-orbitron text-lg font-bold neon-text mb-2">
          St. Joseph's University
        </h3>
        <p className="text-muted-foreground text-sm font-poppins mb-1">
          Kalvium Initiative • CSE Department
        </p>
        <p className="text-muted-foreground/50 text-xs font-rajdhani tracking-wider mt-4">
          © 2026 Kalvium Squad Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default GamingFooter;
