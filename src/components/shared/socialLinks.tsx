import Image from 'next/image';
import { SiGithub, SiX } from '@icons-pack/react-simple-icons';

interface SocialLinksProps {
  iconSize?: number;
  className?: string;
}

export default function SocialLinks({ className, iconSize }: SocialLinksProps) {
  const baseIconStyle =
    'p-2 transition-all duration-300 hover:scale-110 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-sm border border-white/20 hover:border-white/30 size-8 md:size-10';
  return (
    <div className={className}>
      <a
        className={baseIconStyle}
        href="https://github.com/joerylander"
        target="_blank"
      >
        <SiGithub size={iconSize} color="#fff" />
      </a>
      <a
        className={`${baseIconStyle} relative`}
        href="https://www.linkedin.com/in/joerylander/"
        target="_blank"
      >
        <Image
          src="/svg/linkedin-svgrepo-com.svg"
          alt="LinkedIn"
          width={iconSize}
          height={iconSize}
          className="size-4 brightness-0 invert transition-transform duration-300"
        />
      </a>
      <a
        className={baseIconStyle}
        href="https://x.com/Overload_JR"
        target="_blank"
      >
        <SiX color="#fff" size={iconSize} />
      </a>
    </div>
  );
}
