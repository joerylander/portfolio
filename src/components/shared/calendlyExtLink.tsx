import { ExternalLink } from 'lucide-react';

type Props = {
  className?: string;
  callback?: () => void;
};

export default function CalendlyExtLink({ className, callback }: Props) {
  return (
    <a
      href="https://calendly.com/rylander-media"
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} bg-primary text-primary-foreground hover:bg-primary/90 items-center justify-center gap-1 rounded-lg text-sm tracking-tighter whitespace-nowrap shadow-md transition-colors duration-200 hover:shadow-lg`}
      onClick={() => (callback ? callback() : undefined)}
    >
      Book a call
      <ExternalLink size={16} />
    </a>
  );
}
