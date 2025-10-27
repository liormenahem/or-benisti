export default function Hero() {
  return (
    <section
      className="relative h-[52vh] min-h-[380px] w-full bg-center bg-cover"
      style={{ backgroundImage: "url('/hero.jpg')" }}
      aria-label="תמונת רקע"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
      <div className="container relative h-full flex flex-col items-start justify-center text-white">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
          למצוא את הבית הבא שלך באשדוד והסביבה
        </h1>
        <p className="mt-3 text-base sm:text-lg text-white/90 max-w-2xl">
          מכירה • קנייה • השכרה של דירות ובתים פרטיים באשדוד, יבנה, גן יבנה, גדרה, אשקלון והאזור.
        </p>
        <a href="/contact" className="btn-primary mt-4">צור קשר</a>
      </div>
    </section>
  );
}
