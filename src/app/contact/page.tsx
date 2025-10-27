"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Frontend only: demonstrate submission
    console.log({ name, email, phone });
    setSent(true);
  }

  return (
    <>
      <Navbar />
      <main className="container py-10">
        <h1 className="text-3xl font-extrabold text-primary-dark">צור קשר</h1>

        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          <div className="card p-6">
            <h2 className="font-bold text-lg">איש קשר</h2>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li><strong>שם:</strong> ליאור מנחם</li>
              <li><strong>מייל:</strong> <a className="text-primary" href="mailto:agent@example.com">agent@example.com</a></li>
              <li><strong>טלפון:</strong> <a className="text-primary" href="tel:0500000000">050-000-0000</a></li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="card p-6">
            <h2 className="font-bold text-lg">השאירו פרטים</h2>
            <div className="mt-4 grid grid-cols-1 gap-4">
              <input
                className="border rounded-xl2 px-3 py-2"
                placeholder="שם מלא"
                aria-label="שם מלא"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
              <input
                className="border rounded-xl2 px-3 py-2"
                type="email"
                placeholder="אימייל"
                aria-label="אימייל"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <input
                className="border rounded-xl2 px-3 py-2"
                type="tel"
                placeholder="טלפון"
                aria-label="טלפון"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
              />
              <button className="btn-primary" type="submit">שליחה</button>
              {sent && <p className="text-green-600 text-sm">תודה! נחזור אליך בהקדם.</p>}
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
