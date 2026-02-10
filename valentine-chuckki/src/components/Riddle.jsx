import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Reliable Bubu Dudu GIFs (using Tenor links, verify if they work or replace)
const BUBU_HAPPY =
  "https://media.tenor.com/On7kB9aq8jQAAAAi/bubu-dudu-love.gif";
const BUBU_ANGRY =
  "https://media.tenor.com/YaT1i5R4q58AAAAi/bubu-dudu-angry.gif";

const Riddle = ({ onUnlock }) => {
  const [step, setStep] = useState(0); // 0: Nickname, 1: Date
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState({
    type: null,
    message: "",
    image: null,
  }); // type: 'success' | 'error' | null

  // Reset feedback when typing
  useEffect(() => {
    if (feedback.type) {
      setFeedback({ type: null, message: "", image: null });
    }
  }, [answer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanAnswer = answer.trim().toLowerCase();

    // Logic for Step 0: Nickname
    if (step === 0) {
      if (cleanAnswer === "chukki" || cleanAnswer === "batta") {
        showFeedback("success", "Good job bubu! Correct! ❤️", BUBU_HAPPY);
        setTimeout(() => {
          setStep(1);
          setAnswer("");
          setFeedback({ type: null, message: "", image: null });
        }, 2000);
      } else {
        showFeedback("error", "Nooo! Try again! 😢", BUBU_ANGRY);
      }
    }
    // Logic for Step 1: Date
    else if (step === 1) {
      // Allow various date formats: YYYY-MM-DD, YYYY/MM/DD, or DD/MM/YYYY if unambiguous, but sticking to YYYY-MM-DD as per strict instructions is safer,
      // but user might type 2025/05/04.
      if (
        cleanAnswer === "2025-05-04" ||
        cleanAnswer === "2025/05/04" ||
        cleanAnswer === "2025.05.04"
      ) {
        showFeedback("success", "Yaaaaay! You remembered! 🎉", BUBU_HAPPY);
        setTimeout(() => {
          onUnlock();
        }, 2000);
      } else {
        showFeedback("error", "Wrong date! Think harder! 📅", BUBU_ANGRY);
      }
    }
  };

  const showFeedback = (type, message, image) => {
    setFeedback({ type, message, image });
    // Option: Auto-clear error after 2 seconds? No, keep it until they type again.
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4 transition-colors duration-500">
      <AnimatePresence mode="wait">
        <motion.div
          key={step} // Animate when step changes
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border-4 border-pink-300"
        >
          <h1 className="text-4xl romantic-font text-pink-600 mb-6">
            {step === 0
              ? "Love Verification: Step 1"
              : "Love Verification: Step 2"}
          </h1>

          <div className="mb-6">
            {/* Show Feedback Image or Default Icon */}
            {feedback.image ? (
              <img
                src={feedback.image}
                alt="Reaction"
                className="w-40 h-40 mx-auto rounded-lg object-cover mb-4 animate-bounce"
              />
            ) : (
              <div className="text-6xl mb-4 animate-pulse">
                {step === 0 ? "🐻" : "📅"}
              </div>
            )}

            <p className="text-gray-600 text-lg font-semibold">
              {step === 0
                ? "What is the cute nickname I call you?"
                : "When did I first say 'I love you'?"}
            </p>
            {step === 1 && (
              <p className="text-xs text-pink-400 mt-1">(Format: YYYY-MM-DD)</p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.input
              animate={
                feedback.type === "error" ? { x: [-10, 10, -10, 10, 0] } : {}
              }
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Your Answer..."
              className={`w-full p-3 border-2 rounded-lg text-center text-lg outline-none transition-colors ${
                feedback.type === "error"
                  ? "border-red-500 bg-red-50"
                  : feedback.type === "success"
                    ? "border-green-500 bg-green-50"
                    : "border-pink-300 focus:border-pink-500"
              }`}
            />

            {feedback.message && (
              <p
                className={`text-lg font-bold ${feedback.type === "error" ? "text-red-500" : "text-green-500"}`}
              >
                {feedback.message}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
            >
              {step === 0 ? "Next ❤️" : "Unlock My Heart 🔓"}
            </button>
          </form>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Riddle;
