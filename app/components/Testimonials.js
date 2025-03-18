const testimonials = [
  {
    name: "Aaron McMordie",
    text: "Great service and attention to detail from Diyari. It was my first time visiting this shop and all the care was taken to make sure that I was comfortable, and to listen to my needs and make sure I get the perfect haircut!! Would highly recommend. Great value for money",
    rating: 5,
  },
  {
    name: "Stephen Michael",
    text: "This is the best barbers in New Malden! The barbers are very friendly and always make sure they cut exactly how you like. They go above and beyond with eyebrow and nose hair trimming, face wash and moisturiser. 11/10",
    rating: 5,
  },
  {
    name: "Dan S",
    text: "I've been coming here for over a year since moving to the area. The best haircut I've ever had. Excellent service and attention to detail. Highly recommended!",
    rating: 5,
  },
  {
    name: "Marcus Procter",
    text: "I've been coming here for over a year since moving to the area. The best haircut I've ever had. Excellent service and attention to detail. Highly recommended!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-700">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-6 bg-white rounded-lg shadow"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-700">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
