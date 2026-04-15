import { useEffect, useState } from "react";

export const Meteors = ({ number = 20 }) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    const styles = Array.from({ length: number }, () => ({
      left: `${Math.floor(Math.random() * 100)}%`,
      top: `${Math.floor(Math.random() * 50)}%`,
      animationDelay: `${Math.random() * 4}s`,
      animationDuration: `${Math.floor(Math.random() * 6) + 4}s`,
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className="meteor-animation"
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            borderRadius: "9999px",
            backgroundColor: "#71717a",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.06)",
            opacity: 0,
            pointerEvents: "none",
            ...style,
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%) rotate(-45deg)",
              width: "60px",
              height: "1px",
              background: "linear-gradient(to right, #52525b, transparent)",
            }}
          />
        </span>
      ))}
    </>
  );
};
