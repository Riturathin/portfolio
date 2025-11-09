import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "../assets/styles/tagline.css";

export default function Tagline({ text = "Tagline.", delay = 1500, speed = 50 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    // Delay typing until previous animation completes
    const startDelay = setTimeout(() => setStartTyping(true), delay);
    return () => clearTimeout(startDelay);
  }, [delay]);

  useEffect(() => {
    if (!startTyping) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [startTyping, text, speed]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: startTyping ? 1 : 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="text-xl sm:text-2xl text-gray-300 font-light mt-6 text-center tagline-glow"
    >
      {displayedText}
      <span className="text-blue-500 animate-pulse">|</span>
    </motion.p>
  );
}
