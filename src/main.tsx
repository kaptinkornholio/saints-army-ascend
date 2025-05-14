
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Set proper viewport meta tag for mobile devices
const setViewport = () => {
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0');
  } else {
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0';
    document.head.appendChild(meta);
  }
};

// Execute viewport setting
setViewport();

// Mount app
createRoot(document.getElementById("root")!).render(<App />);
