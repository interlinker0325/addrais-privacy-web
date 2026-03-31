import { motion } from 'motion/react';
import { Download, Sparkles, Heart } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: Download,
    title: 'Import your contacts',
    description: 'Seamlessly sync from your existing contact sources',
  },
  {
    number: '2',
    icon: Sparkles,
    title: 'Let AI organize your network',
    description: 'Our AI automatically categorizes and enriches your contacts',
  },
  {
    number: '3',
    icon: Heart,
    title: 'Build stronger relationships',
    description: 'Stay connected effortlessly with intelligent insights',
  },
];

export function HowItWorks() {
  return (
    <section className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tight">
            Simple. Powerful.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-20 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-gray-300 to-transparent" />
              )}

              {/* Number badge */}
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-4xl font-bold text-gray-700">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Icon */}
              <div className="mb-8 p-5 bg-white rounded-2xl shadow-lg border border-gray-100">
                <step.icon className="w-12 h-12 text-gray-700" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-black mb-5">
                {step.title}
              </h3>
              
              <p className="text-gray-600 text-lg leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}