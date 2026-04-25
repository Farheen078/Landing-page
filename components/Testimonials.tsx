const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechFlow",
    quote: "SaaSify has revolutionized how our team handles data. We've cut reporting time by 70% and the analytics are incredibly intuitive.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Michael Chen",
    role: "Product Manager at InnovateHub",
    quote: "The automation features saved us hundreds of hours. The support team is fantastic and the UI is a pleasure to work with.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "CEO of CreativEdge",
    quote: "Best investment we made this year. Our team productivity increased by 50% within the first month. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Loved by teams worldwide</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">See what our customers are saying about their experience with SaaSify.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <img src={item.avatar} alt={item.name} className="w-14 h-14 rounded-full object-cover ring-4 ring-indigo-50" />
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-indigo-600">{item.role}</p>
                </div>
              </div>
              <div className="mb-4 flex text-yellow-400">{"★".repeat(5)}</div>
              {/* Fixed line below: removed the double quotes around the curly brace */}
              <p className="text-gray-600 leading-relaxed italic">“{item.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}