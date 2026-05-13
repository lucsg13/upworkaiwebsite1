import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Download,
  Wand2,
  BookOpen,
  ArrowRight,
  MessageCircle,
  Briefcase,
  Camera,
  Menu,
  Plus,
} from 'lucide-react';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <div className="flex flex-col lg:flex-row p-3 sm:p-4 lg:p-6 gap-4 lg:gap-6 min-h-screen min-h-dvh">
      {/* ─── LEFT PANEL ─── */}
      <div className="liquid-glass-strong w-full lg:w-[52%] rounded-3xl p-5 sm:p-6 lg:p-12 flex flex-col min-h-[calc(100dvh-1.5rem)] lg:min-h-[calc(100vh-3rem)]">
        {/* Top Nav */}
        <header className="flex justify-between items-center w-full">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-xl sm:text-2xl tracking-tighter text-white">
              Force G
            </span>
          </Link>
          <button
            onClick={toggleMenu}
            className="liquid-glass rounded-full px-4 sm:px-5 py-2 sm:py-2.5 flex items-center gap-2 text-sm hover:scale-105 transition-transform active:scale-95 cursor-pointer"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu className="w-4 h-4" />
            <span className="hidden sm:inline">Menu</span>
          </button>
        </header>

        {/* Inline Quick Menu Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-400 ease-out ${
            menuOpen ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="liquid-glass rounded-2xl p-4 flex flex-col gap-1">
            {[
              { label: 'Pricing', href: '/pricing' },
              { label: 'FAQ', href: '/faq' },
              { label: 'About Us', href: '/about' },
              { label: 'Gallery', href: '/gallery' },
            ].map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={closeMenu}
                className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group"
              >
                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                  {item.label}
                </span>
                <ArrowRight className="w-4 h-4 text-white/0 group-hover:text-white/60 transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>

        {/* Hero Center */}
        <main className="flex-1 flex flex-col items-center justify-center text-center py-12 sm:py-16 lg:py-0">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 flex items-center justify-center mb-6 sm:mb-8 liquid-glass p-3 sm:p-4">
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white opacity-80" />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.05em] text-white leading-[1.1] mb-10 sm:mb-12 max-w-2xl px-2">
            Innovating the <br />
            <em className="font-serif italic text-white/80 font-normal">
              spirit of Force G AI
            </em>
          </h1>

          <Link
            to="/gallery"
            className="liquid-glass-strong rounded-full pl-5 sm:pl-6 pr-2 py-2 flex items-center gap-3 sm:gap-4 hover:scale-105 active:scale-95 transition-transform mb-12 sm:mb-16 cursor-pointer"
          >
            <span className="font-medium text-sm sm:text-base text-white/90">Explore Now</span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/15 flex items-center justify-center">
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </div>
          </Link>

          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {['Artistic Gallery', 'AI Generation', '3D Structures'].map((tag) => (
              <div
                key={tag}
                className="liquid-glass rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs text-white/80 font-medium whitespace-nowrap"
              >
                {tag}
              </div>
            ))}
          </div>
        </main>

        {/* Bottom Quote */}
        <footer className="flex flex-col items-center text-center mt-auto pt-10 pb-4">
          <p className="text-[10px] tracking-widest uppercase text-white/50 mb-3 sm:mb-4 font-semibold">
            Visionary Design
          </p>
          <p className="text-base sm:text-lg mb-4 sm:mb-6 text-white/90 px-4">
            "We imagined a realm with{' '}
            <span className="font-serif italic text-white">no ending</span>."
          </p>
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-white/20" />
            <p className="text-[10px] tracking-widest uppercase text-white/70">Marcus Aurelio</p>
            <div className="h-px w-8 bg-white/20" />
          </div>
        </footer>
      </div>

      {/* ─── RIGHT PANEL (Desktop) ─── */}
      <div className="hidden lg:flex w-[48%] flex-col relative min-h-[calc(100vh-3rem)]">
        {/* Top Bar */}
        <div className="flex justify-between items-start w-full">
          <div className="liquid-glass rounded-full px-2 py-2 flex items-center gap-2">
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-white/80 transition-colors hover:scale-105 active:scale-95 cursor-pointer" aria-label="Messages">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-white/80 transition-colors hover:scale-105 active:scale-95 cursor-pointer" aria-label="Portfolio">
              <Briefcase className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-white/80 transition-colors hover:scale-105 active:scale-95 cursor-pointer" aria-label="Photos">
              <Camera className="w-4 h-4" />
            </a>
            <div className="w-8 h-8 flex items-center justify-center ml-2">
              <ArrowRight className="w-4 h-4 text-white/60" />
            </div>
          </div>
          <button className="liquid-glass rounded-full pl-2 pr-5 py-2 flex items-center gap-3 hover:scale-105 active:scale-95 transition-transform cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-white/90">Account</span>
          </button>
        </div>

        {/* Community Card */}
        <div className="liquid-glass w-64 rounded-3xl p-6 mt-6 hover:scale-[1.02] transition-transform cursor-pointer">
          <h3 className="text-sm font-medium text-white mb-3">Enter our ecosystem</h3>
          <p className="text-xs text-white/60 leading-relaxed">
            Connect with creators and keep active with Force G's modern AI‑powered systems.
          </p>
        </div>

        {/* Bottom Feature Section */}
        <div className="mt-auto liquid-glass rounded-[2.5rem] p-6 flex flex-col gap-5">
          <div className="flex gap-5">
            <div className="liquid-glass flex-1 rounded-3xl p-6 hover:scale-[1.02] transition-transform cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-5 group-hover:bg-white/20 transition-colors">
                <Wand2 className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-sm font-medium text-white mb-3">Processing</h4>
              <p className="text-xs text-white/50 leading-relaxed">
                High‑end processing functions that bring floral beauty to form
              </p>
            </div>
            <div className="liquid-glass flex-1 rounded-3xl p-6 hover:scale-[1.02] transition-transform cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-5 group-hover:bg-white/20 transition-colors">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-sm font-medium text-white mb-3">Growth Archive</h4>
              <p className="text-xs text-white/50 leading-relaxed">
                Set‑up templates and choices for different plant varieties
              </p>
            </div>
          </div>

          <div className="liquid-glass rounded-3xl p-4 flex items-center gap-5 hover:scale-[1.02] transition-transform cursor-pointer group">
            <img
              src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&q=80&w=120&h=80"
              alt="Plant Sculpting"
              className="w-24 h-16 rounded-2xl object-cover"
              loading="lazy"
              width={96}
              height={64}
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-white mb-1.5">Advanced Plant Sculpting</h4>
              <p className="text-xs text-white/50 leading-relaxed pr-4">
                Modern 3D crafting assets that permit you to build very complex and lifelike forms
              </p>
            </div>
            <button className="w-10 h-10 shrink-0 rounded-full liquid-glass flex items-center justify-center text-white/70 ml-2 group-hover:text-white transition-colors group-hover:scale-105 active:scale-95 cursor-pointer">
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
