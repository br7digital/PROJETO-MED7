import { PortalHero } from './components/PortalHero';
import { SpecialtyGrid } from './components/SpecialtyGrid';

function App() {
  return (
    <div className="min-h-dvh bg-[#020b18] relative overflow-x-hidden">

      {/* Ambient background layers */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Top radial glow */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-[#00f2ff]/[0.04] blur-[120px]" />
        {/* Bottom faint glow */}
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full bg-[#0048ff]/[0.04] blur-[100px]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-grid opacity-100" />
        {/* Gradient overlay top */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020b18] via-transparent to-[#020b18]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-dvh max-w-6xl mx-auto">
        <PortalHero />
        <SpecialtyGrid />

        {/* Footer */}
        <footer className="py-8 text-center">
          <p className="text-white/20 text-xs font-body tracking-wide">
            © {new Date().getFullYear()} Med7 · Todos os direitos reservados
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
