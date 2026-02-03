import { motion } from "framer-motion";
import { useState } from "react";

interface ShinyTextProps {
  text: string;
  speed?: number;
  delay?: number;
  color?: string;
  shineColor?: string;
  spread?: number;
  direction?: "left" | "right";
  yoyo?: boolean;
  pauseOnHover?: boolean;
  disabled?: boolean;
}

const ShinyText = ({
  text,
  speed = 2,
  delay = 0,
  color = "#1f2937",
  shineColor = "#ffffff",
  spread = 120,
  direction = "left",
  yoyo = false,
  pauseOnHover = false,
  disabled = false,
}: ShinyTextProps) => {
  const [paused, setPaused] = useState(false);

  // If disabled → normal text
  if (disabled) {
    return <span style={{ color }}>{text}</span>;
  }

  return (
    <motion.span
      className="relative inline-block font-inherit"
      style={{
        backgroundImage: `linear-gradient(
          ${direction === "left" ? "90deg" : "-90deg"},
          ${color},
          ${shineColor},
          ${color}
        )`,
        backgroundSize: `${spread}% 100%`,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent", // ✅ ONLY ONCE
      }}
      animate={
        paused
          ? {}
          : {
              backgroundPositionX: ["0%", "100%"],
            }
      }
      transition={{
        duration: speed,
        repeat: yoyo ? Infinity : Infinity,
        ease: "linear",
        delay,
      }}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      {text}
    </motion.span>
  );
};

export default ShinyText;
