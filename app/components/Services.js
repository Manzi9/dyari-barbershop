const services = [
  {
    name: "Gents Haircut",
    price: "£16",
  },
  {
    name: "Senior Citizen",
    price: "£12",
  },
  {
    name: "Kids Haircut (under 12)",
    price: "£14",
  },
  {
    name: "Skin Fade (Zero Fade)",
    price: "£18",
  },
  {
    name: "One Grade All Over",
    price: "£12",
  },
  {
    name: "Scissor Cut (Long hair)",
    price: "£21",
  },
  {
    name: "Haircut & Beard Trim",
    price: "£25",
  },
  {
    name: "Skin Fade & Beard Trim",
    price: "£28",
  },
  {
    name: "Beard Trim & Shape",
    price: "£10",
  },
  {
    name: "Beard Trim Only",
    price: "£7",
  },
  {
    name: "Beard Shape Up Only",
    price: "£16",
  },
  {
    name: "Hot Towel Shave",
    price: "£16",
  },
  {
    name: "Threading",
    price: "£7",
  },
  {
    name: "Nose Wax",
    price: "£3",
  },
  {
    name: "Nose & Ear Wax",
    price: "£6",
  },
  {
    name: "FULL SERVICE",
    price: "£35",
    description: "Any Haircut - Wash & Dry\nWax - Beard Trim",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-700">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-20">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex justify-between items-start py-2 border-b border-gray-200"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-700">
                  {service.name}
                </h3>
                {service.description && (
                  <div className="mt-1 space-y-1">
                    {service.description.split("\n").map((line, index) => (
                      <p key={index} className="text-gray-600 text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                )}
              </div>
              <span className="text-xl font-semibold text-gray-700">
                {service.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
