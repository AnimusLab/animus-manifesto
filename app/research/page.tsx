import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ResearchClient from "./ResearchClient";

import { getContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Publications & Research | AnimusLab",
  alternates: {
    canonical: "/research",
  },
};

export default function ResearchPage() {
  const notes = getContent("notes");
  const papers = getContent("papers");
  const consultations = getContent("consultations");

  // Merge papers and consultations for the main outputs list
  const allOutputs = [...papers, ...consultations];
  allOutputs.sort(
    (a, b) => new Date(b.date || "").getTime() - new Date(a.date || "").getTime()
  );

  notes.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const statusRows = [
    { name: "Anchor", status: "Active Development", type: "Research System" },
    { name: "Canon", status: "Released v0.1.0", type: "Research System" },
    { name: "FSB Consultation Response", status: "Submitted", type: "Regulatory Submission" },
    { name: "RBI Consultation Comments", status: "Submitted", type: "Regulatory Submission" },
    { name: "ICAIF Paper", status: "Under Preparation", type: "Research Paper" }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="px-6 md:px-12 py-28 border-b border-neutral-900">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500 mb-6 font-mono">
              Research Archive
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-8">
              Publications, Submissions, and System Status
            </h1>
            <p className="max-w-3xl text-lg text-neutral-400 leading-relaxed">
              Academic papers, regulatory consultation responses, implementation notes, and system status tracking from AnimusLab.
            </p>
          </div>
        </section>

        <ResearchClient
          initialOutputs={allOutputs}
          initialNotes={notes}
          statusRows={statusRows}
        />
      </main>

      <Footer />
    </div>
  );
}