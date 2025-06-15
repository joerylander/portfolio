import { azaret_mono, inter } from '@/lib/fonts';
import Image from 'next/image';
import { Button } from '../ui/button';
import { services } from '@/db/data.json';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <>
      <h2 className={`${inter.className} text-4xl font-bold`}>Projects</h2>
      <div className="grid h-[1200px] w-full grid-cols-2 gap-x-14 gap-y-8">
        {services.map((service) => (
          <article
            key={service.id}
            className="group h-full w-full cursor-pointer justify-self-center p-0"
          >
            <div className="relative h-full w-full transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/profile.jpg"
                alt="project"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-black/60 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="translate-y-4 transform transition-transform duration-300 group-hover:translate-y-0">
                  <h3
                    className={`${inter.className} mb-2 text-2xl font-bold text-white`}
                  >
                    Website Title
                  </h3>
                  <p
                    className={`${inter.className} mb-4 line-clamp-3 text-base text-white/90`}
                  >
                    <b>Description text:</b> Discover breathtaking views and
                    unforgettable experiences in the heart of nature. Perfect
                    for hiking enthusiasts and adventure seekers.
                  </p>

                  <div className="flex gap-2">
                    <Button
                      size="lg"
                      className="bg-white text-black hover:bg-white/90"
                    >
                      Visit site
                      <ExternalLink />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
