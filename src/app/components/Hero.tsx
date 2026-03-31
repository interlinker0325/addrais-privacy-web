import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { ChromeLogo } from './ChromeLogo';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8 text-center lg:text-left"
        >
          <div className="space-y-6">
            <h1 className="text-6xl lg:text-7xl font-bold tracking-tight text-black leading-[1.1]">
              Your network.
              <br />
              <span className="bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 bg-clip-text text-transparent">
                Organized by AI.
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl leading-relaxed">
              The AI layer that understands your relationships, remembers every interaction and helps you build stronger connections.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-black text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get ADDRAIS
            </motion.button>
          </div>
        </motion.div>

        {/* Right visual - Chrome logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="flex items-center justify-center"
        >
          <ChromeLogo />
        </motion.div>
      </div>
    </section>
  );
}