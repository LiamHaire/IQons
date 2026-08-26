import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M18.25 5C18.6642 5 19 5.33579 19 5.75C19 6.16421 18.6642 6.5 18.25 6.5H5.75C5.33579 6.5 5 6.16421 5 5.75C5 5.33579 5.33579 5 5.75 5H18.25Z" fill="currentColor"/>
<path d="M18.25 17.5C18.6642 17.5 19 17.8358 19 18.25C19 18.6642 18.6642 19 18.25 19H5.75C5.33579 19 5 18.6642 5 18.25C5 17.8358 5.33579 17.5 5.75 17.5H18.25Z" fill="currentColor"/>
<path d="M18.25 11.25C18.6642 11.25 19 11.5858 19 12C19 12.4142 18.6642 12.75 18.25 12.75H5.75C5.33579 12.75 5 12.4142 5 12C5 11.5858 5.33579 11.25 5.75 11.25H18.25Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M19 3C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19ZM6.75 16.5C6.33579 16.5 6 16.8358 6 17.25C6 17.6642 6.33579 18 6.75 18H17.25C17.6642 18 18 17.6642 18 17.25C18 16.8358 17.6642 16.5 17.25 16.5H6.75ZM6.75 11.25C6.33579 11.25 6 11.5858 6 12C6 12.4142 6.33579 12.75 6.75 12.75H17.25C17.6642 12.75 18 12.4142 18 12C18 11.5858 17.6642 11.25 17.25 11.25H6.75ZM6.75 6C6.33579 6 6 6.33579 6 6.75C6 7.16421 6.33579 7.5 6.75 7.5H17.25C17.6642 7.5 18 7.16421 18 6.75C18 6.33579 17.6642 6 17.25 6H6.75Z" fill="currentColor"/>`,
  duotone: `<path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M17.25 6C17.6642 6 18 6.33579 18 6.75C18 7.16421 17.6642 7.5 17.25 7.5H6.75C6.33579 7.5 6 7.16421 6 6.75C6 6.33579 6.33579 6 6.75 6H17.25Z" fill="currentColor"/>
<path d="M17.25 16.5C17.6642 16.5 18 16.8358 18 17.25C18 17.6642 17.6642 18 17.25 18H6.75C6.33579 18 6 17.6642 6 17.25C6 16.8358 6.33579 16.5 6.75 16.5H17.25Z" fill="currentColor"/>
<path d="M17.25 11.25C17.6642 11.25 18 11.5858 18 12C18 12.4142 17.6642 12.75 17.25 12.75H6.75C6.33579 12.75 6 12.4142 6 12C6 11.5858 6.33579 11.25 6.75 11.25H17.25Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Menu icon
 * Variants: outline, fill, duotone
 */
export function Menu({
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

Menu.displayName = "Menu";
Menu.variants = AVAILABLE;
