import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M11.4541 16.3007C11.769 16.5664 12.2311 16.5664 12.5459 16.3007L12.6113 16.2398L19.7891 8.77764C20.077 8.47843 20.0692 8.00121 19.7716 7.71189C19.4738 7.42265 18.9989 7.43048 18.711 7.72955L12 14.706L5.28899 7.72955C5.00108 7.43048 4.52618 7.42265 4.22843 7.71189C3.93081 8.00121 3.92303 8.47843 4.21086 8.77764L11.3887 16.2398L11.4541 16.3007Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M4 22C2.89543 22 2 21.1046 2 20L2 4C2 2.89543 2.89543 2 4 2L20 2C21.1046 2 22 2.89543 22 4L22 20C22 21.1046 21.1046 22 20 22L4 22ZM11.4541 16.3008C11.7689 16.5665 12.2311 16.5665 12.5459 16.3008L12.6113 16.2402L19.7891 8.77734C20.0768 8.47813 20.0691 8.0012 19.7715 7.71191C19.4737 7.42271 18.9988 7.43043 18.7109 7.72949L12 14.7061L5.28906 7.72949C5.00116 7.43042 4.52627 7.42271 4.22852 7.71191C3.93093 8.0012 3.92322 8.47813 4.21094 8.77734L11.3887 16.2402L11.4541 16.3008Z" fill="currentColor"/>`,
  duotone: `<path d="M11.4541 16.3007C11.769 16.5664 12.2311 16.5664 12.5459 16.3007L12.6113 16.2398L19.7891 8.77764C20.077 8.47843 20.0692 8.00121 19.7716 7.71189C19.4738 7.42265 18.9989 7.43048 18.711 7.72955L12 14.706L5.28899 7.72955C5.00108 7.43048 4.52618 7.42265 4.22843 7.71189C3.93081 8.00121 3.92303 8.47843 4.21086 8.77764L11.3887 16.2398L11.4541 16.3007Z" fill="currentColor"/>
<path d="M18.7586 8.5H5.24142C5.15233 8.5 5.10771 8.60771 5.17071 8.67071L11.9293 15.4293C11.9683 15.4683 12.0317 15.4683 12.0707 15.4293L18.8293 8.67071C18.8923 8.60771 18.8477 8.5 18.7586 8.5Z" fill="currentColor" fill-opacity="0.2"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * ChevronDown icon
 * Variants: outline, fill, duotone
 */
export function ChevronDown({
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

ChevronDown.displayName = "ChevronDown";
ChevronDown.variants = AVAILABLE;
