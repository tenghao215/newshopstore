import type { THCarouselProps } from './types';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';


function THCarousel({ list }: THCarouselProps) {
  return (
    <Carousel
      opts={{
        loop: true,          // 开启无限循环
        align: 'start',      // 对齐方式（可选）
      }}
      className="w-full max-w-screen-lg mx-auto" // 根据需要调整容器宽度
    >
      <CarouselContent>
        {list.map((item) => (
          // CarouselItem 默认占满容器宽度，如果需要展示多列可调整 className
          <CarouselItem key={item.id} className="basis-full">
            <div className="p-1">
              <img
                src={item.imgUrl}
                alt=""
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* 导航按钮 */}
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>)
}

export default THCarousel;
