import { azaret_mono, inter } from '@/lib/fonts';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { services } from '@/db/data.json';

export default function Services() {
  return (
    <>
      <h2 className={inter.className}>
        Your Website Should Do more Than Just Look Good - It Should Convert
      </h2>
      <div className="flex flex-col gap-10 md:flex-row">
        {services.map((service) => (
          <Card
            key={service.id}
            className="flex w-full max-w-sm bg-[#262626] text-center capitalize"
          >
            <CardHeader>
              <CardTitle>
                <h3 className="font-bold">{service.title}</h3>
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
