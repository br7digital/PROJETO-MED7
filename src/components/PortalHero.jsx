import { Activity } from 'lucide-react';

export function PortalHero() {
  return (
    <header className="pt-14 pb-16 px-6 text-center relative z-10">

      {/* Logo */}
      <a href="/" className="inline-flex items-center gap-3 mb-12 group">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00f2ff]/20 to-[#00f2ff]/5 border border-[#00f2ff]/25 flex items-center justify-center transition-all duration-300 group-hover:border-[#00f2ff]/50 group-hover:shadow-[0_0_20px_rgba(0,242,255,0.2)]">
          <Activity className="w-5 h-5 text-[#00f2ff]" strokeWidth={1.75} />
        </div>
        <span className="font-display font-semibold text-2xl tracking-tight text-white">
          Med<span className="text-[#00f2ff]">7</span>
        </span>
      </a>

      {/* Eyebrow label */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00f2ff]/20 bg-[#00f2ff]/5 text-[#00f2ff] text-xs font-body font-medium uppercase tracking-widest mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00f2ff] animate-pulse inline-block" />
        Portal de Especialidades
      </div>

      {/* Main heading */}
      <h1 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-white text-glow max-w-2xl mx-auto leading-tight">
        Selecione sua{' '}
        <strong className="font-semibold text-[#00f2ff] text-accent-glow">especialidade</strong>
        {' '}para acessar os<br className="hidden sm:block" />{' '}
        <strong className="font-semibold">Packs de Vídeos</strong>
      </h1>

      {/* Subtitle */}
      <p className="mt-5 text-white/40 font-body text-base max-w-md mx-auto leading-relaxed">
        Conteúdo clínico profissional, pronto para publicar nas redes sociais.
      </p>
    </header>
  );
}
