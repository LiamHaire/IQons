import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M22.25 19.5C22.6642 19.5 23 19.8358 23 20.25C23 20.6642 22.6642 21 22.25 21H1.75C1.33579 21 1 20.6642 1 20.25C1 19.8358 1.33579 19.5 1.75 19.5H22.25Z" fill="currentColor"/>
<path d="M15.5 10.5L9.5 13.5V7.5L15.5 10.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 3C22.1046 3 23 3.89543 23 5V16C23 17.1046 22.1046 18 21 18H3L2.7959 17.9893C1.78722 17.887 1 17.0357 1 16V5C1 3.89543 1.89543 3 3 3H21ZM3 4.5C2.72386 4.5 2.5 4.72386 2.5 5V16C2.5 16.2761 2.72386 16.5 3 16.5H21C21.2761 16.5 21.5 16.2761 21.5 16V5C21.5 4.72386 21.2761 4.5 21 4.5H3Z" fill="currentColor"/>`,
  fill: `<path d="M22.25 19.5C22.6642 19.5 23 19.8358 23 20.25C23 20.6642 22.6642 21 22.25 21H1.75C1.33579 21 1 20.6642 1 20.25C1 19.8358 1.33579 19.5 1.75 19.5H22.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 3C22.1046 3 23 3.89543 23 5V16C23 17.1046 22.1046 18 21 18H3C1.89543 18 1 17.1046 1 16V5C1 3.89543 1.89543 3 3 3H21ZM9.5 13.5L15.5 10.5L9.5 7.5V13.5Z" fill="currentColor"/>`,
  duotone: `<path d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V15C22 16.1046 21.1046 17 20 17H4C2.89543 17 2 16.1046 2 15V6Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M22.25 19.5C22.6642 19.5 23 19.8358 23 20.25C23 20.6642 22.6642 21 22.25 21H1.75C1.33579 21 1 20.6642 1 20.25C1 19.8358 1.33579 19.5 1.75 19.5H22.25Z" fill="currentColor"/>
<path d="M15.5 10.5L9.5 13.5V7.5L15.5 10.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 3C22.1046 3 23 3.89543 23 5V16C23 17.1046 22.1046 18 21 18H3L2.7959 17.9893C1.78722 17.887 1 17.0357 1 16V5C1 3.89543 1.89543 3 3 3H21ZM3 4.5C2.72386 4.5 2.5 4.72386 2.5 5V16C2.5 16.2761 2.72386 16.5 3 16.5H21C21.2761 16.5 21.5 16.2761 21.5 16V5C21.5 4.72386 21.2761 4.5 21 4.5H3Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Video icon
 * Variants: outline, fill, duotone
 */
export function Video({
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

Video.displayName = "Video";
Video.variants = AVAILABLE;
