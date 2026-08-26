import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M11.4698 5.21978C11.7627 4.92689 12.2374 4.92689 12.5303 5.21978L17.0303 9.71978C17.3232 10.0127 17.3232 10.4875 17.0303 10.7803C16.7375 11.0732 16.2627 11.0732 15.9698 10.7803L12.7501 7.5606V18.2501C12.75 18.6642 12.4142 19 12.0001 19.0001C11.5859 19.0001 11.2501 18.6642 11.2501 18.2501V7.5606L8.03034 10.7803C7.73746 11.0732 7.26269 11.0732 6.96979 10.7803C6.6769 10.4874 6.6769 10.0127 6.96979 9.71978L11.4698 5.21978Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M19 3C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19ZM12.5303 6.21973C12.2374 5.9269 11.7626 5.92686 11.4697 6.21973L6.96973 10.7197C6.67686 11.0126 6.6769 11.4874 6.96973 11.7803C7.26262 12.0731 7.7374 12.0731 8.03027 11.7803L11.25 8.56055V17.25C11.25 17.6642 11.5858 18 12 18C12.4142 18 12.75 17.6642 12.75 17.25V8.56055L15.9697 11.7803C16.2626 12.0731 16.7374 12.0731 17.0303 11.7803C17.3231 11.4874 17.3231 11.0126 17.0303 10.7197L12.5303 6.21973Z" fill="currentColor"/>`,
  duotone: `<path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M11.4698 5.21978C11.7627 4.92689 12.2374 4.92689 12.5303 5.21978L17.0303 9.71978C17.3232 10.0127 17.3232 10.4875 17.0303 10.7803C16.7375 11.0732 16.2627 11.0732 15.9698 10.7803L12.7501 7.5606V18.2501C12.75 18.6642 12.4142 19 12.0001 19.0001C11.5859 19.0001 11.2501 18.6642 11.2501 18.2501V7.5606L8.03034 10.7803C7.73746 11.0732 7.26269 11.0732 6.96979 10.7803C6.6769 10.4874 6.6769 10.0127 6.96979 9.71978L11.4698 5.21978Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * ArrowUp icon
 * Variants: outline, fill, duotone
 */
export function ArrowUp({
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

ArrowUp.displayName = "ArrowUp";
ArrowUp.variants = AVAILABLE;
