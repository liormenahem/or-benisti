"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white/90 backdrop-blur sticky top-0 z-50 border-b border-gray-100">
      <nav className="container flex items-center justify-between h-16">
        <Link href="/" className="text-primary-dark font-bold text-lg">נדל״ן אשדוד+</Link>

        <button
          className="md:hidden p-2 rounded-lg border border-gray-200"
          onClick={() => setOpen(v => !v)}
          aria-label="פתח תפריט"
        >
          {/* אייקון המבורגר פשוט ב-SVG */}
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <ul className="hidden md:flex gap-6 text-sm">
          <li><Link href="/" className="hover:text-primary">בית</Link></li>
          <li><Link href="/about" className="hover:text-primary">אודות</Link></li>
          <li><Link href="/contact" className="btn-primary text-sm">צור קשר</Link></li>
        </ul>
      </nav>

      {/* מובייל */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <ul className="container py-3 flex flex-col gap-2">
            <li><Link href="/" onClick={() => setOpen(false)} className="py-2">בית</Link></li>
            <li><Link href="/about" onClick={() => setOpen(false)} className="py-2">אודות</Link></li>
            <li><Link href="/contact" onClick={() => setOpen(false)} className="py-2">צור קשר</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
