import { motion } from 'motion/react';
import logo from 'figma:asset/0efd2d40f21db0d1a6749edd4cd1292585bd7827.png';

export function ChromeLogo() {
  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-200/40 to-transparent blur-3xl" />
      
      {/* Main logo container */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotateY: [0, 5, 0],
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative w-96 h-96 flex items-center justify-center"
      >
        <img 
          src={logo} 
          alt="ADDRAIS Logo" 
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </motion.div>
    </div>
  );
}