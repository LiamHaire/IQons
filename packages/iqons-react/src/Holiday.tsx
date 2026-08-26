import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path fill-rule="evenodd" clip-rule="evenodd" d="M14.0537 4.01074C15.0623 4.11309 15.8496 4.96442 15.8496 6V7H20L20.2041 7.01074C21.2128 7.113 22 7.96435 22 9V18C22 19.0357 21.2128 19.887 20.2041 19.9893L20 20H4C2.96435 20 2.113 19.2128 2.01074 18.2041L2 18V9C2 7.89543 2.89543 7 4 7H8.15039V6C8.15039 4.9645 8.93687 4.11321 9.94531 4.01074L10.1494 4H13.8496L14.0537 4.01074ZM4 8.5C3.72386 8.5 3.5 8.72386 3.5 9V18C3.5 18.2761 3.72386 18.5 4 18.5H5.75V8.5H4ZM18.25 18.5H20C20.2761 18.5 20.5 18.2761 20.5 18V9C20.5 8.72386 20.2761 8.5 20 8.5H18.25V18.5ZM7.25 18.5H16.75V8.5H7.25V18.5ZM10.1494 5.5C9.87348 5.50024 9.64941 5.724 9.64941 6V7H14.3496V6C14.3496 5.72392 14.1257 5.50011 13.8496 5.5H10.1494Z" fill="currentColor"/>`,
  fill: `<path d="M5.25 20H4C2.89543 20 2 19.1046 2 18V9C2 7.89543 2.89543 7 4 7H5.25V20Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.0537 4.01074C15.0623 4.11309 15.8496 4.96442 15.8496 6V7H17.25V20H6.75V7H8.15039V6C8.15039 4.9645 8.93687 4.11321 9.94531 4.01074L10.1494 4H13.8496L14.0537 4.01074ZM10.1494 5.5C9.87348 5.50024 9.64941 5.724 9.64941 6V7H14.3496V6C14.3496 5.72392 14.1257 5.50011 13.8496 5.5H10.1494Z" fill="currentColor"/>
<path d="M20 7C21.1046 7 22 7.89543 22 9V18C22 19.1046 21.1046 20 20 20H18.75V7H20Z" fill="currentColor"/>`,
  duotone: `<path d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V9Z" fill="currentColor" fill-opacity="0.2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.0537 4.01074C15.0623 4.11309 15.8496 4.96442 15.8496 6V7H20L20.2041 7.01074C21.2128 7.113 22 7.96435 22 9V18C22 19.0357 21.2128 19.887 20.2041 19.9893L20 20H4C2.96435 20 2.113 19.2128 2.01074 18.2041L2 18V9C2 7.89543 2.89543 7 4 7H8.15039V6C8.15039 4.9645 8.93687 4.11321 9.94531 4.01074L10.1494 4H13.8496L14.0537 4.01074ZM4 8.5C3.72386 8.5 3.5 8.72386 3.5 9V18C3.5 18.2761 3.72386 18.5 4 18.5H5.75V8.5H4ZM18.25 18.5H20C20.2761 18.5 20.5 18.2761 20.5 18V9C20.5 8.72386 20.2761 8.5 20 8.5H18.25V18.5ZM7.25 18.5H16.75V8.5H7.25V18.5ZM10.1494 5.5C9.87348 5.50024 9.64941 5.724 9.64941 6V7H14.3496V6C14.3496 5.72392 14.1257 5.50011 13.8496 5.5H10.1494Z" fill="currentColor"/>`,
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
