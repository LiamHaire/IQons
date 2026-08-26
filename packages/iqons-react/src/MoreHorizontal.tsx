import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<circle cx="17.5" cy="12" r="1.5" transform="rotate(90 17.5 12)" fill="currentColor"/>
<circle cx="12" cy="12" r="1.5" transform="rotate(90 12 12)" fill="currentColor"/>
<circle cx="6.5" cy="12" r="1.5" transform="rotate(90 6.5 12)" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M21 19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19L3 5C3 3.89543 3.89543 3 5 3L19 3C20.1046 3 21 3.89543 21 5V19ZM9 12C9 11.1716 8.32843 10.5 7.5 10.5C6.67157 10.5 6 11.1716 6 12C6 12.8284 6.67157 13.5 7.5 13.5C8.32843 13.5 9 12.8284 9 12ZM13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12ZM18 12C18 11.1716 17.3284 10.5 16.5 10.5C15.6716 10.5 15 11.1716 15 12C15 12.8284 15.6716 13.5 16.5 13.5C17.3284 13.5 18 12.8284 18 12Z" fill="currentColor"/>`,
  duotone: `<path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" fill="currentColor" fill-opacity="0.2"/>
<circle cx="16.5" cy="12" r="1.5" transform="rotate(90 16.5 12)" fill="currentColor"/>
<circle cx="12" cy="12" r="1.5" transform="rotate(90 12 12)" fill="currentColor"/>
<circle cx="7.5" cy="12" r="1.5" transform="rotate(90 7.5 12)" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * MoreHorizontal icon
 * Variants: outline, fill, duotone
 */
export function MoreHorizontal({
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

MoreHorizontal.displayName = "MoreHorizontal";
MoreHorizontal.variants = AVAILABLE;
