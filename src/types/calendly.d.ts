interface CalendlyOptions {
  url: string;
  parentElement?: HTMLElement;
  prefill?: Record<string, unknown>;
  utm?: Record<string, unknown>;
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
