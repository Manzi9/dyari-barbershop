import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center"
    >
      <Image
        src="/hero-bg.jpg"
        alt="Barbershop interior"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
          Dyari Barbershop
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white">
          Where Style Meets Precision
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors">
          Book Appointment
        </button>
      </div>
    </section>
  );
}
