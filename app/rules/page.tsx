import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getContent } from "@/lib/content";
import RulesClient from "./RulesClient";

export const metadata: Metadata = {
  title: "Statutory Rules Matrix & Governance Catalog | AnimusLab",
  description: "Machine-enforced policy matrix covering EU AI Act Articles 5–99, SEC Rule 15c3-5, Reg SCI, and RBI Model Risk guidelines.",
  alternates: {
    canonical: "/rules",
  },
};

export default function RulesPage() {
  const rules = getContent("rules");

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-1 max-w-6xl mx-auto px-6 md:px-12 py-24 w-full">
        <RulesClient rules={rules} />
      </main>

      <Footer />
    </div>
  );
}
