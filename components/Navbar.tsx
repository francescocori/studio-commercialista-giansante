"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  startTransition,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { STUDIO, NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // Close drawer on route change (wrapped in startTransition to avoid setState-in-effect warning)
  useEffect(() => {
    startTransition(() => setOpen(false));
  }, [pathname]);

  // Keyboard: Esc closes, focus trap inside drawer
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key === "Tab") {
        const focusable = drawerRef.current?.querySelectorAll<HTMLElement>(
          'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKey);
    // Move focus into drawer
    firstFocusableRef.current?.focus();
    // Prevent body scroll
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex flex-col leading-tight"
              aria-label={`${STUDIO.name} — torna alla home`}
            >
              <span className="font-serif text-lg font-semibold text-navy tracking-tight">
                {STUDIO.name}
              </span>
              <span className="text-xs text-gold font-medium tracking-wide uppercase hidden sm:block">
                {STUDIO.tagline}
              </span>
            </Link>

            {/* Desktop nav */}
            <nav
              aria-label="Navigazione principale"
              className="hidden md:flex items-center gap-6"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-gold ${
                    pathname === link.href
                      ? "text-navy border-b-2 border-gold pb-0.5"
                      : "text-gray-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contatti"
                className="ml-2 inline-flex items-center justify-center min-h-11 px-5 py-2 bg-navy text-white text-sm font-medium rounded-[10px] transition-colors hover:bg-navy-deep"
              >
                Richiedi una consulenza
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <button
              aria-label={open ? "Chiudi menu" : "Apri menu"}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.25 rounded-lg hover:bg-cream transition-colors"
            >
              <span
                className={`block w-6 h-0.5 bg-navy transition-transform duration-300 ${
                  open ? "translate-y-1.75 rotate-45" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-navy transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-navy transition-transform duration-300 ${
                  open ? "-translate-y-1.75 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/*
        Backdrop e drawer sono FUORI dall'<header> intenzionalmente.
        L'<header> ha z-50 e crea un proprio stacking context: qualsiasi
        figlio con z-index positivo verrebbe dipinto sopra lo sfondo
        dell'header, rendendo il drawer visibile anche da chiuso.
        Essendo fratelli, il confronto z-index funziona correttamente:
        drawer (z-40) e backdrop (z-30) restano sotto la navbar (z-50).
      */}

      {/* Mobile backdrop */}
      {open && (
        <div
          className="fixed inset-0 top-16 bg-navy/40 z-30 md:hidden"
          aria-hidden="true"
          onClick={close}
        />
      )}

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu di navigazione"
        className={`fixed top-16 left-0 right-0 bg-white z-40 md:hidden transition-transform duration-300 ${
          open ? "translate-y-0" : "-translate-y-full pointer-events-none"
        }`}
      >
        <nav className="px-4 pt-4 pb-6 flex flex-col gap-1">
          <button
            ref={firstFocusableRef}
            onClick={close}
            aria-label="Chiudi menu"
            className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-gold text-white px-3 py-1 rounded text-sm"
          >
            Chiudi menu
          </button>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center min-h-12 px-3 py-2 rounded-lg text-base font-medium transition-colors hover:bg-cream hover:text-navy ${
                pathname === link.href
                  ? "text-navy bg-cream border-l-4 border-gold"
                  : "text-gray-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-sand space-y-3">
            <Link
              href="/contatti"
              className="flex items-center justify-center min-h-12 px-5 py-3 bg-navy text-white font-medium rounded-[10px] text-center hover:bg-navy-deep transition-colors"
            >
              Richiedi una consulenza
            </Link>
            <a
              href={`tel:${STUDIO.phone}`}
              className="flex items-center justify-center min-h-12 px-5 py-3 border-2 border-navy text-navy font-medium rounded-[10px] text-center hover:bg-cream transition-colors gap-2"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {STUDIO.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
