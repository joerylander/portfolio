interface CalendlyOptions {
  url: string;
  parentElement?: HTMLElement;
  prefill?: Record<string, any>;
  utm?: Record<string, any>;
}

interface CalendlyWidget {
  initPopupWidget: (options: CalendlyOptions) => void;
  initInlineWidget: (options: CalendlyOptions) => void;
  closePopupWidget: () => void;
  showPopupWidget: (url: string) => void;
}

declare global {
  interface Window {
    Calendly?: CalendlyWidget;
  }
}

export {};
