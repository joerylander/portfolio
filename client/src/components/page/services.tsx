import { azaret_mono } from '@/lib/fonts';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'modern design',
      description:
        'Your website will look stunning and function perfectly on any device – desktop, tablet, or mobile. No outdated designs, just sleek, modern, and user-friendly experiences.',
    },
    {
      id: 2,
      title: 'comprehensive',
      description:
        'What’s the point of a website if no one finds it? We build websites with SEO best practices to help you rank on Google and attract organic traffic.',
    },
    {
      id: 3,
      title: 'support & maintenance',
      description:
        'A website needs updates, security checks, and tweaks to stay relevant. We offer post-launch support, troubleshooting, and maintenance so you never have to worry.',
    },
  ];

  return (
    <>
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
    </>
  );
}
