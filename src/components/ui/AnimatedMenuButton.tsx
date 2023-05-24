import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

const AnimatedMenuButton: React.FC<Props> = ({ isOpen, onClick }) => {
  return (
    <button onClick={onClick} className="relative z-50 h-6 w-10">
      <AnimatePresence>
        {!isOpen && (
          <motion.svg
            key="hamburger"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            viewBox="0 0 24 24"
            className="absolute left-0 top-0"
          >
            {/* Hamburger icon */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </motion.svg>
        )}

        {isOpen && (
          <motion.svg
            key="cross"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            viewBox="0 0 24 24"
            className="absolute left-0 top-0"
          >
            {/* Cross icon */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  );
};

export default AnimatedMenuButton;
