"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import SearchBar from "@/components/SearchBar";
import PropertyList from "@/components/PropertyList";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [ids, setIds] = useState<number[] | undefined>(undefined);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <div className="mt-6">
          <SearchBar onResults={setIds} />
        </div>
        <PropertyList visibleIds={ids} />
      </main>
      <Footer />
    </>
  );
}
