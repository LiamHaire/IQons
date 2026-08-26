import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M16.25 10.25C15.8358 10.25 15.5 10.5858 15.5 11C15.5 11.4142 15.8358 11.75 16.25 11.75H18.25C18.6642 11.75 19 11.4142 19 11C19 10.5858 18.6642 10.25 18.25 10.25H16.25Z" fill="currentColor"/>
<path d="M16.25 7.25C15.8358 7.25 15.5 7.58579 15.5 8C15.5 8.41421 15.8358 8.75 16.25 8.75H18.25C18.6642 8.75 19 8.41421 19 8C19 7.58579 18.6642 7.25 18.25 7.25H16.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4ZM20 5.5C20.2761 5.5 20.5 5.72386 20.5 6V18C20.5 18.2761 20.2761 18.5 20 18.5H14.25V5.5H20ZM12.75 18.5H4C3.72386 18.5 3.5 18.2761 3.5 18V6C3.5 5.72386 3.72386 5.5 4 5.5H12.75V18.5Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M4 4L3.7959 4.01074C2.78722 4.113 2 4.96435 2 6V18C2 19.0357 2.78722 19.887 3.7959 19.9893L4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4ZM12.75 18.5H4C3.72386 18.5 3.5 18.2761 3.5 18V6C3.5 5.72386 3.72386 5.5 4 5.5H12.75V18.5ZM18.25 10.5C18.6642 10.5 19 10.8358 19 11.25C19 11.6642 18.6642 12 18.25 12H16.25C15.8358 12 15.5 11.6642 15.5 11.25C15.5 10.8358 15.8358 10.5 16.25 10.5H18.25ZM18.25 7C18.6642 7 19 7.33579 19 7.75C19 8.16421 18.6642 8.5 18.25 8.5H16.25C15.8358 8.5 15.5 8.16421 15.5 7.75C15.5 7.33579 15.8358 7 16.25 7H18.25Z" fill="currentColor"/>`,
  duotone: `<path d="M22 6C22 4.89543 21.1046 4 20 4H13V20H20C21.1046 20 22 19.1046 22 18V6Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M16.25 10.25C15.8358 10.25 15.5 10.5858 15.5 11C15.5 11.4142 15.8358 11.75 16.25 11.75H18.25C18.6642 11.75 19 11.4142 19 11C19 10.5858 18.6642 10.25 18.25 10.25H16.25Z" fill="currentColor"/>
<path d="M16.25 7.25C15.8358 7.25 15.5 7.58579 15.5 8C15.5 8.41421 15.8358 8.75 16.25 8.75H18.25C18.6642 8.75 19 8.41421 19 8C19 7.58579 18.6642 7.25 18.25 7.25H16.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4ZM20 5.5C20.2761 5.5 20.5 5.72386 20.5 6V18C20.5 18.2761 20.2761 18.5 20 18.5H14.25V5.5H20ZM12.75 18.5H4C3.72386 18.5 3.5 18.2761 3.5 18V6C3.5 5.72386 3.72386 5.5 4 5.5H12.75V18.5Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * SidebarRight icon
 * Variants: outline, fill, duotone
 */
export function SidebarRight({
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

SidebarRight.displayName = "SidebarRight";
SidebarRight.variants = AVAILABLE;
