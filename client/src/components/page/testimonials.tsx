'use client';

import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { azaret_mono } from '@/lib/fonts';

export default function Testimonials() {
  const autoplay = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true, stopOnMouseEnter: true }),
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
            <Card className="flex h-[500px]">
              <CardContent className="flex flex-col items-center gap-10">
                <Avatar>
                  <AvatarImage src="/images/profile.jpg" alt="avatar" />
                  <AvatarFallback>Profile</AvatarFallback>
                </Avatar>
                <CardDescription className={azaret_mono.className}>
                  From day one, the execution was tight and timelines were
                  respected. Our site looks and feels premium, and feedback has
                  been all fire.
                </CardDescription>
                <CardTitle>Morgan Freeman {i}</CardTitle>
                <h4>Product Manager</h4>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
