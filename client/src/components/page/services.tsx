import { azaret_mono, inter } from '@/lib/fonts';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { useFetch } from '@/lib/fetch';
import { Service } from '@/types/types';

export default function Services() {
  const { data, loading } = useFetch<Service[]>('/api/services');
  if (loading) return <div>Loading services...</div>;
  return (
    <>
      <h2
        className={`${inter.className} text-center text-2xl font-bold md:text-3xl lg:text-4xl`}
      >
        Your Website Should Do more Than Just Look Good - It Should Convert
      </h2>
      <div className="flex flex-col gap-10 lg:flex-row">
        {!loading &&
          data &&
          data.map((service) => (
            <Card
              key={service.id}
              className="flex w-full max-w-sm bg-[#262626] text-center capitalize"
            >
              <CardHeader>
                <CardTitle>
                  <h3 className="text-base font-bold sm:text-lg md:text-xl">
                    {service.title}
                  </h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`${azaret_mono.className} font-light`}>
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
      </div>
    </>
  );
}
