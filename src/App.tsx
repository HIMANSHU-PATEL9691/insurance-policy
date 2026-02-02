import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import CarInsurance from "./pages/CarInsurance";
import BikeInsurance from "./pages/BikeInsurance";
import Calculator from "./pages/Calculator";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Scroll To Top
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Scroll on route change */}
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/car-insurance" element={<CarInsurance />} />
          <Route path="/bike-insurance" element={<BikeInsurance />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Catch all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
