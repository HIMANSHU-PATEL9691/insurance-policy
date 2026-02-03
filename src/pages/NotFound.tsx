import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import FuzzyText from "@/components/FuzzyText"; // adjust path if needed

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <div className="text-center">
        
       <FuzzyText
  baseIntensity={0.2}
  hoverIntensity={0.5}
  enableHover
  color="#dc2626"   // 🔴 RED COLOR (Tailwind text-red-600)
  fontSize="10rem"
  fontWeight={900}
>
  404
</FuzzyText>



        <p className="mt-6 mb-6 text-xl text-muted-foreground">
          Oops! Page not found
        </p>

        <Link
          to="/"
          className="inline-block rounded-lg bg-primary px-6 py-3 text-white transition hover:bg-primary/90"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
