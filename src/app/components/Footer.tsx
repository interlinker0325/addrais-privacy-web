import logo from 'figma:asset/0efd2d40f21db0d1a6749edd4cd1292585bd7827.png';
import { X, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <motion.div
              animate={{ 
                rotateY: [0, 360],
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <img 
                src={logo} 
                alt="ADDRAIS Logo" 
                className="w-32 h-32 object-contain drop-shadow-lg"
              />
            </motion.div>
            <span className="text-2xl font-bold text-black tracking-tight">
              ADDRAIS
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-10">
            <Link 
              to="/privacy-policy" 
              className="text-gray-600 hover:text-black transition-colors duration-200 font-medium text-lg"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-of-use" 
              className="text-gray-600 hover:text-black transition-colors duration-200 font-medium text-lg"
            >
              Terms of Use
            </Link>
            <a 
              href="mailto:tech@addrais.ai" 
              className="text-gray-600 hover:text-black transition-colors duration-200 font-medium text-lg"
            >
              Contact
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://x.com/addrais" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-11 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-700" />
            </a>
            <a 
              href="https://www.instagram.com/addrais?igsh=NXd0NWoyd29id2hj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-11 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <Instagram className="w-5 h-5 text-gray-700" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          © 2026 ADDRAIS. All rights reserved.
        </div>

        {/* Apple Trademark Notice */}
        <div className="text-center text-xs text-gray-400 mt-6 max-w-3xl mx-auto">
          Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc.
        </div>
      </div>
    </footer>
  );
}