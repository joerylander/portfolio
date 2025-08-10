import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export default function Capabilities() {
  const skills = {
    'Front-end Development': [
      'React',
      'Next.js',
      'Vue.js',
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
    'Tools & Platforms': ['Git', 'Docker', 'Vite', 'Webpack', 'Postman'],
  };

  return (
    <>
      <header className="mx-auto mb-16">
        <h2 className="h2-responsive">Skills & Tools</h2>
      </header>

      <div className="grid gap-6 sm:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <Card key={category} className="w-full bg-[#262626] text-white">
            <CardHeader>
              <CardTitle className="capitalize">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc space-y-1 text-left">
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
