import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path fill-rule="evenodd" clip-rule="evenodd" d="M7 7C9.41892 7 11.4361 8.71781 11.8994 11H21C21.5523 11 22 11.4477 22 12V15C22 15.5523 21.5523 16 21 16C20.4477 16 20 15.5523 20 15V13H19V16C19 16.5523 18.5523 17 18 17C17.4477 17 17 16.5523 17 16V13H11.8994C11.4361 15.2822 9.41892 17 7 17C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7ZM7 9C5.34315 9 4 10.3431 4 12C4 13.6569 5.34315 15 7 15C8.65685 15 10 13.6569 10 12C10 10.3431 8.65685 9 7 9Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M7 7C9.41892 7 11.4361 8.71781 11.8994 11H21C21.5523 11 22 11.4477 22 12V15C22 15.5523 21.5523 16 21 16C20.4477 16 20 15.5523 20 15V13H19V16C19 16.5523 18.5523 17 18 17C17.4477 17 17 16.5523 17 16V13H11.8994C11.4361 15.2822 9.41892 17 7 17C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7ZM7 9C5.34315 9 4 10.3431 4 12C4 13.6569 5.34315 15 7 15C8.65685 15 10 13.6569 10 12C10 10.3431 8.65685 9 7 9Z" fill="currentColor"/>`,
  duotone: `<path d="M12 12C12 14.7614 9.76142 17 7 17C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7C9.76142 7 12 9.23858 12 12Z" fill="currentColor" fill-opacity="0.2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 7C9.41892 7 11.4361 8.71781 11.8994 11H21C21.5523 11 22 11.4477 22 12V15C22 15.5523 21.5523 16 21 16C20.4477 16 20 15.5523 20 15V13H19V16C19 16.5523 18.5523 17 18 17C17.4477 17 17 16.5523 17 16V13H11.8994C11.4361 15.2822 9.41892 17 7 17C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7ZM7 9C5.34315 9 4 10.3431 4 12C4 13.6569 5.34315 15 7 15C8.65685 15 10 13.6569 10 12C10 10.3431 8.65685 9 7 9Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Key icon
 * Variants: outline, fill, duotone
 */
export function Key({
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

Key.displayName = "Key";
Key.variants = AVAILABLE;
