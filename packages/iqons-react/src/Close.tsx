import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M16 16L8 8" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M8 16L16 8" stroke="currentColor" stroke- stroke-linecap="round"/>
<circle cx="12" cy="12" r="10.25" stroke="currentColor" stroke- />`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM16.5303 7.46973C16.2374 7.1769 15.7626 7.17686 15.4697 7.46973L12 10.9395L8.53027 7.46973C8.23737 7.1769 7.7626 7.17686 7.46973 7.46973C7.17686 7.7626 7.1769 8.23737 7.46973 8.53027L10.9395 12L7.46973 15.4697C7.17686 15.7626 7.1769 16.2374 7.46973 16.5303C7.76262 16.8231 8.2374 16.8231 8.53027 16.5303L12 13.0605L15.4697 16.5303C15.7626 16.8231 16.2374 16.8231 16.5303 16.5303C16.8231 16.2374 16.8231 15.7626 16.5303 15.4697L13.0605 12L16.5303 8.53027C16.8231 8.2374 16.8231 7.76262 16.5303 7.46973Z" fill="currentColor"/>`,
  duotone: `<circle cx="12" cy="12" r="11" fill="currentColor" fill-opacity="0.2"/>
<circle cx="12" cy="12" r="10.25" stroke="currentColor" stroke- />
<path d="M16 16L8 8" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M8 16L16 8" stroke="currentColor" stroke- stroke-linecap="round"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Close icon
 * Variants: outline, fill, duotone
 */
export function Close({
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

Close.displayName = "Close";
Close.variants = AVAILABLE;
