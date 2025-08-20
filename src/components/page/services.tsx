'use client';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { useFetch } from '@/lib/fetch';
import { Service } from '@/types/types';
import { Skeleton } from '../ui/skeleton';
import { ApiEndpoints } from '@/lib/constants';

export default function Services() {
  const { data, loading } = useFetch<Service[]>(ApiEndpoints.services);
  return (
    <>
      <header className="mb-16 text-center lg:mb-24">
        <h2 className="h2-responsive text-center text-balance">
          Your Website Should Do more Than Just Look Good - It Should Convert
        </h2>
      </header>
      <div className="flex flex-col gap-10 lg:flex-row">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <Card
                key={`skeleton-${index}`}
                className="flex min-h-[225px] w-full max-w-sm min-w-[350px] bg-[#262626] text-center capitalize"
              >
                <CardHeader>
                  <CardTitle>
                    <Skeleton className="mx-auto h-6 w-3/4" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center gap-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-7/8" />
                    <Skeleton className="h-4 w-4/5" />
                  </div>
                </CardContent>
              </Card>
            ))
          : data &&
            data.map((service) => (
              <Card
                key={service.id}
                className="flex w-full max-w-sm bg-[#262626] text-center capitalize"
              >
                <CardHeader>
                  <CardTitle>
                    <h5 className="h5-responsive">{service.title}</h5>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-responsive font-light text-pretty">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
      </div>
    </>
  );
}
