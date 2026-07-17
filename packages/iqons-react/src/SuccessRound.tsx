import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M8 12L10.4928 14.9914C10.4967 14.996 10.5036 14.9962 10.5077 14.9919L16 9.25" stroke="currentColor" stroke- stroke-linecap="round"/>
<circle cx="12" cy="12" r="10.25" stroke="currentColor" stroke- />`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM16.5186 8.70801C16.2192 8.42176 15.7443 8.4322 15.458 8.73145L10.5381 13.874L8.57617 11.5195C8.31096 11.2015 7.83766 11.1587 7.51953 11.4238C7.20155 11.689 7.15876 12.1623 7.42383 12.4805L9.91699 15.4717C10.2074 15.8199 10.7363 15.8383 11.0498 15.5107L16.542 9.76855C16.8283 9.46925 16.8178 8.99433 16.5186 8.70801Z" fill="currentColor"/>`,
  duotone: `<circle cx="12" cy="12" r="11" fill="currentColor" fill-opacity="0.2"/>
<path d="M8 12L10.4928 14.9914C10.4967 14.996 10.5036 14.9962 10.5077 14.9919L16 9.25" stroke="currentColor" stroke- stroke-linecap="round"/>
<circle cx="12" cy="12" r="10.25" stroke="currentColor" stroke- />`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * SuccessRound icon
 * Variants: outline, fill, duotone
 */
export function SuccessRound({
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

SuccessRound.displayName = "SuccessRound";
SuccessRound.variants = AVAILABLE;
