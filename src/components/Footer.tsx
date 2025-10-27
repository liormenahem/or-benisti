export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100">
      <div className="container py-6 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} כל הזכויות שמורות • נדל״ן אשדוד+</p>
        <p className="text-gray-500">עוצב ובנוי ב-Next.js + Tailwind</p>
      </div>
    </footer>
  );
}
