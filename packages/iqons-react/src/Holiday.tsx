import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path fill-rule="evenodd" clip-rule="evenodd" d="M14.0537 3.01074C15.0623 3.11309 15.8496 3.96442 15.8496 5V6H21C22.1046 6 23 6.89543 23 8V19C23 20.1046 22.1046 21 21 21H3L2.7959 20.9893C1.78722 20.887 1 20.0357 1 19V8C1 6.89543 1.89543 6 3 6H8.15039V5C8.15039 3.89543 9.04585 3 10.1504 3H13.8496L14.0537 3.01074ZM3 7.5C2.72386 7.5 2.5 7.72386 2.5 8V19C2.5 19.2761 2.72386 19.5 3 19.5H5.75V7.5H3ZM18.25 19.5H21C21.2761 19.5 21.5 19.2761 21.5 19V8C21.5 7.72386 21.2761 7.5 21 7.5H18.25V19.5ZM7.25 19.5H16.75V7.5H7.25V19.5ZM10.1504 4.5C9.87426 4.5 9.65039 4.72386 9.65039 5V6H14.3496V5C14.3496 4.72392 14.1257 4.50011 13.8496 4.5H10.1504Z" fill="currentColor"/>`,
  fill: `<path d="M5.75 21H3C1.89543 21 1 20.1046 1 19V8C1 6.89543 1.89543 6 3 6H5.75V21Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.0537 3.01074C15.0623 3.11309 15.8496 3.96442 15.8496 5V6H16.75V21H7.25V6H8.15039V5C8.15039 3.96435 8.93764 3.113 9.94629 3.01074L10.1504 3H13.8496L14.0537 3.01074ZM10.1504 4.5C9.87426 4.5 9.65039 4.72386 9.65039 5V6H14.3496V5C14.3496 4.72392 14.1257 4.50011 13.8496 4.5H10.1504Z" fill="currentColor"/>
<path d="M21 6C22.1046 6 23 6.89543 23 8V19C23 20.1046 22.1046 21 21 21H18.25V6H21Z" fill="currentColor"/>`,
  duotone: `<path d="M2 8.5C2 7.39543 2.89543 6.5 4 6.5H20C21.1046 6.5 22 7.39543 22 8.5V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V8.5Z" fill="currentColor" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.0537 3.01074C15.0623 3.11309 15.8496 3.96442 15.8496 5V6H21C22.1046 6 23 6.89543 23 8V19C23 20.1046 22.1046 21 21 21H3L2.7959 20.9893C1.78722 20.887 1 20.0357 1 19V8C1 6.89543 1.89543 6 3 6H8.15039V5C8.15039 3.89543 9.04585 3 10.1504 3H13.8496L14.0537 3.01074ZM3 7.5C2.72386 7.5 2.5 7.72386 2.5 8V19C2.5 19.2761 2.72386 19.5 3 19.5H5.75V7.5H3ZM18.25 19.5H21C21.2761 19.5 21.5 19.2761 21.5 19V8C21.5 7.72386 21.2761 7.5 21 7.5H18.25V19.5ZM7.25 19.5H16.75V7.5H7.25V19.5ZM10.1504 4.5C9.87426 4.5 9.65039 4.72386 9.65039 5V6H14.3496V5C14.3496 4.72392 14.1257 4.50011 13.8496 4.5H10.1504Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Holiday icon
 * Variants: outline, fill, duotone
 */
export function Holiday({
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

Holiday.displayName = "Holiday";
Holiday.variants = AVAILABLE;
