import Image from "next/image";
import Link from "next/link";
import { Property } from "@/data/properties";

export default function PropertyCard({ p }: { p: Property }) {
  return (
    <article className="card overflow-hidden flex flex-col md:flex-row gap-0">
      <div className="relative w-full md:w-1/3 h-56 md:h-auto">
        <Image src={p.image} alt={p.title} fill className="object-cover" />
      </div>
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-primary-dark">{p.title}</h3>
          <p className="mt-1 text-sm text-gray-600">{p.city} • {p.type} • {p.deal}</p>
          <p className="mt-3 text-gray-700">{p.description}</p>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Link href="/contact" className="btn-primary text-sm">דברו איתי</Link>
          <span className="text-primary-dark font-bold">{p.price.toLocaleString()} ₪</span>
        </div>
      </div>
    </article>
  );
}
