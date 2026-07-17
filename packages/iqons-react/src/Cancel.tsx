import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M4.46972 4.46973C4.76262 4.17684 5.23738 4.17684 5.53027 4.46973L19.5303 18.4697C19.8232 18.7626 19.8232 19.2374 19.5303 19.5303C19.2374 19.8232 18.7626 19.8232 18.4697 19.5303L4.46972 5.53028C4.17683 5.23738 4.17683 4.76262 4.46972 4.46973Z" fill="currentColor"/>
<path d="M18.4697 4.46973C18.7626 4.17684 19.2374 4.17684 19.5303 4.46973C19.8232 4.76262 19.8232 5.23738 19.5303 5.53028L5.53027 19.5303C5.23738 19.8232 4.76262 19.8232 4.46972 19.5303C4.17683 19.2374 4.17683 18.7626 4.46972 18.4697L18.4697 4.46973Z" fill="currentColor"/>`,
  fill: `<path d="M4.46973 4.46973C4.76262 4.17684 5.23738 4.17684 5.53028 4.46973L19.5303 18.4697C19.8232 18.7626 19.8232 19.2374 19.5303 19.5303C19.2374 19.8232 18.7626 19.8232 18.4697 19.5303L4.46973 5.53028C4.17684 5.23738 4.17684 4.76262 4.46973 4.46973Z" fill="currentColor"/>
<path d="M18.4697 4.46973C18.7626 4.17684 19.2374 4.17684 19.5303 4.46973C19.8232 4.76262 19.8232 5.23738 19.5303 5.53028L5.53028 19.5303C5.23738 19.8232 4.76262 19.8232 4.46973 19.5303C4.17684 19.2374 4.17684 18.7626 4.46973 18.4697L18.4697 4.46973Z" fill="currentColor"/>`,
  duotone: `<path d="M6 8C6 6.89543 6.89543 6 8 6H16C17.1046 6 18 6.89543 18 8V16C18 17.1046 17.1046 18 16 18H8C6.89543 18 6 17.1046 6 16V8Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M4.46973 4.46973C4.76262 4.17684 5.23738 4.17684 5.53028 4.46973L19.5303 18.4697C19.8232 18.7626 19.8232 19.2374 19.5303 19.5303C19.2374 19.8232 18.7626 19.8232 18.4697 19.5303L4.46973 5.53028C4.17684 5.23738 4.17684 4.76262 4.46973 4.46973Z" fill="currentColor"/>
<path d="M18.4697 4.46973C18.7626 4.17684 19.2374 4.17684 19.5303 4.46973C19.8232 4.76262 19.8232 5.23738 19.5303 5.53028L5.53028 19.5303C5.23738 19.8232 4.76262 19.8232 4.46973 19.5303C4.17684 19.2374 4.17684 18.7626 4.46973 18.4697L18.4697 4.46973Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Cancel icon
 * Variants: outline, fill, duotone
 */
export function Cancel({
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

Cancel.displayName = "Cancel";
Cancel.variants = AVAILABLE;
