import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ArchitectureClient from "./ArchitectureClient";

export const metadata: Metadata = {
  title: "Product Studio Architecture & System Topology | AnimusLab",
  description:
    "Explore AnimusLab's Product Studio model: independent systems engineering for Anchor, AnchorGrid-Hub, QuantForge, Shadow_Watch, and FORGE.",
  alternates: {
    canonical: "/architecture",
  },
};

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-[#030408] text-[#e5e5e5] flex flex-col">
      <Header />
      <main className="flex-1">
        <ArchitectureClient />
      </main>
      <Footer />
    </div>
  );
}
