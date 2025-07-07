import { useNavigateTo } from '@/lib/navigation';
import { Button } from '../ui/button';

type CtaProps = {
  text: string;
  className?: string;
};

export default function CtaBtn({ text, className }: CtaProps) {
  const { goToContact } = useNavigateTo();
  return (
    <Button
      variant={'default'}
      size={'lg'}
      onClick={goToContact}
      className={`${className} capitalize`}
    >
      {text}
    </Button>
  );
}
