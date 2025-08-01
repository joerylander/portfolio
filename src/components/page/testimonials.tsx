'use client';

import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { azaret_mono } from '@/lib/fonts';
import { useFetch } from '@/lib/fetch';
import { Testimonial } from '@/types/types';
import { Skeleton } from '../ui/skeleton';

export default function Testimonials() {
  const { data, loading } = useFetch<Testimonial[]>('/api/testimonials');

  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <>
      <h2 className="text-center text-2xl font-bold text-balance capitalize md:text-3xl lg:text-4xl">
        What people say about us
      </h2>
      {loading ? (
        <div className="mx-auto w-full">
          <div className="mx-auto flex h-[500px] max-w-fit">
            <div className="flex flex-col items-center gap-6 sm:justify-evenly sm:gap-0">
              {/* Avatar skeleton */}
              <Skeleton className="size-24 rounded-full sm:size-32 md:size-40" />

              {/* Testimonial text skeleton */}
              <div className="flex w-full flex-col items-center gap-2 px-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-7/8" />
              </div>

              {/* Name skeleton */}
              <Skeleton className="h-8 w-48 sm:h-10 md:h-12" />

              {/* Title skeleton */}
              <Skeleton className="h-5 w-32 sm:h-6 md:h-7" />
            </div>
          </div>
        </div>
      ) : (
        <Carousel
          plugins={[autoplay.current]}
          opts={{ loop: true, align: 'center' }}
          className="w-full max-w-xl"
          onMouseEnter={() => autoplay.current.stop()}
          onMouseLeave={() => autoplay.current.play()}
        >
          <CarouselContent>
            {data &&
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

                        <p className="text-center text-pretty">
                          {t.testimonial}
                        </p>
                        <h3 className="text-2xl font-bold text-balance capitalize sm:text-3xl md:text-4xl">
                          {t.name}
                        </h3>
                        <h4
                          className={`${azaret_mono.className} text-base font-semibold text-balance uppercase opacity-80 sm:text-xl md:text-2xl`}
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
      )}
    </>
  );
}
