import {
  SiGithub,
  SiReact,
  SiAngular,
  SiPhp,
  SiExpress,
  SiNodedotjs,
  SiLaravel,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiWordpress,
  SiGit,
  SiDocker,
  SiMysql,
  SiPostgresql,
  SiFigma,
} from '@icons-pack/react-simple-icons';

export const socialIcons = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Angular', icon: SiAngular, color: '#DD0031' },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Redux', icon: SiRedux },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'Express.js', icon: SiExpress },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Laravel', icon: SiLaravel },
  { name: 'PHP', icon: SiPhp },
  { name: 'WordPress', icon: SiWordpress },
  { name: 'MySQL', icon: SiMysql },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Docker', icon: SiDocker },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Figma', icon: SiFigma, color: '#000' },
];
export default function TechSkills() {
  return (
    <>
      <header className="mb-6 h-1/2 text-center">
        <h2 className="h2-responsive mb-4">Skills & Tools</h2>
        <p className="mb-12 text-white/60">
          For those who know what they're looking for...
        </p>
      </header>
      <ul className="flex flex-wrap items-center justify-center">
        {socialIcons.map(({ name, icon: Icon, color }) => (
          <li
            key={name}
            className="m-2 flex size-24 flex-col items-center justify-center rounded-lg bg-white/10 p-4 transition-colors duration-300 ease-in-out sm:size-30"
          >
            <Icon color={color || 'default'} size={40} />
            <span className="mt-3 mb-1 block font-bold">{name}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
