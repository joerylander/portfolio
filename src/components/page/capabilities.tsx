import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export default function Capabilities() {
  const skills = {
    'Front-end Development': [
      'React',
      'Next.js',
      'Angular',
      'Tailwind CSS',
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
    ],
    'Back-end Development': [
      'Laravel',
      'Node.js',
      'PHP',
      'Express.js',
      'REST API',
      'SQLite',
      'MySQL',
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
        <h2 className="h2-responsive">Key Technical Proficiencies</h2>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <Card key={category} className="w-full bg-[#262626] text-white">
            <CardHeader>
              <CardTitle className="mx-auto font-bold capitalize">
                {category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="flex h-full list-inside list-disc flex-col flex-wrap gap-2 text-left">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
