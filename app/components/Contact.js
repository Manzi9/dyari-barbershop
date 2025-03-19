import InstagramIcon from "./icons/InstagramIcon";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-700">
          Contact Us
        </h2>
        <div className="flex flex-col md:flex-row justify-around gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <p className="flex items-center gap-2 text-gray-700">
                <span className="text-xl">📍</span>
                122 High St, New Malden KT3 4EP
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <span className="text-xl">📞</span>
                <a
                  href="tel:07377934821"
                  className="hover:text-gray-900 transition-colors"
                >
                  07377 934 821
                </a>
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <InstagramIcon className="w-6 h-6" />
                <a
                  href="https://www.instagram.com/dyari.barbershop/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 transition-colors"
                >
                  @dyari.barbershop
                </a>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">
              Business Hours
            </h3>
            <div className="space-y-2">
              <p className="text-gray-700">
                Monday - Saturday: 9:00 AM - 7:00 PM
              </p>
              <p className="text-gray-700">Sunday: 10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
