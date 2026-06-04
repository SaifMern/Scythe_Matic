'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    const playSound = async () => {
      try {
        if (audioRef.current) {
          audioRef.current.volume = 0.25;
          await audioRef.current.play();
        }
      } catch (error) {
        // autoplay blocked by browser
      }
    };

    playSound();

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-slate-950"
        >
          <audio ref={audioRef} src="/splash-sound.mp3" preload="auto" />

          {/* Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,210,196,0.22),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.18),transparent_35%),linear-gradient(135deg,#0B111E,#162235,#0B111E)]" />

          {/* subtle dots */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:38px_38px] opacity-30" />

          {/* outer glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute h-[220px] w-[220px] rounded-full bg-primary/20 blur-3xl sm:h-[320px] sm:w-[320px] lg:h-[420px] lg:w-[420px]"
          />

          {/* rotating ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              rotate: {
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
            className="absolute h-[230px] w-[230px] rounded-full border border-white/10 sm:h-[330px] sm:w-[330px] lg:h-[430px] lg:w-[430px]"
            style={{
              borderTopColor: 'rgba(0,210,196,0.75)',
              borderRightColor: 'rgba(255,255,255,0.08)',
              borderBottomColor: 'rgba(59,130,246,0.65)',
              borderLeftColor: 'rgba(255,255,255,0.08)',
            }}
          />

          {/* logo wrapper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* circular reveal */}
            <motion.div
              initial={{ clipPath: 'circle(0% at 50% 50%)', scale: 0.85 }}
              animate={{ clipPath: 'circle(75% at 50% 50%)', scale: 1 }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex items-center justify-center rounded-full"
            >
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  filter: [
                    'drop-shadow(0 0 0px rgba(0,210,196,0))',
                    'drop-shadow(0 0 18px rgba(0,210,196,0.35))',
                    'drop-shadow(0 0 10px rgba(59,130,246,0.25))',
                  ],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
                className="rounded-full"
              >
                <Image
                  src="/logo.png"
                  alt="Scythematic Logo"
                  width={420}
                  height={420}
                  priority
                  className="h-auto w-[170px] object-contain sm:w-[240px] lg:w-[300px]"
                />
              </motion.div>
            </motion.div>

            {/* small loading line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '170px', opacity: 1 }}
              transition={{
                delay: 0.8,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-6 h-[2px] rounded-full bg-gradient-to-r from-transparent via-primary to-transparent sm:w-[220px]"
            />

            {/* text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-4 text-center text-[10px] font-medium uppercase tracking-[0.28em] text-white/70 sm:text-xs"
            >
              Enterprise Software. Mathematical Precision.
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}