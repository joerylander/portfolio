import { useEffect, useState } from 'react';
import { Button } from '../ui/button';

type Props<ReturnT> = {
  text: string;
  className: string;
  callback?: () => ReturnT;
};

export default function CalendlyBtn<ReturnT>({
  text,
  className,
  callback,
}: Props<ReturnT>) {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

  useEffect(() => {
    if (!document.querySelector('#calendly-script')) {
      const script = document.createElement('script');
      script.id = 'calendly-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => setCalendlyLoaded(true);
      document.body.appendChild(script);
    } else {
      setCalendlyLoaded(true);
    }
  }, []);

  const handleClick = () => {
    if (calendlyLoaded && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/rylander-media?primary_color=155dfc&background_color=1a1a1a&text_color=ffffff',
      });
    } else {
      console.warn('Calendly not loaded yet');
    }

    if (callback) {
      callback();
    }
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
