import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Institute Profile | AnimusLab",
  description:
    "AnimusLab is an independent systems research and engineering institution focused on reasoning, governance, and observability for intelligent systems.",
  alternates: {
    canonical: "/institute",
  },
};

export default function InstitutePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col font-sans">
      <Header />

      <main className="flex-1 px-6 md:px-12 py-32 border-b border-neutral-900">
        <div className="max-w-3xl mx-auto space-y-12">
          
          <div className="space-y-4">
            <span className="text-xs text-indigo-400 font-mono tracking-widest block uppercase">
              // Institutional_Profile
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              AnimusLab Profile
            </h1>
          </div>

          <div className="prose prose-invert text-neutral-350 space-y-6 text-base leading-relaxed">
            <p>
              AnimusLab is an independent research institute established in 2026.
            </p>
            
            <p>
              The institute currently operates under founding stewardship while formal governance structures are developed.
            </p>

            <div className="border-t border-neutral-900 pt-6">
              <h3 className="text-white font-mono text-sm font-bold uppercase tracking-wider mb-2">
                Stewardship
              </h3>
              <p className="text-neutral-200">
                <strong>Tanishq Dasari</strong> — Founding Steward
              </p>
            </div>

            <div className="border-t border-neutral-900 pt-6">
              <h3 className="text-white font-mono text-sm font-bold uppercase tracking-wider mb-2">
                Core Programs
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-neutral-350">
                <li>
                  <strong>ANIMUS</strong> — Neuro-symbolic reasoning kernel
                </li>
                <li>
                  <strong>Anchor</strong> — Deterministic runtime governance &amp; auditability layer
                </li>
                <li>
                  <strong>Shadow Watch</strong> — Behavioral verification &amp; institutional accountability
                </li>
              </ul>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
