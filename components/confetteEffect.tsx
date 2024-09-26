'use client';
import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const ConfettiEffect = ({ duration = 5000 }) => {
  useEffect(() => {
    // Initial confetti blast
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#bb0000', '#ffffff'],
    });

    // Extended confetti effect
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min:any, max:any) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: {
            x: randomInRange(0.1, 0.3),
            y: Math.random() - 0.2,
          },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: {
            x: randomInRange(0.7, 0.9),
            y: Math.random() - 0.2,
          },
        })
      );
    }, 250);

    return () => clearInterval(interval);  
  }, [duration]);

  return null;
};

export default ConfettiEffect;
