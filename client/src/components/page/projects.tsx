'use client';

import Image from 'next/image';
import { useNavigateTo } from '@/lib/navigation';
import { inter } from '@/lib/fonts';
import { Button } from '../ui/button';
import { ExternalLink } from 'lucide-react';
import { useFetch } from '@/lib/fetch';
import { Project } from '@/types/types';

export default function Projects() {
  const { openInNewTab } = useNavigateTo();
  const { data, loading } = useFetch<Project[]>(
    'http://localhost:4000/projects',
  );
  if (loading) return <div>Loading projects...</div>;
  return (
    <>
      <h2
        className={`${inter.className} text-center text-2xl font-bold md:text-3xl lg:text-4xl`}
      >
        Projects
      </h2>
      <div className="grid w-full auto-rows-[400px] grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-2">
        {data &&
          data.map((p) => (
            <article
              key={p.id}
              className="group h-full w-full justify-self-center p-0"
            >
              <div className="relative h-full w-full transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={`/images/portfolio/${p.img_src}`}
                  alt={p.img_alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-black/60 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="translate-y-4 transform transition-transform duration-300 group-hover:translate-y-0">
                    <h3
                      className={`${inter.className} mb-2 text-2xl font-bold text-white`}
                    >
                      {p.title}
                    </h3>
                    <p
                      className={`${inter.className} mb-4 line-clamp-3 text-base text-white/90 capitalize`}
                    >
                      {p.description}
                    </p>

                    <div className="flex gap-2">
                      <Button
                        size="lg"
                        className="bg-white text-black hover:bg-white/90"
                        onClick={() => openInNewTab(p.external_link)}
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
