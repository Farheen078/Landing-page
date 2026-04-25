const pricingPlans = [
  { name: "Basic", price: "$19", description: "Perfect for small teams just getting started.", features: ["Up to 5 team members", "10 GB storage", "Basic analytics", "Email support", "API access"], cta: "Get Started", popular: false },
  { name: "Pro", price: "$49", description: "For growing teams needing advanced features.", features: ["Up to 20 team members", "100 GB storage", "Advanced analytics & reports", "Priority support", "Custom integrations"], cta: "Get Started", popular: true },
  { name: "Enterprise", price: "$99", description: "For large organizations with custom needs.", features: ["Unlimited team members", "1 TB storage", "Real-time AI insights", "24/7 dedicated support", "SLA guarantee"], cta: "Contact Sales", popular: false },
];

export default function Pricing() {
  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">Choose the plan that fits your needs. All plans include a 14-day free trial.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, idx) => (
            <div key={idx} className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col ${plan.popular ? "bg-indigo-600 text-white shadow-xl ring-2 ring-indigo-400" : "bg-white border border-gray-200 shadow-md"}`}>
              {plan.popular && <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">Most Popular</div>}
              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>
              <div className="flex items-baseline gap-1 mt-2"><span className={`text-5xl font-extrabold ${plan.popular ? "text-white" : "text-gray-900"}`}>{plan.price}</span><span className={plan.popular ? "text-indigo-100" : "text-gray-500"}>/month</span></div>
              <p className={`mt-4 text-sm ${plan.popular ? "text-indigo-100" : "text-gray-500"}`}>{plan.description}</p>
              <hr className={`my-6 ${plan.popular ? "border-indigo-400" : "border-gray-200"}`} />
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className={`w-5 h-5 ${plan.popular ? "text-indigo-200" : "text-indigo-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className={plan.popular ? "text-indigo-50" : "text-gray-600"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 ${plan.popular ? "bg-white text-indigo-700 hover:bg-indigo-50 shadow-md" : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md"}`}>{plan.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}