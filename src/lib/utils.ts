
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper to check if the device is a touch device
export function isTouchDevice() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    // @ts-ignore
    (navigator.msMaxTouchPoints > 0)
  )
}

// Helper to get viewport dimensions
export function getViewportDimensions() {
  return {
    width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
    height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  }
}

// Helper to lock body scroll (useful for modals)
export function lockBodyScroll(lock: boolean) {
  if (lock) {
    document.body.style.overflow = 'hidden'
    document.body.style.touchAction = 'none'
  } else {
    document.body.style.overflow = ''
    document.body.style.touchAction = ''
  }
}

// Helper to scroll to element
export function scrollToElement(elementId: string, offset: number = 0) {
  const element = document.getElementById(elementId)
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

// Format large numbers with commas
export function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

// Safely add event listener that can be easily removed
export function safeAddEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void
): () => void {
  window.addEventListener(eventName, handler)
  return () => window.removeEventListener(eventName, handler)
}
