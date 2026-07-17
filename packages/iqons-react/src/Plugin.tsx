import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path fill-rule="evenodd" clip-rule="evenodd" d="M15 1C15.4142 1 15.75 1.33579 15.75 1.75V7H20.25C20.6642 7 21 7.33579 21 7.75C21 8.16421 20.6642 8.5 20.25 8.5H19V15C19 17.2091 17.2091 19 15 19H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V19H9C6.79086 19 5 17.2091 5 15V8.5H3.75C3.33579 8.5 3 8.16421 3 7.75C3 7.33579 3.33579 7 3.75 7H8.25V1.75C8.25 1.33579 8.58579 1 9 1C9.41421 1 9.75 1.33579 9.75 1.75V7H14.25V1.75C14.25 1.33579 14.5858 1 15 1ZM6.5 15C6.5 16.3807 7.61929 17.5 9 17.5H15C16.3807 17.5 17.5 16.3807 17.5 15V8.5H6.5V15Z" fill="currentColor"/>`,
  fill: `<path d="M15 1C15.4142 1 15.75 1.33579 15.75 1.75V7H20.25C20.6642 7 21 7.33579 21 7.75C21 8.16421 20.6642 8.5 20.25 8.5H19V15C19 17.2091 17.2091 19 15 19H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V19H9C6.79086 19 5 17.2091 5 15V8.5H3.75C3.33579 8.5 3 8.16421 3 7.75C3 7.33579 3.33579 7 3.75 7H8.25V1.75C8.25 1.33579 8.58579 1 9 1C9.41421 1 9.75 1.33579 9.75 1.75V7H14.25V1.75C14.25 1.33579 14.5858 1 15 1Z" fill="currentColor"/>`,
  duotone: `<path d="M19 15C19 17.2091 17.2091 19 15 19L9 19C6.79086 19 5 17.2091 5 15L5 7L19 7L19 15Z" fill="currentColor" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 1C15.4142 1 15.75 1.33579 15.75 1.75V7H20.25C20.6642 7 21 7.33579 21 7.75C21 8.16421 20.6642 8.5 20.25 8.5H19V15C19 17.2091 17.2091 19 15 19H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V19H9C6.79086 19 5 17.2091 5 15V8.5H3.75C3.33579 8.5 3 8.16421 3 7.75C3 7.33579 3.33579 7 3.75 7H8.25V1.75C8.25 1.33579 8.58579 1 9 1C9.41421 1 9.75 1.33579 9.75 1.75V7H14.25V1.75C14.25 1.33579 14.5858 1 15 1ZM6.5 15C6.5 16.3807 7.61929 17.5 9 17.5H15C16.3807 17.5 17.5 16.3807 17.5 15V8.5H6.5V15Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Plugin icon
 * Variants: outline, fill, duotone
 */
export function Plugin({
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

Plugin.displayName = "Plugin";
Plugin.variants = AVAILABLE;
