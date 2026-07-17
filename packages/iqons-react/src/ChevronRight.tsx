import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M16.3007 11.4541C16.5664 11.769 16.5664 12.2311 16.3007 12.5459L16.2398 12.6113L8.77764 19.7891C8.47843 20.077 8.00121 20.0692 7.71189 19.7716C7.42265 19.4738 7.43048 18.9989 7.72955 18.711L14.706 12L7.72955 5.28899C7.43048 5.00108 7.42265 4.52618 7.71189 4.22843C8.00121 3.93081 8.47843 3.92303 8.77764 4.21086L16.2398 11.3887L16.3007 11.4541Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M22 20C22 21.1046 21.1046 22 20 22L4 22C2.89543 22 2 21.1046 2 20L2 4.00001C2 2.89545 2.89543 2.00001 4 2.00001L20 2.00002C21.1046 2.00002 22 2.89545 22 4.00002L22 20ZM16.3008 12.5459C16.5665 12.2311 16.5665 11.769 16.3008 11.4541L16.2402 11.3887L8.77734 4.21095C8.47813 3.92324 8.0012 3.93095 7.71191 4.22853C7.42271 4.52628 7.43043 5.00118 7.72949 5.28908L14.7061 12L7.72949 18.711C7.43042 18.9989 7.42271 19.4737 7.71191 19.7715C8.0012 20.0691 8.47813 20.0768 8.77734 19.7891L16.2402 12.6113L16.3008 12.5459Z" fill="currentColor"/>`,
  duotone: `<path d="M16.3007 11.4541C16.5664 11.769 16.5664 12.2311 16.3007 12.5459L16.2398 12.6113L8.77764 19.7891C8.47843 20.077 8.00121 20.0692 7.71189 19.7716C7.42265 19.4738 7.43048 18.9989 7.72955 18.711L14.706 12L7.72955 5.28899C7.43048 5.00108 7.42265 4.52618 7.71189 4.22843C8.00121 3.93081 8.47843 3.92303 8.77764 4.21086L16.2398 11.3887L16.3007 11.4541Z" fill="currentColor"/>
<path d="M8.5 18.7586L8.5 5.24142C8.5 5.15233 8.60771 5.10771 8.67071 5.17071L15.4293 11.9293C15.4683 11.9683 15.4683 12.0317 15.4293 12.0707L8.67071 18.8293C8.60771 18.8923 8.5 18.8477 8.5 18.7586Z" fill="currentColor" fill-opacity="0.2"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * ChevronRight icon
 * Variants: outline, fill, duotone
 */
export function ChevronRight({
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

ChevronRight.displayName = "ChevronRight";
ChevronRight.variants = AVAILABLE;
