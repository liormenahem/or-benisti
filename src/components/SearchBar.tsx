"use client";
import { useState } from "react";
import properties from "@/data/properties";

export default function SearchBar({ onResults }: { onResults: (ids: number[]) => void }) {
  const [q, setQ] = useState("");
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [deal, setDeal] = useState("");

  const cities = Array.from(new Set(properties.map(p => p.city)));
  const types = Array.from(new Set(properties.map(p => p.type)));
  const deals = Array.from(new Set(properties.map(p => p.deal)));

  function search() {
    const res = properties
      .filter(p => (q ? (p.title + " " + p.description).includes(q) : true))
      .filter(p => (city ? p.city === city : true))
      .filter(p => (type ? p.type === type : true))
      .filter(p => (deal ? p.deal === deal : true))
      .map(p => p.id);
    onResults(res);
  }

  return (
    <div className="container -mt-6 relative z-20">
      <div className="card p-4">
        <div className="grid md:grid-cols-5 gap-3">
          <input
            className="border rounded-xl2 px-3 py-2"
            placeholder="חיפוש חופשי..."
            aria-label="חיפוש חופשי"
            value={q}
            onChange={e => setQ(e.target.value)}
          />
          <select
            className="border rounded-xl2 px-3 py-2"
            value={city}
            onChange={e => setCity(e.target.value)}
            aria-label="בחירת אזור"
          >
            <option value="">כל אזור</option>
            {cities.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select
            className="border rounded-xl2 px-3 py-2"
            value={type}
            onChange={e => setType(e.target.value)}
            aria-label="בחירת סוג נכס"
          >
            <option value="">כל סוג</option>
            {types.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <select
            className="border rounded-xl2 px-3 py-2"
            value={deal}
            onChange={e => setDeal(e.target.value)}
            aria-label="בחירת סוג עסקה"
          >
            <option value="">כל עסקה</option>
            {deals.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
          <button onClick={search} className="btn-primary">חפש נכסים</button>
        </div>
      </div>
    </div>
  );
}
