import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M12 4C12.4142 4 12.75 4.33579 12.75 4.75V11.25H19.25C19.6642 11.25 20 11.5858 20 12C20 12.4142 19.6642 12.75 19.25 12.75H12.75V19.25C12.75 19.6642 12.4142 20 12 20C11.5858 20 11.25 19.6642 11.25 19.25V12.75H4.75C4.33579 12.75 4 12.4142 4 12C4 11.5858 4.33579 11.25 4.75 11.25H11.25V4.75C11.25 4.33579 11.5858 4 12 4Z" fill="currentColor"/>`,
  fill: `<path d="M12 4C12.4142 4 12.75 4.33579 12.75 4.75V11.25H19.25C19.6642 11.25 20 11.5858 20 12C20 12.4142 19.6642 12.75 19.25 12.75H12.75V19.25C12.75 19.6642 12.4142 20 12 20C11.5858 20 11.25 19.6642 11.25 19.25V12.75H4.75C4.33579 12.75 4 12.4142 4 12C4 11.5858 4.33579 11.25 4.75 11.25H11.25V4.75C11.25 4.33579 11.5858 4 12 4Z" fill="currentColor"/>`,
  duotone: `<path d="M6 8C6 6.89543 6.89543 6 8 6H16C17.1046 6 18 6.89543 18 8V16C18 17.1046 17.1046 18 16 18H8C6.89543 18 6 17.1046 6 16V8Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M12 4C12.4142 4 12.75 4.33579 12.75 4.75V11.25H19.25C19.6642 11.25 20 11.5858 20 12C20 12.4142 19.6642 12.75 19.25 12.75H12.75V19.25C12.75 19.6642 12.4142 20 12 20C11.5858 20 11.25 19.6642 11.25 19.25V12.75H4.75C4.33579 12.75 4 12.4142 4 12C4 11.5858 4.33579 11.25 4.75 11.25H11.25V4.75C11.25 4.33579 11.5858 4 12 4Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Add icon
 * Variants: outline, fill, duotone
 */
export function Add({
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

Add.displayName = "Add";
Add.variants = AVAILABLE;
