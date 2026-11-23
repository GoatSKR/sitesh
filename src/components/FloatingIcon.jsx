import { useMemo } from "react";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";

const rand = (min, max) => Math.random() * (max - min) + min;

const FloatingIcon = ({
  src,
  Icon,
  color,
  label,
  darkLogo = false,
  className = "",
}) => {
  const controls = useAnimationControls();
  const reduceMotion = useReducedMotion();

  const float = useMemo(
    () => ({
      y: [0, -rand(8, 18), -rand(2, 10), -rand(10, 20), 0],
      x: [0, rand(-6, 6), rand(-6, 6), rand(-6, 6), 0],
      rotate: [0, rand(-5, 5), rand(-5, 5), rand(-5, 5), 0],
      transition: {
        duration: rand(4, 7),
        delay: rand(0, 2),
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
    []
  );

  const jump = () => {
    controls.start({
      y: [0, -50, 0],
      scale: [1, 1.15, 1],
      rotate: [0, rand(-15, 15), 0],
      transition: {
        duration: 0.6,
        times: [0, 0.45, 1],
        ease: ["easeOut", "easeIn"],
      },
    });
  };

  return (
    <motion.div
      className={`absolute ${className}`}
      animate={reduceMotion ? undefined : float}
    >
      <motion.button
        type='button'
        aria-label={label}
        animate={controls}
        onTap={jump}
        className={`select-none cursor-pointer flex items-center justify-center
          w-11 h-11 sm:w-14 sm:h-14 lg:w-[72px] lg:h-[72px]
          rounded-xl sm:rounded-2xl border
          ${
            darkLogo
              ? "bg-[#915EFF]/25 border-[#915EFF]/60 shadow-[0_0_24px_rgba(145,94,255,0.5)]"
              : "bg-[#0d0d24]/80 border-white/10 shadow-[0_0_20px_rgba(145,94,255,0.25)]"
          }
          hover:border-[#915EFF]/70 hover:shadow-[0_0_28px_rgba(145,94,255,0.55)]
          transition-[border-color,box-shadow] duration-300`}
      >
        {src ? (
          <img
            src={src}
            alt=''
            draggable={false}
            className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain pointer-events-none ${
              darkLogo ? "brightness-0 invert" : ""
            }`}
          />
        ) : (
          <Icon
            style={{ color }}
            className='text-[22px] sm:text-[28px] lg:text-[36px]'
          />
        )}
      </motion.button>
    </motion.div>
  );
};

export default FloatingIcon;