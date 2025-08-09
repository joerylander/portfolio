import Image from 'next/image';
import { SiGithub, SiX } from '@icons-pack/react-simple-icons';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  iconSize?: number;
  containerSize?: string;
  className?: string;
}

export default function SocialLinks({
  className,
  containerSize,
  iconSize,
}: SocialLinksProps) {
  const baseIconStyle =
    'p-2 transition-all duration-300 hover:scale-110 flex items-center justify-center';

  return (
    <div className={cn(className)}>
      <a
        className={cn(baseIconStyle, containerSize)}
        href="https://github.com/joerylander"
        target="_blank"
      >
        <SiGithub size={iconSize} color="#fff" />
      </a>
      <a
        className={cn(baseIconStyle, containerSize, 'relative')}
        href="https://www.linkedin.com/in/joerylander/"
        target="_blank"
      >
        <Image
          src="/svg/linkedin-svgrepo-com.svg"
          alt="LinkedIn"
          width={iconSize}
          height={iconSize}
          className="brightness-0 invert transition-transform duration-300"
        />
      </a>
      <a
        className={cn(baseIconStyle, containerSize)}
        href="https://x.com/Overload_JR"
        target="_blank"
      >
        <SiX color="#fff" size={iconSize} />
      </a>
    </div>
  );
}
