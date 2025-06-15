'use client';

import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { azaret_mono, inter } from '@/lib/fonts';

export default function Testimonials() {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true }),
  );
  return (
    <Carousel
      plugins={[autoplay.current]}
      opts={{ loop: true, align: 'center' }}
      className="w-full max-w-lg"
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, i) => (
          <CarouselItem key={i}>
            <article className="flex h-[500px] max-w-fit">
              <div className="flex flex-col items-center justify-evenly">
                <Avatar className="h-48 w-48">
                  <AvatarImage src="/images/profile.jpg" alt="avatar" />
                  <AvatarFallback>Initials</AvatarFallback>
                </Avatar>

                <p className={`${azaret_mono.className} text-center`}>
                  From day one, the execution was tight and timelines were
                  respected. Our site looks and feels premium, and feedback has
                  been all fire.
                </p>
                <h3 className={`${inter.className} text-4xl font-bold`}>
                  Morgan Freeman {i}
                </h3>
                <h4
                  className={`${azaret_mono.className} font-semibold opacity-80`}
                >
                  Product Manager
                </h4>
              </div>
            </article>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
