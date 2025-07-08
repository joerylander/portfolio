'use client';

import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { azaret_mono, inter } from '@/lib/fonts';
import { useFetch } from '@/lib/fetch';
import { Testimonial } from '@/types/types';

export default function Testimonials() {
  const { data, loading } = useFetch<Testimonial[]>('/api/testimonials');

  const autoplay = useRef(Autoplay({ delay: 3000 }));

  if (loading) return <div>Loading testimonials...</div>;
  return (
    <>
      <h2
        className={`${inter.className} text-center text-2xl font-bold capitalize md:text-3xl lg:text-4xl`}
      >
        What people say about us
      </h2>
      <Carousel
        plugins={[autoplay.current]}
        opts={{ loop: true, align: 'center' }}
        className="w-full max-w-xl"
        onMouseEnter={() => autoplay.current.stop()}
        onMouseLeave={() => autoplay.current.play()}
      >
        <CarouselContent>
          {!loading &&
            data &&
            data.map((t) => {
              const nameParts = t.name.split(' ');
              const initials = nameParts[0][0] + nameParts[1][0];
              return (
                <CarouselItem key={t.id}>
                  <article className="flex h-[500px] max-w-fit">
                    <div className="flex flex-col items-center gap-6 sm:justify-evenly sm:gap-0">
                      <Avatar className="size-24 sm:size-32 md:size-40">
                        <AvatarImage
                          src={`/images/testimonials/${t.img_src}`}
                          alt={`avatar of ${t.name.toLowerCase()}`}
                          className="object-cover"
                        />
                        <AvatarFallback>{initials}</AvatarFallback>
                      </Avatar>

                      <p className={`${azaret_mono.className} text-center`}>
                        {t.testimonial}
                      </p>
                      <h3
                        className={`${inter.className} text-2xl font-bold capitalize sm:text-3xl md:text-4xl`}
                      >
                        {t.name}
                      </h3>
                      <h4
                        className={`${azaret_mono.className} text-base font-semibold uppercase opacity-80 sm:text-xl md:text-2xl`}
                      >
                        {t.title}
                      </h4>
                    </div>
                  </article>
                </CarouselItem>
              );
            })}
        </CarouselContent>
      </Carousel>
    </>
  );
}
