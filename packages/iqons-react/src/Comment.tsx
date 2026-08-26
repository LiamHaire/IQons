import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M13 13.5C13.4142 13.5 13.75 13.8358 13.75 14.25C13.75 14.6642 13.4142 15 13 15H8C7.58579 15 7.25 14.6642 7.25 14.25C7.25 13.8358 7.58579 13.5 8 13.5H13Z" fill="currentColor"/>
<path d="M16 10C16.4142 10 16.75 10.3358 16.75 10.75C16.75 11.1642 16.4142 11.5 16 11.5H8C7.58579 11.5 7.25 11.1642 7.25 10.75C7.25 10.3358 7.58579 10 8 10H16Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22H4L3.7959 21.9893C2.85435 21.8938 2.1062 21.1457 2.01074 20.2041L2 20V12C2 6.47715 6.47715 2 12 2ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12V20C3.5 20.2761 3.72386 20.5 4 20.5H12C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22H4C2.89543 22 2 21.1046 2 20V12C2 6.47715 6.47715 2 12 2ZM8 13.5C7.58579 13.5 7.25 13.8358 7.25 14.25C7.25 14.6642 7.58579 15 8 15H13C13.4142 15 13.75 14.6642 13.75 14.25C13.75 13.8358 13.4142 13.5 13 13.5H8ZM8 10C7.58579 10 7.25 10.3358 7.25 10.75C7.25 11.1642 7.58579 11.5 8 11.5H16C16.4142 11.5 16.75 11.1642 16.75 10.75C16.75 10.3358 16.4142 10 16 10H8Z" fill="currentColor"/>`,
  duotone: `<path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22H4C2.89543 22 2 21.1046 2 20V12C2 6.47715 6.47715 2 12 2Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M13 13.5C13.4142 13.5 13.75 13.8358 13.75 14.25C13.75 14.6642 13.4142 15 13 15H8C7.58579 15 7.25 14.6642 7.25 14.25C7.25 13.8358 7.58579 13.5 8 13.5H13Z" fill="currentColor"/>
<path d="M16 10C16.4142 10 16.75 10.3358 16.75 10.75C16.75 11.1642 16.4142 11.5 16 11.5H8C7.58579 11.5 7.25 11.1642 7.25 10.75C7.25 10.3358 7.58579 10 8 10H16Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22H4L3.7959 21.9893C2.85435 21.8938 2.1062 21.1457 2.01074 20.2041L2 20V12C2 6.47715 6.47715 2 12 2ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12V20C3.5 20.2761 3.72386 20.5 4 20.5H12C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Comment icon
 * Variants: outline, fill, duotone
 */
export function Comment({
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

Comment.displayName = "Comment";
Comment.variants = AVAILABLE;
