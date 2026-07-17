import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M12 1.75C17.6609 1.75 22.25 6.33908 22.25 12C22.25 17.6609 17.6609 22.25 12 22.25H5C3.20507 22.25 1.75 20.7949 1.75 19V12C1.75 6.33908 6.33908 1.75 12 1.75Z" stroke="currentColor" stroke- />
<path d="M8 10H16" stroke="currentColor" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 14H13" stroke="currentColor" stroke- stroke-linecap="round" stroke-linejoin="round"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23H5C2.79086 23 1 21.2091 1 19V12C1 5.92487 5.92487 1 12 1ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13C13.4142 14.75 13.75 14.4142 13.75 14C13.75 13.5858 13.4142 13.25 13 13.25H8ZM8 9.25C7.58579 9.25 7.25 9.58579 7.25 10C7.25 10.4142 7.58579 10.75 8 10.75H16C16.4142 10.75 16.75 10.4142 16.75 10C16.75 9.58579 16.4142 9.25 16 9.25H8Z" fill="currentColor"/>`,
  duotone: `<path d="M12 1.75C17.6609 1.75 22.25 6.33908 22.25 12C22.25 17.6609 17.6609 22.25 12 22.25H5C3.20507 22.25 1.75 20.7949 1.75 19V12C1.75 6.33908 6.33908 1.75 12 1.75Z" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke- />
<path d="M8 10H16" stroke="currentColor" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 14H13" stroke="currentColor" stroke- stroke-linecap="round" stroke-linejoin="round"/>`,
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
