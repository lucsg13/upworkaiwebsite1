import { Sparkles, Leaf, Globe, Users, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const VALUES = [
  {
    icon: Leaf,
    title: 'Nature‑First Design',
    description:
      'Every algorithm is rooted in real botanical science. We model growth patterns, petal geometry, and organic structures to generate designs that feel genuinely alive.',
  },
  {
    icon: Globe,
    title: 'Global Community',
    description:
      'Over 50,000 designers, florists, and artists from 120+ countries use Force G to push the boundaries of what is possible in plant design.',
  },
  {
    icon: Target,
    title: 'Precision Meets Art',
    description:
      'Our AI does not just generate — it understands proportion, harmony, and aesthetics. The result is output that looks hand-crafted, not machine-made.',
  },
  {
    icon: Users,
    title: 'Built for Teams',
    description:
      'From solo creators to large studios, Force G scales with your workflow. Real-time collaboration, shared libraries, and role-based access built in.',
  },
];

const TEAM = [
  {
    name: 'Marcus Aurelio',
    role: 'Founder & CEO',
    bio: 'Former botanist turned technologist. 15 years bridging the gap between nature and computation.',
  },
  {
    name: 'Elena Vasquez',
    role: 'Chief AI Officer',
    bio: 'PhD in Generative Models from MIT. Previously led the creative AI division at a Fortune 500.',
  },
  {
    name: 'Tomás Nakamura',
    role: 'Head of Design',
    bio: 'Award‑winning visual designer with a passion for biomimicry and organic form languages.',
  },
];

export default function AboutPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-16 pb-16 sm:pb-24">
      {/* Hero */}
      <div className="text-center pt-8 sm:pt-12 pb-12 sm:pb-16 max-w-3xl mx-auto">
        <p className="text-[10px] sm:text-xs tracking-widest uppercase text-white/50 mb-4 font-semibold">
          Our Story
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.04em] text-white leading-[1.1] mb-6">
          Reimagining what <br className="hidden sm:block" />
          <em className="font-serif italic text-white/80 font-normal">nature can become</em>
        </h1>
        <p className="text-sm sm:text-base text-white/60 max-w-xl mx-auto leading-relaxed">
          Force G was born from a simple question: what if technology could amplify nature's beauty instead of replacing it? We set out to build the most intuitive, powerful platform for botanical design — powered by AI, inspired by the natural world.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 max-w-4xl mx-auto mb-16 sm:mb-20">
        {[
          { value: '50K+', label: 'Active Creators' },
          { value: '2M+', label: 'Designs Generated' },
          { value: '120+', label: 'Countries' },
          { value: '99.9%', label: 'Uptime SLA' },
        ].map((stat) => (
          <div key={stat.label} className="liquid-glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-2 tracking-tight">
              {stat.value}
            </p>
            <p className="text-[10px] sm:text-xs text-white/50 tracking-wider uppercase">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Values */}
      <div className="max-w-5xl mx-auto mb-16 sm:mb-20">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-[10px] sm:text-xs tracking-widest uppercase text-white/50 mb-3 font-semibold">
            What We Believe
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white tracking-tight">
            Our <em className="font-serif italic text-white/80 font-normal">core values</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="liquid-glass rounded-3xl p-6 sm:p-8 group hover:scale-[1.02] transition-transform cursor-default"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-5 group-hover:bg-white/20 transition-colors">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-medium text-white mb-3">{value.title}</h3>
                <p className="text-xs sm:text-sm text-white/50 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Team */}
      <div className="max-w-4xl mx-auto mb-16 sm:mb-20">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-[10px] sm:text-xs tracking-widest uppercase text-white/50 mb-3 font-semibold">
            The People
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white tracking-tight">
            Meet the <em className="font-serif italic text-white/80 font-normal">team</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="liquid-glass rounded-3xl p-6 sm:p-8 text-center hover:scale-[1.02] transition-transform"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-5">
                <Sparkles className="w-7 h-7 text-white/70" />
              </div>
              <h3 className="text-sm sm:text-base font-medium text-white mb-1">{member.name}</h3>
              <p className="text-[10px] sm:text-xs text-white/50 tracking-wider uppercase mb-4">
                {member.role}
              </p>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="liquid-glass-strong rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-medium text-white mb-4 tracking-tight">
          Ready to create something <em className="font-serif italic text-white/80 font-normal">extraordinary</em>?
        </h2>
        <p className="text-xs sm:text-sm text-white/50 mb-8 max-w-md mx-auto leading-relaxed">
          Join thousands of creators already using Force G to push the boundaries of botanical design.
        </p>
        <Link
          to="/pricing"
          className="liquid-glass rounded-full px-8 py-3 text-sm font-medium text-white/90 hover:scale-105 active:scale-95 transition-transform cursor-pointer inline-flex items-center gap-2"
        >
          View Pricing
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
