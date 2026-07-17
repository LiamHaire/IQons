import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 9.68262C8.5 8.86884 9.34209 8.35562 10.0508 8.67871L10.1904 8.75391L15.4043 12.0723C16.0834 12.5045 16.0834 13.4955 15.4043 13.9277L10.1904 17.2461C9.45817 17.7119 8.50001 17.1853 8.5 16.3174V9.68262ZM10.5 14.6777L13.1357 13L10.5 11.3213V14.6777Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2041 3.01074C21.2128 3.113 22 3.96435 22 5V21L21.9893 21.2041C21.8938 22.1457 21.1457 22.8938 20.2041 22.9893L20 23H4C2.96435 23 2.113 22.2128 2.01074 21.2041L2 21V5C2 3.89543 2.89543 3 4 3H20L20.2041 3.01074ZM4 4.5C3.72386 4.5 3.5 4.72386 3.5 5V21C3.5 21.2761 3.72386 21.5 4 21.5H20C20.2761 21.5 20.5 21.2761 20.5 21V5C20.5 4.72386 20.2761 4.5 20 4.5H4Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M20 2C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2H20ZM10.333 8.62305C9.94762 8.45855 9.50017 8.7396 9.5 9.17676V14.8232C9.50016 15.2895 10.0093 15.5777 10.4092 15.3379L15.1143 12.5146C15.5025 12.2816 15.5025 11.7184 15.1143 11.4854L10.4092 8.66211L10.333 8.62305Z" fill="currentColor"/>`,
  duotone: `<path fill-rule="evenodd" clip-rule="evenodd" d="M20 2C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2H20ZM10.1514 9.09082C10.0847 9.05092 10 9.09906 10 9.17676V14.8232C10 14.9009 10.0847 14.9491 10.1514 14.9092L14.8574 12.0859C14.9219 12.0471 14.9219 11.9529 14.8574 11.9141L10.1514 9.09082Z" fill="currentColor" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 8.68262C8.5 7.86884 9.34209 7.35562 10.0508 7.67871L10.1904 7.75391L15.4043 11.0723C16.0834 11.5045 16.0834 12.4955 15.4043 12.9277L10.1904 16.2461C9.45817 16.7119 8.50001 16.1853 8.5 15.3174V8.68262ZM10.5 13.6777L13.1357 12L10.5 10.3213V13.6777Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2041 2.01074C21.2128 2.113 22 2.96435 22 4V20L21.9893 20.2041C21.8938 21.1457 21.1457 21.8938 20.2041 21.9893L20 22H4C2.96435 22 2.113 21.2128 2.01074 20.2041L2 20V4C2 2.89543 2.89543 2 4 2H20L20.2041 2.01074ZM4 3.5C3.72386 3.5 3.5 3.72386 3.5 4V20C3.5 20.2761 3.72386 20.5 4 20.5H20C20.2761 20.5 20.5 20.2761 20.5 20V4C20.5 3.72386 20.2761 3.5 20 3.5H4Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Play icon
 * Variants: outline, fill, duotone
 */
export function Play({
  variant = "outline",
  size = 24,
  label,
  ...props
}: IqonProps) {
  const inner = VARIANTS[variant] ?? VARIANTS["outline"] ?? "";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      aria-label={label}
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      {...props}
      dangerouslySetInnerHTML={{ __html: inner }}
    />
  );
}

Play.displayName = "Play";
Play.variants = AVAILABLE;
