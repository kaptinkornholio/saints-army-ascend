
import { Suspense, useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ParticleBackground from "./components/ParticleBackground";

const queryClient = new QueryClient();

// Enhanced loading animation component
const LoadingScreen = () => (
  <div className="fixed inset-0 bg-saints-dark flex items-center justify-center z-50">
    <div className="relative">
      <div className="w-24 h-24 rounded-full border-4 border-saints-purple/30 border-t-saints-gold animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-saints-gold font-orbitron text-lg animate-pulse">SAINTS</span>
      </div>
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
        <span className="text-white/70 font-orbitron text-sm animate-pulse">Loading Experience...</span>
      </div>
      
      {/* Add loading particles */}
      {[...Array(5)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-2 h-2 bg-saints-gold rounded-full"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 10px #FFD700, 0 0 20px #FFD700',
            animation: `spin-around ${2 + i * 0.5}s linear infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        ></div>
      ))}
    </div>
  </div>
);

// Enhanced page transition wrapper
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const AppRoutes = () => {
  return (
    <PageTransition>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time for an impressive entry
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {loading ? (
          <LoadingScreen />
        ) : (
          <BrowserRouter>
            <ParticleBackground />
            <AppRoutes />
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
