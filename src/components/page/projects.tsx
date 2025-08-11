'use client';

import Image from 'next/image';
import { useNavigateTo } from '@/lib/navigation';
import { inter } from '@/lib/fonts';
import { Button } from '../ui/button';
import { ExternalLink } from 'lucide-react';
import { useFetch } from '@/lib/fetch';
import { Project } from '@/types/types';
import { Skeleton } from '../ui/skeleton';
import { ApiEndpoints } from '@/lib/constants';
import { Badge } from '../ui/badge';
import { capitalizeEachWord } from '@/lib/utils';

export default function Projects() {
  const { navigateNewTabURL } = useNavigateTo();
  const { data, loading } = useFetch<Project[]>(ApiEndpoints.projects);

  return (
    <>
      <header className="mb-16 text-center lg:mb-24">
        <h2 className="h2-responsive font-bold text-balance capitalize">
          Featured projects
        </h2>
      </header>

      <div className="grid w-full auto-rows-[400px] grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-2">
        {loading
          ? Array.from({ length: 2 }).map((_, index) => (
              <article
                key={`skeleton-${index}`}
                className="group h-full w-full justify-self-center p-0"
              >
                <Skeleton className="h-1/2 w-full rounded-lg" />
                <Skeleton className="mt-4 h-1/12 w-11/12 rounded-lg" />
                <Skeleton className="mt-4 h-1/12 w-4/5 rounded-lg" />
              </article>
            ))
          : data &&
            data.map((project) => (
              <article
                key={project.id}
                className="group h-full w-full justify-self-center p-0"
              >
                <div className="relative h-full w-full transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={`/images/portfolio/${project.img_src}`}
                    alt={project.img_alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-black/60 p-6 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                    <div className="translate-y-0 transform transition-transform duration-300 md:translate-y-4 md:group-hover:translate-y-0">
                      <h3 className="mb-2 text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                      <div className="mb-2 space-x-2">
                        {project.techs.map((tech, i) => (
                          <Badge key={i} variant="default">
                            {capitalizeEachWord(tech)}
                          </Badge>
                        ))}
                      </div>
                      <p
                        className={`${inter.className} mb-4 line-clamp-3 text-base text-white/90 first-letter:uppercase`}
                      >
                        {project.description}
                      </p>

                      <div className="flex gap-2">
                        <Button
                          size="lg"
                          className="bg-white text-black hover:bg-white/90"
                          onClick={() =>
                            navigateNewTabURL(project.external_link)
                          }
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
