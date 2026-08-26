import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M16.7198 7.71979C17.0127 7.4269 17.4874 7.4269 17.7803 7.71979C18.0732 8.01269 18.0732 8.48746 17.7803 8.78034L10.2881 16.2735C9.98471 16.5769 9.49004 16.5686 9.19634 16.2559L6.20317 13.0674C5.91996 12.7656 5.93476 12.2914 6.23638 12.0079C6.53837 11.7244 7.01342 11.7391 7.29692 12.0411L9.76665 14.6719L16.7198 7.71979Z" fill="currentColor"/>`,
  fill: `<path d="M16.7198 7.71979C17.0127 7.4269 17.4874 7.4269 17.7803 7.71979C18.0732 8.01269 18.0732 8.48746 17.7803 8.78034L10.2881 16.2735C9.98471 16.5769 9.49004 16.5686 9.19634 16.2559L6.20317 13.0674C5.91996 12.7656 5.93476 12.2914 6.23638 12.0079C6.53837 11.7244 7.01342 11.7391 7.29692 12.0411L9.76665 14.6719L16.7198 7.71979Z" fill="currentColor"/>`,
  duotone: `<path d="M16.7198 7.71979C17.0127 7.4269 17.4874 7.4269 17.7803 7.71979C18.0732 8.01269 18.0732 8.48746 17.7803 8.78034L10.2881 16.2735C9.98471 16.5769 9.49004 16.5686 9.19634 16.2559L6.20317 13.0674C5.91996 12.7656 5.93476 12.2914 6.23638 12.0079C6.53837 11.7244 7.01342 11.7391 7.29692 12.0411L9.76665 14.6719L16.7198 7.71979Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Check icon
 * Variants: outline, fill, duotone
 */
export function Check({
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

Check.displayName = "Check";
Check.variants = AVAILABLE;
