import * as React from 'react';
import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TacoSlide } from '../types/TacoSlide';

const slideVariants = {
  enter: (direction: string) => {
    return {
      zIndex: 1,
      x: direction === 'left' ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: string) => {
    return {
      zIndex: 0,
      x: direction === 'right' ? 1000 : -1000,
      opacity: 0,
    };
  },
};

interface SlideCarouselProps {
  slides: TacoSlide[];
  currentSlide: number;
  slideDirection?: 'left' | 'right' | undefined;
}

const SlideCarousel: FC<SlideCarouselProps> = ({
  slides,
  currentSlide,
  slideDirection = 'left',
}) => {
  return (
    <AnimatePresence initial={false} custom={slideDirection}>
      {slides &&
        slides.map((s: TacoSlide, sdx: number) => {
          if (currentSlide === sdx) {
            return (
              <motion.div
                key={`panel-${sdx}`}
                style={{
                  padding: '12px',
                  position: 'absolute',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
                custom={slideDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              >
                {s.body}
              </motion.div>
            );
          }
        })}
    </AnimatePresence>
  );
};

export default SlideCarousel;
