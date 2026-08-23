import type { THCarouselItem } from '@/components/THCarousel/types';

interface FloorProps {
    name: string;
    navList: { text: string }[];
    keywords: string[];
    imgUrl: string;
    carouselList: THCarouselItem[];
    recommendList: string[];
    bigImg: string;
}

export type { FloorProps };



