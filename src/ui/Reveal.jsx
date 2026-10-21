import useReveal from "@/hooks/useReveal";

/**
 * Reveal - Declarative component wrapping elements with Webflow's scroll animation.
 * Usage:
 *   <Reveal delay={100}><h1>Title</h1></Reveal>
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 1000,
  distance = 60,
  direction = "bottom",
  as: Component = "div",
  ...props
}) {
  const [ref, , style] = useReveal({ delay, duration, distance, direction });

  return (
    <Component ref={ref} style={style} className={className} {...props}>
      {children}
    </Component>
  );
}
