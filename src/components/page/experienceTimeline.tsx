'use client';

import { useFetch } from '@/lib/fetch';
import { ApiEndpoints } from '@/lib/constants';
import { ExperienceItem } from '@/types/types';
import Image from 'next/image';

const renderDescription = (description: string) => {
  const bullets = description
    .split(/[•|]/)
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  if (bullets.length === 1) {
    return (
      <ul className="space-y-2 text-sm leading-relaxed text-gray-400">
        <li className="flex items-start">
          <span className="text-accent-foreground mt-1 mr-2 text-xs">•</span>
          <span>{description}</span>
        </li>
      </ul>
    );
  }

  return (
    <ul className="space-y-2 text-sm leading-relaxed text-gray-400">
      {bullets.map((bullet, index) => (
        <li key={index} className="flex items-start">
          <span className="text-accent-foreground mt-1 mr-2 text-sm">•</span>
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  );
};

export default function ExperienceTimeline() {
  const { data, loading } = useFetch<ExperienceItem[]>(
    ApiEndpoints.experienceItems,
  );

  return (
    <article className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/images/snowy_mountains.avif"
        alt="background image of mountain ranges"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="-z-10 scale-100 object-cover"
      />
      <div className="container mx-auto px-4 py-16 lg:py-24">
        {/* Header */}
        <header className="mb-16 text-center lg:mb-24">
          <h2 className="h2-responsive text-4xl tracking-[0.2em] text-white uppercase">
            EXPERIENCE
          </h2>
        </header>

        {/* Timeline Container */}
        <section className="mx-auto hidden max-w-6xl lg:block">
          <div className="relative">
            {/* Vertical Line */}
            <div className="bg-accent-foreground absolute left-1/2 h-full w-0.5 -translate-x-px transform"></div>

            {/* Timeline Items */}
            <div className="space-y-8 lg:space-y-16">
              {loading
                ? // Skeleton loading state
                  Array.from({ length: 3 }).map((_, index) => (
                    <div
                      key={`skeleton-${index}`}
                      className="relative animate-pulse"
                    >
                      {/* Timeline Dot Skeleton */}
                      <div className="absolute left-1/2 z-10 h-4 w-4 -translate-x-1/2 transform rounded-full bg-gray-600 shadow-lg"></div>

                      {/* Content Skeleton */}
                      <div
                        className={`flex items-start ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}
                      >
                        {/* Left/Right Content Skeleton */}
                        <article
                          className={`w-1/2 text-left ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}
                        >
                          <div className="rounded-lg border border-gray-700 bg-gray-800/30 p-6 shadow-xl backdrop-blur-sm">
                            {/* Period skeleton */}
                            <div className="mb-2 h-4 w-24 rounded bg-gray-600"></div>

                            {/* Company name skeleton */}
                            <div className="mb-2 h-8 w-48 rounded bg-gray-600"></div>

                            {/* Position skeleton */}
                            <div className="mb-4 h-6 w-40 rounded bg-gray-600"></div>

                            {/* Description skeleton - multiple lines */}
                            <div className="space-y-2">
                              <div className="h-4 w-full rounded bg-gray-600"></div>
                              <div className="h-4 w-5/6 rounded bg-gray-600"></div>
                              <div className="h-4 w-4/5 rounded bg-gray-600"></div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  ))
                : data &&
                  data.map((item, index) => (
                    <div key={item.id} className="relative">
                      {/* Timeline Dot */}
                      <div className="bg-accent-foreground border-accent-foreground absolute left-1/2 z-10 h-4 w-4 -translate-x-1/2 transform rounded-full border-4 shadow-lg"></div>

                      {/* Content */}
                      <div
                        className={`flex items-start ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}
                      >
                        {/* Left/Right Content */}
                        <article
                          className={`w-1/2 text-left ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}
                        >
                          <div className="bg-opacity-30 rounded-lg border border-gray-700 bg-black p-6 shadow-xl backdrop-blur-sm">
                            <h5 className="text-accent-foreground mb-2 text-sm font-bold tracking-wider">
                              {item.period}
                            </h5>
                            <h3 className="mb-2 text-2xl font-bold tracking-wide text-white lg:text-3xl">
                              {item.company}
                            </h3>
                            <h4 className="mb-4 text-lg font-medium text-gray-300">
                              {item.position}
                            </h4>
                            {renderDescription(item.description)}
                          </div>
                        </article>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </section>

        {/* Mobile Timeline */}
        <section className="mt-16 lg:hidden">
          <div className="relative pl-8">
            {/* Vertical Line */}
            <div className="bg-accent-foreground absolute top-0 bottom-0 left-4 w-0.5"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {loading
                ? // Mobile Skeleton loading state
                  Array.from({ length: 3 }).map((_, index) => (
                    <div
                      key={`mobile-skeleton-${index}`}
                      className="relative animate-pulse"
                    >
                      {/* Timeline Dot Skeleton */}
                      <div className="absolute -left-2 h-4 w-4 rounded-full bg-gray-600 shadow-lg"></div>

                      {/* Content Skeleton */}
                      <article className="ml-8 rounded-lg border border-gray-700 bg-gray-800/30 p-6 shadow-xl backdrop-blur-sm">
                        {/* Period skeleton */}
                        <div className="mb-2 h-4 w-20 rounded bg-gray-600"></div>

                        {/* Company name skeleton */}
                        <div className="mb-2 h-6 w-36 rounded bg-gray-600"></div>

                        {/* Position skeleton */}
                        <div className="mb-3 h-5 w-32 rounded bg-gray-600"></div>

                        {/* Description skeleton - multiple lines */}
                        <div className="space-y-2">
                          <div className="h-4 w-full rounded bg-gray-600"></div>
                          <div className="h-4 w-5/6 rounded bg-gray-600"></div>
                          <div className="h-4 w-3/4 rounded bg-gray-600"></div>
                        </div>
                      </article>
                    </div>
                  ))
                : data &&
                  data.map((item) => (
                    <div key={item.id} className="relative">
                      {/* Timeline Dot */}
                      <div className="border-accent-foreground bg-accent-foreground absolute -left-2 h-4 w-4 rounded-full border-4 shadow-lg"></div>

                      {/* Content */}
                      <article className="bg-opacity-30 ml-8 rounded-lg border border-gray-700 bg-black p-6 shadow-xl backdrop-blur-sm">
                        <h5 className="text-accent-foreground mb-2 text-sm font-bold tracking-wider">
                          {item.period}
                        </h5>
                        <h3 className="mb-2 text-xl font-bold tracking-wide text-white">
                          {item.company}
                        </h3>
                        <h4 className="mb-3 text-base font-medium text-gray-300">
                          {item.position}
                        </h4>
                        {renderDescription(item.description)}
                      </article>
                    </div>
                  ))}
            </div>
          </div>
        </section>
      </div>

      {/* Background Overlay for Better Text Contrast */}
      <div className="absolute inset-0 -z-5 bg-gradient-to-b from-[rgba(9,19,48,0.35)] to-[rgba(9,19,48,0.7)]"></div>
    </article>
  );
}
