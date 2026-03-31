import { motion } from 'motion/react';
import { Brain, Bell, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI Memory',
    description: 'ADDRAIS remembers your conversations, meetings and important details.',
  },
  {
    icon: Bell,
    title: 'Smart Reminders',
    description: 'Never forget to reconnect with the people that matter.',
  },
  {
    icon: TrendingUp,
    title: 'Relationship Intelligence',
    description: 'Understand your network and grow meaningful connections.',
  },
];

export function Features() {
  return (
    <section className="py-40 bg-gradient-to-b from-white to-gray-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tight">
            Your network — enhanced by AI
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative p-12 bg-gradient-to-br from-white to-gray-50/50 rounded-3xl border border-gray-200/80 hover:border-gray-300 transition-all duration-500 hover:shadow-2xl h-full">
                {/* Icon with metallic effect */}
                <div className="mb-8 inline-flex p-5 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <feature.icon className="w-9 h-9 text-gray-700" strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-semibold text-black mb-5">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}