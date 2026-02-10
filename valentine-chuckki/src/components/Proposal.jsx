import React, { useState } from "react";
import { motion } from "framer-motion";

const Proposal = ({ onYes }) => {
  const [noBtnPos, setNoBtnPos] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    // Generate random position within a reasonable range
    // Using viewport calculations or just random offsets
    // Let's use random offsets relative to current or container to keep it accessible but elusive
    // Let's use random offsets relative to current or container to keep it accessible but elusive

    // For more chaotic movement: large window range
    const windowX = (Math.random() - 0.5) * 500;
    const windowY = (Math.random() - 0.5) * 500;

    setNoBtnPos({ x: windowX, y: windowY });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 overflow-hidden relative">
      <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl text-center z-10 border-2 border-pink-200">
        <h1 className="text-5xl md:text-7xl romantic-font text-pink-600 mb-8 animate-pulse">
          Chukki, will you be my Valentine? 🌹
        </h1>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mt-12 relative h-32">
          <button
            onClick={onYes}
            className="bg-green-500 hover:bg-green-600 text-white text-3xl font-bold py-4 px-12 rounded-full shadow-lg transform transition hover:scale-125 z-20"
          >
            YES! 😍
          </button>

          <motion.div
            animate={{ x: noBtnPos.x, y: noBtnPos.y }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="absolute md:relative" // Absolute to allow free movement if needed
          >
            <button
              onMouseEnter={moveButton}
              onClick={moveButton} // Just in case mobile user taps it
              className="bg-gray-400 text-white text-xl font-bold py-2 px-8 rounded-full shadow-md cursor-pointer"
              style={{ position: "relative" }} // Ensure motion div handles the position
            >
              No 😢
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Hearts */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce">
        💖
      </div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-bounce delay-700">
        💘
      </div>
    </div>
  );
};

export default Proposal;
