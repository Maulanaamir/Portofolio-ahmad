import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function NumberTicker({ value, className, delay = 0 }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { delay, duration: 0.5 },
      });
    }
  }, [inView, controls, delay]);

  return (
    <motion.span ref={ref} initial={{ opacity: 0 }} animate={controls} className={className}>
      {value}
    </motion.span>
  );
}
