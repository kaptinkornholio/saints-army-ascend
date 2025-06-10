
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Collection from './pages/Collection';
import CollectionSelector from './pages/CollectionSelector';
import DarkSaints from './pages/DarkSaints';
import LightSaints from './pages/LightSaints';
import Roadmap from './pages/Roadmap';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import { Toaster } from "@/components/ui/sonner";
import { useComingSoonModal } from "@/hooks/use-coming-soon-modal";

function App() {
  const { ComingSoonModal } = useComingSoonModal();

  return (
    <Router>
      <div className="min-h-screen bg-saints-dark w-full">
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/collection/selector" element={<CollectionSelector />} />
          <Route path="/collection/dark" element={<DarkSaints />} />
          <Route path="/collection/light" element={<LightSaints />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ComingSoonModal />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
