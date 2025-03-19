import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center"
    >
      <Image
        src="/images/barbershop-chairs.png"
        alt="Barbershop interior with classic chairs"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
          Dyari&apos;s Barbershop
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white">
          The best fade in South West London
        </p>
      </div>
    </section>
  );
}
