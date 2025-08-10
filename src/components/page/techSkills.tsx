import { techSkillIcons } from '@/lib/icon-utils';

export default function TechSkills() {
  return (
    <>
      <header className="mb-6 h-1/2 text-center">
        <h2 className="h2-responsive mb-4">Skills &amp; Tools</h2>
        <p className="mb-12 text-white/60">
          For those who know what they&apos;re looking for...
        </p>
      </header>
      <ul className="flex flex-wrap items-center justify-center">
        {techSkillIcons.map(({ name, icon: Icon, color }) => (
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
