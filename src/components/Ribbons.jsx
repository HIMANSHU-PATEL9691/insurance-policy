import { useEffect, useRef } from "react";

export default function Ribbons({
  baseThickness = 30,
  colors = ["#5227FF"],
  speedMultiplier = 0.5,
  maxAge = 500,
  enableFade = false,
  enableShaderEffect = false,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    let t = 0;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.lineWidth = baseThickness;
      ctx.strokeStyle = colors[0];

      ctx.beginPath();
      for (let x = 0; x < width; x += 20) {
        const y = height / 2 + Math.sin((x + t) * 0.01) * 80;
        ctx.lineTo(x, y);
      }
      ctx.stroke();

      t += speedMultiplier * 10;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [baseThickness, colors, speedMultiplier]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}
