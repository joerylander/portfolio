import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export default function ResumeProjects() {
  const projects = [
    {
      title: 'Napparaten',
      role: 'Full-Stack Developer',
      summary:
        'Built a high-performance site for fitness professionals with API-driven backend and responsive, conversion-focused frontend.',
      tech: ['Next.js', 'Laravel API', 'Tailwind CSS'],
    },
    {
      title: 'ERP SaaS Platform',
      role: ' Developer',
      summary:
        'Implemented client management, invoicing, and reporting features for a private ERP system over 2+ years.',
      tech: ['Laravel', 'Vue.js', 'MySQL'],
    },
    {
      title: 'Local Business Websites',
      role: 'Web Developer',
      summary:
        'Delivered optimized, mobile-friendly websites with SEO improvements for multiple small businesses.',
      tech: ['Wix Studio'],
    },
    {
      title: 'Portfolio Website',
      role: 'Frontend Developer',
      summary:
        'Created a custom portfolio with emphasis on performance, accessibility, and clean UI/UX.',
      tech: ['Next.js', 'Tailwind CSS'],
    },
  ];

  return (
    <>
      <header className="mb-16 text-center">
        <h2 className="h2-responsive font-bold capitalize">
          Portfolio Projects
        </h2>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="border border-gray-700 bg-[#262626] text-white"
          >
            <CardHeader>
              <CardTitle className="capitalize">{project.title}</CardTitle>
              <p className="text-xs text-gray-300 sm:text-sm">{project.role}</p>
            </CardHeader>
            <CardContent>
              <p className="text-responsive mb-2">{project.summary}</p>
              <p className="text-xs text-gray-300 sm:text-sm">
                <strong>Tech Stack:</strong> {project.tech.join(', ')}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
