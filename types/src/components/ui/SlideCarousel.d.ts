import { FC } from 'react';
import { TacoSlide } from '../types/TacoSlide';
interface SlideCarouselProps {
    slides: TacoSlide[];
    currentSlide: number;
    slideDirection?: 'left' | 'right' | undefined;
}
declare const SlideCarousel: FC<SlideCarouselProps>;
export default SlideCarousel;
