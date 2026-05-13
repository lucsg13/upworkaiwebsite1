import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  Menu,
  X,
  ArrowLeft,
} from 'lucide-react';

const MENU_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
] as const;

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <div className="relative min-h-screen min-h-dvh w-full bg-black text-white font-sans overflow-x-hidden selection:bg-white/20">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-80"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4"
          type="video/mp4"
        />
      </video>

      {/* ─── MENU OVERLAY ─── */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ease-out ${
          menuOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={closeMenu}
          aria-hidden="true"
        />
        <div
          className={`absolute inset-x-4 top-4 bottom-4 lg:inset-x-[20%] lg:top-[10%] lg:bottom-[10%] liquid-glass-strong rounded-3xl p-8 sm:p-10 flex flex-col transition-all duration-500 ease-out ${
            menuOpen ? 'translate-y-0 scale-100' : '-translate-y-8 scale-95'
          }`}
        >
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 w-10 h-10 rounded-full liquid-glass flex items-center justify-center hover:scale-110 active:scale-95 transition-transform cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-2xl tracking-tighter text-white">Force G</span>
          </div>

          <nav className="flex-1 flex flex-col justify-center gap-2">
            {MENU_ITEMS.map((item, i) => (
              <Link
                key={item.href}
                to={item.href}
                className={`group flex items-center gap-4 py-4 sm:py-5 border-b border-white/[0.06] last:border-b-0 transition-all duration-300 hover:pl-4 ${
                  location.pathname === item.href ? 'pl-4' : ''
                }`}
                style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
              >
                <span
                  className={`text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight transition-colors ${
                    location.pathname === item.href
                      ? 'text-white'
                      : 'text-white/80 group-hover:text-white'
                  }`}
                >
                  {item.label}
                </span>
                <ArrowRight
                  className={`w-5 h-5 transition-all duration-300 ${
                    location.pathname === item.href
                      ? 'text-white/60 translate-x-0'
                      : 'text-white/0 -translate-x-4 group-hover:text-white/60 group-hover:translate-x-0'
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/[0.06]">
            <p className="text-xs text-white/40 leading-relaxed">
              © 2026 Force G — AI‑Powered Plant & Floral Design
            </p>
          </div>
        </div>
      </div>

      {/* ─── PAGE CONTENT ─── */}
      <div className="relative z-10 min-h-screen min-h-dvh">
        {/* ─── STICKY NAVBAR (subpages) ─── */}
        {!isHome && (
          <header className="sticky top-0 z-40 p-3 sm:p-4 lg:p-6">
            <div className="liquid-glass-strong rounded-2xl px-5 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
              <Link to="/" className="flex items-center gap-2.5 hover:scale-105 transition-transform group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-lg sm:text-xl tracking-tighter text-white">
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
            </div>
          </header>
        )}

        {children}
      </div>
    </div>
  );
}
