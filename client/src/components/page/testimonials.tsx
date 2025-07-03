'use client';

import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { testimonials } from '@/db/data.json';
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
      className="w-full max-w-xl"
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      <CarouselContent>
        {testimonials.map((t) => (
          <CarouselItem key={t.id}>
            <article className="flex h-[500px] max-w-fit">
              <div className="flex flex-col items-center justify-evenly">
                <Avatar className="h-40 w-40">
                  <AvatarImage
                    src={`/images/${t.img_src}`}
                    alt={`avatar of ${t.name.toLowerCase()}`}
                  />
                  <AvatarFallback>{t.name.slice(0, 2)}</AvatarFallback>
                </Avatar>

                <p className={`${azaret_mono.className} text-center`}>
                  {t.testimonial}
                </p>
                <h3
                  className={`${inter.className} text-4xl font-bold capitalize`}
                >
                  {t.name}
                </h3>
                <h4
                  className={`${azaret_mono.className} font-semibold uppercase opacity-80`}
                >
                  {t.title}
                </h4>
              </div>
            </article>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
