import React, { useEffect } from "react";
import confetti from "canvas-confetti";

const Success = () => {
  useEffect(() => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        }),
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        }),
      );
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 text-center">
      <div className="z-10 bg-white/90 p-12 rounded-3xl shadow-xl border-4 border-pink-400 max-w-2xl mx-4">
        <h1 className="text-6xl romantic-font text-pink-600 mb-6">
          Yay! I knew it! ❤️
        </h1>
        <p className="text-2xl text-gray-700 mb-8">
          I love you so much Chukki! You've made me the happiest person.
        </p>
        <p className="text-xl text-pink-500 italic">
          Can't wait to celebrate with you!
        </p>
        <div className="mt-10 text-8xl animate-bounce">💑</div>
        <p className="mt-4 text-sm text-gray-400">
          Forever & Always, <br /> Your Valentine Thadis!!
        </p>
      </div>
    </div>
  );
};

export default Success;
