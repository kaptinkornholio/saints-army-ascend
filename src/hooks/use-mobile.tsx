
import * as React from "react"

// Set breakpoints for different device sizes
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1280
};

// Hook for detecting if the current viewport is mobile sized
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < BREAKPOINTS.MOBILE);
    };
    
    // Check on mount
    checkIfMobile();
    
    // Set up listener for window resize
    window.addEventListener("resize", checkIfMobile);
    
    // Also listen to orientation changes which is important for mobile
    window.addEventListener("orientationchange", checkIfMobile);
    
    // Cleanup function
    return () => {
      window.removeEventListener("resize", checkIfMobile);
      window.removeEventListener("orientationchange", checkIfMobile);
    };
  }, []);

  return isMobile;
}

// Hook for detecting tablet sized viewports
export function useIsTablet() {
  const [isTablet, setIsTablet] = React.useState<boolean>(false);

  React.useEffect(() => {
    const checkIfTablet = () => {
      const width = window.innerWidth;
      setIsTablet(width >= BREAKPOINTS.MOBILE && width < BREAKPOINTS.DESKTOP);
    };
    
    // Check on mount
    checkIfTablet();
    
    // Set up listener for window resize
    window.addEventListener("resize", checkIfTablet);
    
    // Also listen to orientation changes
    window.addEventListener("orientationchange", checkIfTablet);
    
    // Cleanup function
    return () => {
      window.removeEventListener("resize", checkIfTablet);
      window.removeEventListener("orientationchange", checkIfTablet);
    };
  }, []);

  return isTablet;
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
    
    // Also listen to orientation changes
    window.addEventListener("orientationchange", checkDeviceType);
    
    // Cleanup function
    return () => {
      window.removeEventListener("resize", checkDeviceType);
      window.removeEventListener("orientationchange", checkDeviceType);
    };
  }, []);

  return deviceType;
}
