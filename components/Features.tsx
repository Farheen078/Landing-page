import { Zap, BarChart3, RefreshCw, Shield, Users, Globe } from 'lucide-react';

const features = [
  { icon: Zap, title: "Lightning Fast", description: "Process thousands of data points in milliseconds with our optimized engine." },
  { icon: BarChart3, title: "Real-time Analytics", description: "Monitor key metrics and get actionable insights on an interactive dashboard." },
  { icon: RefreshCw, title: "Auto-sync", description: "Seamless integration with your favorite tools. Data stays up-to-date automatically." },
  { icon: Shield, title: "Enterprise Security", description: "Bank-level encryption and compliance with GDPR, SOC2, and HIPAA." },
  { icon: Users, title: "Team Collaboration", description: "Share workflows, assign tasks, and collaborate in real-time with your team." },
  { icon: Globe, title: "Global Infrastructure", description: "Multi-region deployment ensuring 99.99% uptime for users worldwide." },
];

export default function Features() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Powerful features to accelerate growth</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to automate, analyze, and scale your business operations.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}