"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Languages } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openDropdown = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(key);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const toggleLocale = () => {
    const next = locale === "en" ? "es" : "en";
    router.replace(pathname, { locale: next });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-primary-lg"
          : "bg-transparent"
      )}
    >
      <nav className="container-xl">
        <div className="flex items-center justify-between h-[80px] lg:h-[90px]">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="relative flex items-center flex-shrink-0 group"
            aria-label={`${SITE.name} – Home`}
          >
            <motion.div
              className="relative h-[65px] lg:h-[78px] w-[80px] transition-all duration-300 group-hover:opacity-90"
              animate={{ x: [0, 4, 0, -4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/logo-rooster.png"
                alt={`${SITE.fullName} logo`}
                fill
                className="object-contain object-left"
                priority
              />
            </motion.div>
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
                      {t(link.key as keyof typeof t)}
                      <ChevronDown
                        size={13}
                        className={cn(
                          "transition-transform duration-200",
                          activeDropdown === link.href && "rotate-180"
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === link.href && (
                        <motion.ul
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-0 mt-1 w-64 bg-white rounded-sm shadow-card-hover border border-gray-100 py-1.5 z-50"
                          role="menu"
                          onMouseEnter={() => openDropdown(link.href)}
                          onMouseLeave={closeDropdown}
                        >
                          {link.dropdown.map((item) => (
                            <li key={item.href} role="none">
                              <Link
                                href={item.href}
                                className="block px-4 py-2.5 text-[13px] text-gray-600 hover:text-accent hover:bg-gray-50 transition-colors duration-150 font-medium"
                                role="menuitem"
                              >
                                {t(item.key as keyof typeof t)}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-white/85 hover:text-white font-medium text-[13px] tracking-wide transition-colors duration-200 rounded-sm block"
                    role="menuitem"
                  >
                    {t(link.key as keyof typeof t)}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* ── Desktop: Right actions ── */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language switcher */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-white/20 text-white/70 hover:text-white hover:border-white/40 text-xs font-bold uppercase tracking-wider transition-all duration-200"
              aria-label="Switch language"
            >
              <Languages size={13} />
              {locale === "en" ? "ES" : "EN"}
            </button>

            <Link href="/contact" className="btn-primary text-[13px] py-2.5 px-5">
              {t("getQuote")}
            </Link>
          </div>

          {/* ── Mobile: hamburger + lang ── */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-sm border border-white/20 text-white/70 hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-200"
            >
              {locale === "en" ? "ES" : "EN"}
            </button>
            <button
              onClick={() => setIsOpen((o) => !o)}
              className="w-10 h-10 flex items-center justify-center text-white rounded-sm hover:bg-white/10 transition-colors duration-200"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-primary/98 backdrop-blur-md border-t border-white/10 overflow-hidden"
          >
            <nav className="container-xl py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-white/80 hover:text-white font-medium text-sm transition-colors duration-200 rounded-sm hover:bg-white/5"
                    onClick={() => setIsOpen(false)}
                  >
                    {t(link.key as keyof typeof t)}
                  </Link>
                  {link.dropdown?.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-8 py-2.5 text-white/55 hover:text-accent text-xs font-medium transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {t(item.key as keyof typeof t)}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="pt-3 px-4">
                <Link
                  href="/contact"
                  className="btn-primary w-full justify-center text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {t("getQuote")}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
