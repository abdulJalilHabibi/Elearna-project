import { useEffect, useRef, useState } from "react";

/**
 * useReveal - Replicates Webflow's IX2 preset slideInBottom / fadeIn animations.
 * Webflow specs:
 *   - Initial state: opacity: 0, transform: translateY(100px)
 *   - Animate in: opacity: 1, transform: translateY(0px)
 *   - Duration: 1000ms (1s)
 *   - Easing: outQuart (cubic-bezier(0.165, 0.84, 0.44, 1))
 *   - Scroll trigger threshold: 10% into view (0.1)
 */
export default function useReveal({
  delay = 0,
  duration = 1000,
  distance = 60,
  threshold = 0.1,
  once = true,
  direction = "bottom", // "bottom", "top", "left", "right", "none" (fade only)
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  // Compute transform based on direction
  let initialTransform = "";
  if (direction === "bottom") initialTransform = `translate3d(0, ${distance}px, 0)`;
  else if (direction === "top") initialTransform = `translate3d(0, -${distance}px, 0)`;
  else if (direction === "left") initialTransform = `translate3d(-${distance}px, 0, 0)`;
  else if (direction === "right") initialTransform = `translate3d(${distance}px, 0, 0)`;

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate3d(0, 0, 0)" : initialTransform,
    transition: `opacity ${duration}ms cubic-bezier(0.165, 0.84, 0.44, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.165, 0.84, 0.44, 1) ${delay}ms`,
    willChange: "opacity, transform",
  };

  return [ref, isVisible, style];
}
