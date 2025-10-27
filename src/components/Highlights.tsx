const items = [
  { title: "ליווי אישי ומקצועי", text: "שקיפות מלאה וחוויית שירות ללא פשרות." },
  { title: "התמחות מקומית", text: "מומחיות בערים: אשדוד, יבנה, גן יבנה, גדרה, אשקלון." },
  { title: "שיווק חכם", text: "צילום איכותי, קידום וחשיפה מקסימלית לנכס שלך." },
  { title: "איתור מדויק", text: "סינון חכם והתאמה לצרכים ולתקציב שלך." },
];

export default function Highlights() {
  return (
    <section className="container -mt-10 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it, i) => (
          <div key={i} className="card p-5">
            <h3 className="font-bold text-primary-dark">{it.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
