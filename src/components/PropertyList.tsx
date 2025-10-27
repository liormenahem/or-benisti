"use client";
import { useMemo, useState } from "react";
import properties from "@/data/properties";
import PropertyCard from "./PropertyCard";

export default function PropertyList({ visibleIds }: { visibleIds?: number[] }) {
  const ids = visibleIds ?? properties.map(p => p.id);
  const [limit, setLimit] = useState(6);

  const items = useMemo(
    () => properties.filter(p => ids.includes(p.id)).slice(0, limit),
    [ids, limit]
  );

  return (
    <section className="container my-10 space-y-4">
      {items.map(p => <PropertyCard key={p.id} p={p} />)}
      {items.length < ids.length && (
        <div className="text-center">
          <button className="btn-primary" onClick={() => setLimit(l => l + 6)}>טען עוד</button>
        </div>
      )}
    </section>
  );
}
