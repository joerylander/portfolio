'use client';

import { useFetch } from '@/lib/fetch';
import { ApiEndpoints } from '@/lib/constants';
import { ExperienceItem } from '@/types/types';
import Image from 'next/image';

export default function ExperienceTimeline() {
  const { data, loading } = useFetch<ExperienceItem[]>(
    ApiEndpoints.experienceItems,
  );

  return (
    <article
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'linear-gradient(rgba(9, 19, 48, 0.35), rgb(9, 19, 48, 0.7)), url("https://static.wixstatic.com/media/035244_1f9f5504879f46cc90c68e323a18ea59~mv2_d_1920_3986_s_2.jpg/v1/fill/w_1920,h_3031,al_c,q_90,enc_avif,quality_auto/035244_1f9f5504879f46cc90c68e323a18ea59~mv2_d_1920_3986_s_2.jpg")',
      }}
    >
      {/* src="https://static.wixstatic.com/media/035244_1f9f5504879f46cc90c68e323a18ea59~mv2_d_1920_3986_s_2.jpg/v1/fill/w_1920,h_3031,al_c,q_90,enc_avif,quality_auto/035244_1f9f5504879f46cc90c68e323a18ea59~mv2_d_1920_3986_s_2.jpg" */}
      {/* <Image
        src="/images/mountain_slopes.jpg"
        alt="background image of mountains"
        fill
        priority
        quality={90}
        sizes="100vw"
      /> */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        {/* Header */}
        <header className="mb-16 text-center lg:mb-24">
          <h2 className="h2-responsive mb-4 text-4xl tracking-[0.2em] text-white uppercase">
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
              {data &&
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
                          <p className="text-sm leading-relaxed text-gray-400">
                            {item.description}
                          </p>
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
              {data &&
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
                      <p className="text-sm leading-relaxed text-gray-400">
                        {item.description}
                      </p>
                    </article>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>

      {/* Background Overlay for Better Text Contrast */}
      {/* <div className="pointer-events-none absolute inset-0 bg-black/70"></div> */}
    </article>
  );
}
