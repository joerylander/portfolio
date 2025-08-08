import { useNavigateTo } from '@/lib/navigation';
import { Button } from '../ui/button';

type CtaProps = {
  text: string;
  className?: string;
  navigateTo?: 'contact' | 'projects';
  onClick?: () => void;
};

export default function CtaBtn({
  text,
  className,
  onClick,
  navigateTo = 'contact',
}: CtaProps) {
  const { goToContact, goToProjects } = useNavigateTo();

  const handleClick = () => {
    if (onClick) onClick();
    if (navigateTo === 'contact') goToContact();
    if (navigateTo === 'projects') goToProjects();
  };
  return (
    <Button
      variant={navigateTo === 'contact' ? 'default' : 'secondary'}
      size="lg"
      onClick={handleClick}
      className={`${className} capitalize`}
    >
      {text}
    </Button>
  );
}
