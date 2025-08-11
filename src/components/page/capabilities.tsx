import { inter } from '@/lib/fonts';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export default function Capabilities() {
  const skills = {
    'Front-end Development': [
      'React',
      'Next.js',
      'Angular',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'CSS',
      'HTML',
    ],
    'Back-end Development': [
      'Laravel',
      'Node.js',
      'PHP',
      'Express.js',
      'REST API',
      'SQLite',
      'MySQL',
      'PostgreSQL',
    ],
    'Tools & Platforms': [
      'Git',
      'Github',
      'Bitbucket',
      'Docker',
      'Vite',
      'Webpack',
      'Postman',
    ],
  };

  return (
    <>
      <header className="mx-auto mb-16">
        <h2 className="h2-responsive text-center">
          Technical Skills & Proficiencies
        </h2>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <Card key={category} className="w-full bg-[#262626] text-white">
            <CardHeader>
              <CardTitle className="font-bold capitalize">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid h-full list-inside list-disc grid-cols-1 text-left sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className={`${inter.className} text-sm xl:text-base`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
