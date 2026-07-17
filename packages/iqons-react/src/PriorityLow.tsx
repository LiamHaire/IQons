import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<circle cx="11" cy="11" r="10.25" transform="matrix(1 0 0 -1 1 23)" stroke="currentColor" stroke- />
<path d="M7.75 10.25L11.9293 14.4293C11.9683 14.4683 12.0317 14.4683 12.0707 14.4293L16.25 10.25" stroke="currentColor" stroke- stroke-linecap="round"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12.5361 15.0176C12.2245 15.2717 11.7755 15.2717 11.4639 15.0176L11.3994 14.96L7.21973 10.7803C6.92683 10.4874 6.92683 10.0126 7.21973 9.71973C7.51262 9.42687 7.98739 9.42685 8.28027 9.71973L12 13.4395L15.7197 9.71973C16.0126 9.42687 16.4874 9.42685 16.7803 9.71973C17.0731 10.0126 17.0731 10.4874 16.7803 10.7803L12.6006 14.96L12.5361 15.0176Z" fill="currentColor"/>`,
  duotone: `<circle cx="12" cy="12" r="11" transform="rotate(-180 12 12)" fill="currentColor" fill-opacity="0.2"/>
<circle cx="11" cy="11" r="10.25" transform="matrix(1 0 0 -1 1 23)" stroke="currentColor" stroke- />
<path d="M7.75 10.25L11.9293 14.4293C11.9683 14.4683 12.0317 14.4683 12.0707 14.4293L16.25 10.25" stroke="currentColor" stroke- stroke-linecap="round"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * PriorityLow icon
 * Variants: outline, fill, duotone
 */
export function PriorityLow({
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

PriorityLow.displayName = "PriorityLow";
PriorityLow.variants = AVAILABLE;
