import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProgramsClient from "./ProgramsClient";

export const metadata: Metadata = {
  title: "Research Programs | AnimusLab",
  alternates: {
    canonical: "/programs",
  },
};

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-1">
        <ProgramsClient />
      </main>

      <Footer />
    </div>
  );
}