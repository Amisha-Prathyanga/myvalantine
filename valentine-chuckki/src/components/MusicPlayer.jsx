import React, { useState, useRef, useEffect } from "react";

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = async () => {
    if (error) {
      alert(
        "Music file not found! Please add 'love-story.mp3' to the public folder.",
      );
      return;
    }

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (e) {
        console.error("Audio play failed:", e);
        // If it's a user interaction (click), it shouldn't be blocked, so it might be a source error
        // But let's check readyState
      }
    }
  };

  useEffect(() => {
    // Attempt auto-play
    const handleFirstClick = async () => {
      if (!playing && !error && audioRef.current) {
        try {
          await audioRef.current.play();
          setPlaying(true);
        } catch (e) {
          // Auto-play blocked or source error
          console.log("Auto-play blocked or source error", e);
        }
      }
      document.removeEventListener("click", handleFirstClick);
      document.removeEventListener("keydown", handleFirstClick);
    };

    document.addEventListener("click", handleFirstClick);
    document.addEventListener("keydown", handleFirstClick);

    return () => {
      document.removeEventListener("click", handleFirstClick);
      document.removeEventListener("keydown", handleFirstClick);
    };
  }, [playing, error]);

  const handleError = () => {
    console.log("Audio source error");
    setError(true);
    setPlaying(false);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <audio ref={audioRef} src="/love-story.mp3" loop onError={handleError} />
      <button
        onClick={togglePlay}
        className={`bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all transform hover:scale-110 border-2 ${error ? "border-red-400" : "border-pink-300"} text-2xl`}
        title={error ? "Music file missing" : "Toggle Music"}
      >
        {error ? "⚠️" : playing ? "🔊" : "🔇"}
      </button>
    </div>
  );
};

export default MusicPlayer;
