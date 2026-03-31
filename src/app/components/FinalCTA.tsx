import { motion } from 'motion/react';
import appStoreBadge from 'figma:asset/125019bdb2ac0628bc5619c802dccb3e11c2a70c.png';

export function FinalCTA() {
  return (
    <section className="py-40 bg-gradient-to-b from-white via-gray-50/30 to-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <h2 className="text-6xl lg:text-7xl font-bold text-black leading-tight tracking-tight">
            Your network is your
            <br />
            <span className="bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 bg-clip-text text-transparent">
              most valuable asset.
            </span>
          </h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-14 py-6 bg-black text-white rounded-full font-semibold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
          >
            Download ADDRAIS
          </motion.button>

          {/* App Store Badge */}
          <div className="pt-8">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="inline-block cursor-pointer"
            >
              <img src={appStoreBadge} alt="Download on the App Store" className="h-[112px]" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}