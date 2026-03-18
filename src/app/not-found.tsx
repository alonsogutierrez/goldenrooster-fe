import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary-dark flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg">
        {/* Big 404 */}
        <div
          className="font-heading font-black text-white/5 leading-none select-none mb-8"
          style={{ fontSize: "clamp(8rem, 22vw, 15rem)" }}
          aria-hidden="true"
        >
          404
        </div>

        <div className="-mt-24 space-y-6 relative z-10">
          <span className="section-tag mx-auto justify-center">Page Not Found</span>

          <h1 className="font-heading font-black text-white text-3xl sm:text-4xl">
            Off the Grid
          </h1>

          <div className="w-10 h-[2px] bg-accent mx-auto rounded-full" />

          <p className="text-white/55 text-base leading-relaxed">
            The page you&apos;re looking for has been moved, removed, or never existed.
            Let&apos;s get you back on solid footing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link href="/" className="btn-primary group">
              <Home size={14} />
              Back to Home
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
