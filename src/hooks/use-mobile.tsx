
import * as React from "react"

// Set breakpoints for different device sizes
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1280
};

// Hook for detecting if the current viewport is mobile sized
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < BREAKPOINTS.MOBILE);
    };
    
    // Check on mount
    checkIfMobile();
    
    // Set up listener for window resize
    const mql = window.matchMedia(`(max-width: ${BREAKPOINTS.MOBILE - 1}px)`);
    
    // Modern approach using addEventListener
    mql.addEventListener("change", checkIfMobile);
    
    // Cleanup function
    return () => mql.removeEventListener("change", checkIfMobile);
  }, []);

  return !!isMobile;
}

// Hook for detecting tablet sized viewports
export function useIsTablet() {
  const [isTablet, setIsTablet] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const checkIfTablet = () => {
      const width = window.innerWidth;
      setIsTablet(width >= BREAKPOINTS.MOBILE && width < BREAKPOINTS.DESKTOP);
    };
    
    // Check on mount
    checkIfTablet();
    
    // Set up listener for window resize
    window.addEventListener("resize", checkIfTablet);
    
    // Cleanup function
    return () => window.removeEventListener("resize", checkIfTablet);
  }, []);

  return !!isTablet;
}

// Hook for getting the current device type
export function useDeviceType() {
  const [deviceType, setDeviceType] = React.useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  React.useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      if (width < BREAKPOINTS.MOBILE) {
        setDeviceType('mobile');
      } else if (width < BREAKPOINTS.DESKTOP) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };
    
    // Check on mount
    checkDeviceType();
    
    // Set up listener for window resize
    window.addEventListener("resize", checkDeviceType);
    
    // Cleanup function
    return () => window.removeEventListener("resize", checkDeviceType);
  }, []);

  return deviceType;
}
