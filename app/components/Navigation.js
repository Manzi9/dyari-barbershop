export default function Navigation() {
  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Dyari Barbershop</div>
        <div className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
