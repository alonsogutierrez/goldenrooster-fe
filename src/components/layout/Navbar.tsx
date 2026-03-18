"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ── Scroll detection ── */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Lock body scroll when mobile open ── */
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const openDropdown = (href: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(href);
  };
  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <>
      {/* ── Top accent bar ── */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-accent" />

      <header
        className={cn(
          "fixed top-1 left-0 right-0 z-40 transition-all duration-500",
          isScrolled
            ? "bg-primary/98 backdrop-blur-md shadow-primary-lg"
            : "bg-transparent"
        )}
      >
        <nav className="container-xl">
          <div className="flex items-center justify-between h-[72px] lg:h-20">

            {/* ── Logo ── */}
            <Link
              href="/"
              className="relative flex items-center flex-shrink-0 group"
              aria-label={`${SITE.name} – Home`}
            >
              <div className="relative h-9 w-[166px] transition-all duration-300 group-hover:opacity-90">
                <Image
                  src="/logo-white.svg"
                  alt={`${SITE.fullName} logo`}
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* ── Desktop Navigation ── */}
            <ul className="hidden lg:flex items-center gap-0.5" role="menubar">
              {NAV_LINKS.map((link) => (
                <li
                  key={link.href}
                  className="relative"
                  role="none"
                  onMouseEnter={() => link.dropdown && openDropdown(link.href)}
                  onMouseLeave={() => link.dropdown && closeDropdown()}
                >
                  {link.dropdown ? (
                    <>
                      <button
                        className="group flex items-center gap-1.5 px-4 py-2 text-white/85 hover:text-white font-medium text-[13px] tracking-wide transition-colors duration-200 rounded-sm"
                        aria-haspopup="true"
                        aria-expanded={activeDropdown === link.href}
                      >
                        {link.label}
                        <ChevronDown
                          size={12}
                          className={cn(
                            "transition-transform duration-200 text-accent",
                            activeDropdown === link.href ? "rotate-180" : ""
                          )}
                        />
                        {/* underline */}
                        <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === link.href && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            className="absolute top-full left-0 pt-3 w-60"
                            onMouseEnter={() => openDropdown(link.href)}
                            onMouseLeave={() => closeDropdown()}
                          >
                            <div className="bg-white rounded-sm shadow-2xl border border-gray-100 overflow-hidden divide-y divide-gray-50">
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="flex items-center justify-between px-5 py-3 text-gray-700 hover:text-accent hover:bg-accent/5 text-[13px] font-medium transition-all duration-150 group/item border-l-2 border-transparent hover:border-accent"
                                >
                                  {item.label}
                                  <ArrowRight size={12} className="opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all duration-200 text-accent" />
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="relative group/link px-4 py-2 text-white/85 hover:text-white font-medium text-[13px] tracking-wide transition-colors duration-200 rounded-sm block"
                      role="menuitem"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* ── Right: Phone + CTA + Hamburger ── */}
            <div className="flex items-center gap-3 lg:gap-4">
              <a
                href={SITE.phoneHref}
                className="hidden xl:flex items-center gap-2 text-white/75 hover:text-white transition-colors duration-200 text-xs font-medium group"
                aria-label={`Call us: ${SITE.phone}`}
              >
                <Phone size={13} className="text-accent animate-float-sm group-hover:text-accent-light" />
                {SITE.phone}
              </a>

              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-dark text-white font-bold text-[11px] tracking-[0.18em] uppercase rounded-sm transition-all duration-300 hover:shadow-accent hover:-translate-y-px"
              >
                Free Estimate
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>

              {/* Hamburger */}
              <button
                className="lg:hidden p-2 -mr-1 text-white hover:text-accent transition-colors duration-200 rounded-sm"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label={isMobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileOpen ? (
                    <motion.span
                      key="x"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="block"
                    >
                      <X size={22} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="block"
                    >
                      <Menu size={22} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </nav>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden overflow-hidden bg-primary-dark border-t border-white/10"
            >
              <div className="py-4 space-y-0.5 container-xl">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: -16, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06 + 0.08, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center justify-between px-4 py-3.5 text-white/85 hover:text-white hover:bg-white/5 font-medium text-sm tracking-wide transition-all duration-200 border-l-2 border-transparent hover:border-accent rounded-sm"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {link.label}
                      {link.dropdown && <ChevronDown size={14} className="text-accent/60" />}
                    </Link>

                    {link.dropdown && (
                      <div className="pl-6 py-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-white/55 hover:text-accent text-xs font-medium tracking-wide transition-colors duration-200 hover:pl-6"
                            onClick={() => setIsMobileOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  className="px-4 pt-3 pb-4 space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <a
                    href={SITE.phoneHref}
                    className="flex items-center gap-2 text-white/70 text-sm font-medium py-2"
                  >
                    <Phone size={14} className="text-accent" />
                    {SITE.phone}
                  </a>
                  <Link
                    href="/contact"
                    className="block w-full text-center py-3.5 bg-accent hover:bg-accent-dark text-white font-bold text-xs tracking-[0.18em] uppercase rounded-sm transition-colors duration-200"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Get a Free Estimate
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
