"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const STORAGE_KEY = "grr-lang-chosen";

export default function LanguageSelector() {
  const [visible, setVisible] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const chosen = localStorage.getItem(STORAGE_KEY);
    if (!chosen) setVisible(true);
  }, []);

  const choose = (lang: "en" | "es") => {
    localStorage.setItem(STORAGE_KEY, lang);
    setVisible(false);
    if (lang !== locale) {
      router.replace(pathname, { locale: lang });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary-dark/80 backdrop-blur-sm px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-sm shadow-primary-lg w-full max-w-sm p-8 text-center"
          >
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="relative w-16 h-16">
                <Image
                  src="/logo-rooster.png"
                  alt="Golden Roosters Roofing"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Divider */}
            <div className="w-10 h-[2px] bg-accent rounded-full mx-auto mb-6" />

            {/* Bilingual headline */}
            <p className="font-heading font-black text-primary text-lg leading-snug mb-1">
              Welcome
            </p>
            <p className="font-heading font-black text-primary text-lg leading-snug mb-6">
              Bienvenido
            </p>

            <p className="text-gray-400 text-xs mb-8 leading-relaxed">
              Choose your preferred language
              <br />
              Elige tu idioma preferido
            </p>

            {/* Language buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => choose("en")}
                className="flex-1 flex flex-col items-center gap-2 py-4 px-3 rounded-sm border-2 border-gray-100 hover:border-accent hover:bg-accent/5 transition-all duration-200 group"
              >
                <span className="text-2xl">🇺🇸</span>
                <span className="font-heading font-bold text-primary text-sm group-hover:text-accent transition-colors duration-200">
                  English
                </span>
              </button>

              <button
                onClick={() => choose("es")}
                className="flex-1 flex flex-col items-center gap-2 py-4 px-3 rounded-sm border-2 border-gray-100 hover:border-accent hover:bg-accent/5 transition-all duration-200 group"
              >
                <span className="text-2xl">🇲🇽</span>
                <span className="font-heading font-bold text-primary text-sm group-hover:text-accent transition-colors duration-200">
                  Español
                </span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
