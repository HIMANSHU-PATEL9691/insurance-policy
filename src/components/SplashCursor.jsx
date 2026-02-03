import { useEffect, useRef } from "react";

const SplashCursor = ({
  color = "#5227FF",
  radius = 55,
  alpha = 0.6,
  trailing = 20,
}) => {
  const canvasRef = useRef(null);
  const points = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      points.current.push({
        x: e.clientX,
        y: e.clientY,
        life: trailing,
      });
    };

    window.addEventListener("mousemove", onMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      points.current.forEach((p, i) => {
        p.life -= 1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * (p.life / trailing), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${hexToRgb(color)}, ${alpha *
          (p.life / trailing)})`;
        ctx.fill();
      });

      points.current = points.current.filter((p) => p.life > 0);
      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, [color, radius, alpha, trailing]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
    />
  );
};

function hexToRgb(hex) {
  const bigint = parseInt(hex.replace("#", ""), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}

export default SplashCursor;
