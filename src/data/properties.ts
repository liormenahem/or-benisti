export type Property = {
  id: number;
  title: string;
  city: "אשדוד" | "יבנה" | "גן יבנה" | "גדרה" | "אשקלון";
  type: "דירה" | "בית פרטי" | "דופלקס" | "פנטהאוז";
  deal: "מכירה" | "השכרה";
  price: number;
  image: string;
  description: string;
};

const properties: Property[] = [
  {
    id: 1,
    title: "דירת 4 חדרים משופצת",
    city: "אשדוד",
    type: "דירה",
    deal: "מכירה",
    price: 1750000,
    image: "/props/p1.jpg",
    description: "מיקום מרכזי, קרוב לים ולמרכזי קניות. בניין מטופח ומעלית."
  },
  {
    id: 2,
    title: "בית פרטי עם גינה רחבה",
    city: "גן יבנה",
    type: "בית פרטי",
    deal: "מכירה",
    price: 3350000,
    image: "/props/p2.jpg",
    description: "בית מואר, חלונות גדולים, חניה כפולה ושכונה שקטה."
  },
  {
    id: 3,
    title: "דירת 3 חדרים להשכרה",
    city: "אשקלון",
    type: "דירה",
    deal: "השכרה",
    price: 4300,
    image: "/props/p3.jpg",
    description: "קרבה לרכבת, מרפסת שמש, בניין חדש ומטופח."
  },
  {
    id: 4,
    title: "פנטהאוז יוקרתי עם נוף לים",
    city: "אשדוד",
    type: "פנטהאוז",
    deal: "מכירה",
    price: 4950000,
    image: "/props/p4.jpg",
    description: "מרפסת ענקית, מטבח פרימיום, חניה פרטית ומחסן."
  },
  {
    id: 5,
    title: "דופלקס מודרני",
    city: "יבנה",
    type: "דופלקס",
    deal: "השכרה",
    price: 6900,
    image: "/props/p5.jpg",
    description: "שכונה חדשה, פארק ירוק בקרבת הבית, כניסה מיידית."
  },
  {
    id: 6,
    title: "בית פרטי קלאסי",
    city: "גדרה",
    type: "בית פרטי",
    deal: "מכירה",
    price: 2980000,
    image: "/props/p6.jpg",
    description: "מגרש גדול, חדרי שינה מרווחים, פוטנציאל הרחבה."
  },
];

export default properties;
