
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const MicroInteractions: React.FC = () => {
  // Apply enhanced styling to all button and link elements
  useEffect(() => {
    // Enhanced buttons
    const applyButtonEffects = () => {
      const buttons = document.querySelectorAll('button:not(.micro-enhanced)');
      
      buttons.forEach(button => {
        if (!button.classList.contains('micro-enhanced')) {
          button.classList.add('micro-enhanced');
          
          // Add hover sound effect
          button.addEventListener('mouseenter', () => {
            const audio = new Audio();
            audio.src = 'data:audio/mp3;base64,SUQzAwAAAAAAJlRQRTEAAAAcAAAAU291bmRKYXkuY29tIFNvdW5kIEVmZmVjdHMA//uSwAAAAAAAAAAAAAAAAAAAAAABQCQCgBwC4EBAEAgCAIAgBQBQEABwDAFc8LlrLAwJAISATAQqDIOMCAIAzMEvGfURJ3MRuDl5lcWpnlotMQ1TQljR6RQjA9KFGZTLgNRNx+KZKM5J8v/3P/43v+6f9S7rz/f//qf/8eVyajkngcYHYFAAeBxg0gA8DjAXARwGMCQGXCxhQBDx4YsgUcTmGQnZi2AoYHAsGAgCz48YdilmpIpxiiBgYBgBGAQAB89//////5Z9/pZmcizmf9AGv+r5////////lcxoelMy8fFxiGDKYFIHmBIAGAAMAIFmCYLGB4Kjig1lAUMKQCjAgAkwHAFDYBACYAgAmAoAYuLzFpeLAlxdwUAAMAgATAEAEwCAA0D////////UhwOikOIeBwWDQNAYAwBgBAAAkHA4FgsAQBACBUFgYAgAiYGBYBgPAQAgNAMCAECIGh4Mg0IgOEQIBQGBIBA+DQOAcCwFAEBwEAMFQVB4FgoAgSBgNA4AgaA4DAYEI0CwDgcBYFAYCgVAoCAkBgbA8CgJAYBgGBEGwHAgDA0DAGCACgSAYFgPA8BwBAeBAFAKAQEAUDAUC4LggCwSCAOAoCwOCIKggCAcBMCgkBAaBYGAYAgPAkAgbAwHgFAoCAiCgNBYJAMDAUFAGBoDgOBAGgQAwMBIHAcBQCgoDAQAgQAcBAOAQCAIBAOAgFAUAgFAcCQIAcEQaA4FgMCgQAYEASAwJAkCYIAoDgcBYHAGCgLA8CAIBAMAkCAJAcBgEA0CgHAeA4CATBEJAMDwIAUBgHAoEAcBMHA0BAUC4HgOBQMBIFwGAgBQKAYGwNAwBQIA4DAQB4EwYBwCgICQNAcDQEAgCAaDwHAMCQOAgCQTBMFgaBQHAcCAFAcBgHAMBwGAeDQLAgDQKAQEgLAwEgMAgFAcDQHAeDwHA0EAIAwGAiDASAwDAcCgZBYFAIBAFgMAoDAKBcGAPAkDQNAgDgYBQMBYEAcBIFA8DwLAcCgIAwFgUCwHAQCAIAkEgMB4FgGBICgSBoGAMBwIg4CwNA0DAGBQDAOB4EgaDwGAoAgKBADQNAwCgHAYCgSBQEgIAgNBQKAcA4FgIBQEAgCgQAwKAgCQHA0BABAQEALA0DwGAgBgHAoBQLA4DwLAUCwUBQFAcBgPBQLA8CwMA4CwIAcAgHAeDwKAQDAIA8DwIAYBgFAUDgJAyAwIAIDgMBIEAcB4CgIAwEgOBAEgSAoEgQAwHAcCwQBYFAUAwGgWCANAcBwFAkDQSA8CwSA8DgFAwCgTAgDANAwBwFAWAwFgsBAMA0DQIAgFAGBQBgSBIHAKAoDAcBQLAQCgIAcDwFAUBQJAkCwKA0CALBECQSBIEgWCoIA4CAHBEDAIAwDQOAgCAEAcCwKA0CAKBQKAkBwMA0DgOAkBwJA4CwHAYBICgMB4IAUBwGAkDgGAgBgJAgDgMAoBgEAwJAgEAUBICgOBIHAgDQKA4CgRBkEASA4GAcAwFAgCwHAoDQGAQCQPAgDwIAoCgLAkCAJAoCgNAgCgOAgFgYCAHAgCAJAYCQHA0BgLAcDAGAkBwLAQCQMA8CQMAgDwMAUCQKAwDgRA8DAUBYDAkCAIBEEgWCIGAYBwJAkBAMBAGgOBQDgWBYCgJA0CQNAgDwKAoDAMAwEgSBgFAWBQFASAoFgYAgEgaBACgLA4DAO';
            audio.volume = 0.1; // Lower volume
            audio.play().catch(() => {});
          });

          // Create ripple effect
          button.addEventListener('mousedown', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
            ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
            
            button.appendChild(ripple);
            
            setTimeout(() => {
              ripple.remove();
            }, 600);
          });
        }
      });
    };

    // Enhanced links
    const applyLinkEffects = () => {
      const links = document.querySelectorAll('a:not(.micro-enhanced)');
      
      links.forEach(link => {
        if (!link.classList.contains('micro-enhanced')) {
          link.classList.add('micro-enhanced');
          
          // Add subtle hover sound
          link.addEventListener('mouseenter', () => {
            const audio = new Audio();
            audio.src = 'data:audio/mp3;base64,SUQzAwAAAAAAJlRQRTEAAAAcAAAAU291bmRKYXkuY29tIFNvdW5kIEVmZmVjdHMA//uSwAAAAAAAAAAAAAAAAAAAAAAAAAABBxgBxg8B5REh5l/B4PB4RERERET/8RERERERERB4PB4PCIiIiIiIh4PB4PCIiIiIg8Hg8HhEREREREQ8Hg8HhERERERDweDweDxEREREREHg8Hg8IiIiIiIiDweDweEREREREREREREREREREREREREREREREREXikt6SXFCIyNscDZXZ2ktXbn9y1dtXFTReLE9FzT2p9XqblslrV1cVpkiRIkSJGiRIkSJEiRI0SNGjRo0aNGjRo0aNmoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7ksAAAAAABmxYAAAAA2wwIwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uSwAAAAAIXoDGmBIAAo///+wAAAAbj7XGcKB3OU/cwXTdzJI1urWxHMlIZ3OEOEf6REREREQhCEIQhERERERERERCEIQhCEREREREREREQhCEIQhEREREREREREQhCEIQhERERERERERERERERCFIibyMBwG8LCBgoGBRgUEGA4EJBRQHDRfvnigUCAIFnS4wICiIwCCAYaAgADgCgBowSAAcAgAMBgXNJHRgYDgQPDgYMLAAEAIAA4KAZiQJQwCAQCA4MB4kECAxcAgYYCgIYCgKYpMdMNBiEAQlMDhkEAIHhwGc2GFgVApdMBAEFgMvGFjYYQjIiGl41mrM1oNLTeUm5boNDWR/o5tYMy7M8FNY6Mn2Z4f85l1n////////c9yhR1pZFeJKLiqbS6z1OsiVQKQFix/lXpZb7A3zKQNCp/lrlg2t5pPL+lBfvjGx6zof8NEAAACIAKnDh40GjURSpJr3pTFokTlvilumYR/Ut2j212odM9L7M7uZ2aXTbLdb227VRm/W////////+YczFZ2dRzEaj9Z+qWmZ3Mo1S1gbLXP5XcNr6z6039Z+u/Wfm8wK4SNDYdGp9FSRljz0CNAgAcAiR8blFQoYtQC9j+ElQUU65nyQkOs+2FditkZ8opfYxkRF1Z9NHdicluy2rVSJrefW7W6NM/1//////+h7io81ZaZHej2h/uFI1W+x7A6i/KqN+W/+g/+//D+/8X0m2vKJInQs0rNkCNRgAMASQ5WCE4IFRo4iKioaTMx0EhbP1hyXJnwHCjJJRkZMNaVrNf5Q5DorLkSLgy5kyd';
            audio.volume = 0.05; // Even lower volume
            audio.play().catch(() => {});
          });
          
          // Add floating effect on hover
          link.addEventListener('mouseenter', () => {
            link.style.transition = 'transform 0.3s ease';
            link.style.transform = 'translateY(-2px)';
          });
          
          link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
          });
        }
      });
    };

    // Run the effects
    applyButtonEffects();
    applyLinkEffects();
    
    // Set up a mutation observer to catch dynamically added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          applyButtonEffects();
          applyLinkEffects();
        }
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style>
        {`
          .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.25);
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
          }
          
          @keyframes ripple {
            to {
              transform: scale(2);
              opacity: 0;
            }
          }
          
          /* Enhanced focus styles */
          button:focus, a:focus {
            outline: none;
          }
          
          button:focus-visible, a:focus-visible {
            box-shadow: 0 0 0 2px rgba(178, 0, 255, 0.5), 0 0 0 4px rgba(255, 215, 0, 0.3);
            transition: box-shadow 0.3s ease;
          }
        `}
      </style>
    </>
  );
};

export default MicroInteractions;
