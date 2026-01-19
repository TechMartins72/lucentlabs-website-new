interface CalendlyBadgeWidget {
  url: string;
  text: string;
  color: string;
  textColor: string;
  branding: boolean;
}

interface Calendly {
  initBadgeWidget: (options: CalendlyBadgeWidget) => void;
  initPopupWidget: (options: { url: string }) => void;
  closePopupWidget: () => void;
  showPopupWidget: (url: string) => void;
}

interface Window {
  Calendly: Calendly;
}
