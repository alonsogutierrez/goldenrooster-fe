"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [status, setStatus] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", projectType: "", message: "", honeypot: "",
  });

  const servicesList = t.raw("services") as string[];
  const projectTypes = t.raw("projectTypes") as string[];

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-20 px-8 bg-white rounded-sm border border-gray-100 shadow-card"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
          className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5"
        >
          <CheckCircle size={32} className="text-green-500" />
        </motion.div>
        <h3 className="font-heading font-black text-primary text-2xl mb-3">{t("successTitle")}</h3>
        <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
          {t("successMessage")}
        </p>
        <button
          onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "", service: "", projectType: "", message: "", honeypot: "" }); }}
          className="mt-8 text-accent text-sm font-semibold hover:underline"
        >
          {t("sendAnother")}
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-sm border border-gray-100 shadow-card p-8 space-y-6" noValidate>
      <div className="mb-2">
        <h3 className="font-heading font-black text-primary text-xl">{t("title")}</h3>
        <p className="text-gray-400 text-xs mt-1">
          {t("required").split("*")[0]}<span className="text-accent">*</span>{t("required").split("*")[1]}
        </p>
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input tabIndex={-1} autoComplete="off" value={form.honeypot} onChange={(e) => update("honeypot", e.target.value)} />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="input-label">{t("nameLabel")} <span className="text-accent">*</span></label>
          <input id="name" type="text" required placeholder={t("namePlaceholder")} value={form.name} onChange={(e) => update("name", e.target.value)} className="input-field" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="email" className="input-label">{t("emailLabel")} <span className="text-accent">*</span></label>
          <input id="email" type="email" required placeholder={t("emailPlaceholder")} value={form.email} onChange={(e) => update("email", e.target.value)} className="input-field" autoComplete="email" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="input-label">{t("phoneLabel")} <span className="text-accent">*</span></label>
          <input id="phone" type="tel" required placeholder={t("phonePlaceholder")} value={form.phone} onChange={(e) => update("phone", e.target.value)} className="input-field" autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="service" className="input-label">{t("serviceLabel")} <span className="text-accent">*</span></label>
          <select id="service" required value={form.service} onChange={(e) => update("service", e.target.value)} className="input-field">
            <option value="" disabled>{t("servicePlaceholder")}</option>
            {servicesList.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="input-label">{t("projectTypeLabel")}</label>
        <div className="flex flex-wrap gap-2 mt-1.5">
          {projectTypes.map((type) => (
            <button key={type} type="button" onClick={() => update("projectType", type)}
              className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider border transition-all duration-200 ${form.projectType === type ? "bg-accent text-white border-accent" : "bg-transparent text-gray-500 border-gray-200 hover:border-accent hover:text-accent"}`}>
              {type}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="input-label">{t("messageLabel")} <span className="text-accent">*</span></label>
        <textarea id="message" required rows={5} placeholder={t("messagePlaceholder")} value={form.message} onChange={(e) => update("message", e.target.value)} className="input-field resize-none" />
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-red-500 text-xs">
            {t("errorMessage")}
          </motion.p>
        )}
      </AnimatePresence>

      <button type="submit" disabled={status === "loading"} className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
        {status === "loading" ? (
          <><Loader2 size={15} className="animate-spin" />{t("sending")}</>
        ) : (
          <>{t("submit")}<Send size={14} /></>
        )}
      </button>

      <p className="text-gray-400 text-[11px] text-center">{t("privacy")}</p>
    </form>
  );
}
