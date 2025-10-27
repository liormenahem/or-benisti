import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="container py-10">
        <h1 className="text-3xl font-extrabold text-primary-dark">אודות</h1>
        <p className="mt-4 text-gray-700 leading-8">
          אני סוכן נדל״ן המתמחה במכירה, קנייה והשכרה של דירות ובתים פרטיים באשדוד והסביבה.
          עם היכרות מעמיקה של השוק המקומי, ליווי אישי ושיווק חכם, אעזור לכם לבצע עסקה בטוחה ומשתלמת.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <div className="card p-5">
            <h3 className="font-bold text-primary-dark">החזון</h3>
            <p className="mt-2 text-sm text-gray-600">להעניק חוויית שירות שקופה, מקצועית ואנושית.</p>
          </div>
          <div className="card p-5">
            <h3 className="font-bold text-primary-dark">למי אני מתאים?</h3>
            <p className="mt-2 text-sm text-gray-600">מוכרים, קונים ושוכרים המבקשים תהליך ברור ובטוח.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
