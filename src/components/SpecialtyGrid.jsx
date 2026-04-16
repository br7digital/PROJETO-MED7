import {
  Bone,
  Smile,
  PersonStanding,
  Baby,
  Heart,
  Brain,
  Eye,
  Stethoscope,
  ArrowRight,
  Lock,
} from 'lucide-react';

const specialties = [
  {
    id: 'ortopedista',
    label: 'Traumatologia e Ortopedia',
    icon: Bone,
    href: '/ortopedista/',
    active: true,
    badge: null,
    description: 'Conteúdo clínico institucional para ortopedistas e traumatologistas.',
  },
  {
    id: 'odontologia',
    label: 'Odontologia',
    icon: Smile,
    href: null,
    active: false,
    badge: 'Em breve',
    description: null,
  },
  {
    id: 'fisioterapia',
    label: 'Fisioterapia',
    icon: PersonStanding,
    href: null,
    active: false,
    badge: 'Em breve',
    description: null,
  },
  {
    id: 'pediatria',
    label: 'Pediatria',
    icon: Baby,
    href: null,
    active: false,
    badge: 'Em breve',
    description: null,
  },
  {
    id: 'cardiologia',
    label: 'Cardiologia',
    icon: Heart,
    href: null,
    active: false,
    badge: 'Em breve',
    description: null,
  },
  {
    id: 'neurologia',
    label: 'Neurologia',
    icon: Brain,
    href: null,
    active: false,
    badge: 'Em breve',
    description: null,
  },
];

function SpecialtyCard({ specialty, index }) {
  const Icon = specialty.icon;
  const delay = `animate-fade-up-delay-${Math.min(index + 1, 4)}`;

  if (specialty.active) {
    return (
      <a
        href={specialty.href}
        className={`specialty-card-active rounded-2xl p-7 flex flex-col gap-5 relative overflow-hidden cursor-pointer ${delay}`}
        aria-label={`Acessar ${specialty.label}`}
      >
        {/* Top glow bar */}
        <div className="top-bar-accent" />

        {/* Active badge */}
        <span className="absolute top-4 right-4 text-[10px] font-body font-semibold uppercase tracking-widest text-[#00f2ff] bg-[#00f2ff]/10 border border-[#00f2ff]/20 px-3 py-1 rounded-full shimmer-effect">
          Disponível
        </span>

        {/* Icon */}
        <div className="icon-ring animate-pulse-ring">
          <Icon className="w-7 h-7 text-[#00f2ff]" strokeWidth={1.5} />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2 className="font-display font-semibold text-lg text-white leading-tight mb-2">
            {specialty.label}
          </h2>
          <p className="font-body text-sm text-white/40 leading-relaxed">
            {specialty.description}
          </p>
        </div>

        {/* CTA row */}
        <div className="flex items-center gap-2 text-[#00f2ff] text-sm font-body font-medium">
          <span>Acessar conteúdo</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </a>
    );
  }

  return (
    <div
      className={`specialty-card rounded-2xl p-7 flex flex-col gap-5 relative overflow-hidden select-none cursor-not-allowed ${delay}`}
      aria-disabled="true"
    >
      {/* Top glow bar */}
      <div className="top-bar-accent" />

      {/* Badge */}
      <span className="absolute top-4 right-4 text-[10px] font-body font-medium uppercase tracking-widest text-white/30 bg-white/5 border border-white/10 px-3 py-1 rounded-full flex items-center gap-1.5">
        <Lock className="w-2.5 h-2.5" />
        {specialty.badge}
      </span>

      {/* Icon */}
      <div className="icon-ring opacity-50">
        <Icon className="w-7 h-7 text-white/40" strokeWidth={1.5} />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h2 className="font-display font-semibold text-lg text-white/40 leading-tight">
          {specialty.label}
        </h2>
      </div>
    </div>
  );
}

export function SpecialtyGrid() {
  return (
    <main className="flex-1 px-5 pb-20 max-w-5xl mx-auto w-full relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {specialties.map((s, i) => (
          <SpecialtyCard key={s.id} specialty={s} index={i} />
        ))}
      </div>
    </main>
  );
}
