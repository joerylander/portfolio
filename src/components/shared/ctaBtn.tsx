import { useNavigateTo } from '@/lib/navigation';
import { Button } from '../ui/button';

type CtaProps = {
  text: string;
  className?: string;
  navigateTo?: 'contact' | 'projects' | 'resumePage';
  onClick?: () => void;
  variant?:
    | 'default'
    | 'secondary'
    | 'ghost'
    | 'outline'
    | 'destructive'
    | 'link';
};

export default function CtaBtn({
  text,
  className,
  onClick,
  navigateTo = 'contact',
  variant = 'default',
}: CtaProps) {
  const { goToContact, goToProjects, goToResumePage } = useNavigateTo();

  const handleClick = () => {
    if (onClick) onClick();
    switch (navigateTo) {
      case 'contact':
        goToContact();
        break;
      case 'projects':
        goToProjects();
        break;
      case 'resumePage':
        goToResumePage();
        break;
      default:
        goToContact();
    }
  };
  return (
    <Button
      variant={variant}
      size="lg"
      onClick={handleClick}
      className={className}
    >
      {text}
    </Button>
  );
}
