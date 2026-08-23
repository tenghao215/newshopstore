interface THCarouselItem {
  id: string | number;
  imgUrl: string;
}


interface THCarouselProps {
  list: THCarouselItem[];
}
export type { THCarouselItem, THCarouselProps };