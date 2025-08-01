import { useNavigateTo } from '@/lib/navigation';
import { Button } from '../ui/button';

type CtaProps = {
  text: string;
  className?: string;
  navigate?: boolean;
  onClick?: () => void;
};

export default function CtaBtn({
  text,
  className,
  onClick,
  navigate = true,
}: CtaProps) {
  const { goToContact } = useNavigateTo();

  const handleClick = () => {
    if (onClick) onClick();

    if (navigate) goToContact();
  };
  return (
    <Button
      variant={'default'}
      size={'lg'}
      onClick={handleClick}
      className={`${className} capitalize`}
    >
      {text}
    </Button>
  );
}
