import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C14.4183 2 18 5.58172 18 10C18 11.8486 17.3703 13.5487 16.3174 14.9033L21.707 20.293C22.0976 20.6835 22.0976 21.3165 21.707 21.707C21.3165 22.0976 20.6835 22.0976 20.293 21.707L14.9033 16.3174C13.5487 17.3703 11.8486 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2ZM10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 13.5899 6.41015 16.5 10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5Z" fill="currentColor"/>`,
  fill: `<path d="M11 7.5C12.933 7.5 14.5 9.067 14.5 11C14.5 12.933 12.933 14.5 11 14.5C9.067 14.5 7.5 12.933 7.5 11C7.5 9.067 9.067 7.5 11 7.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 3C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19ZM11 6C8.23858 6 6 8.23858 6 11C6 13.7614 8.23858 16 11 16C12.0191 16 12.9664 15.6944 13.7568 15.1709L16.293 17.707C16.6835 18.0976 17.3165 18.0976 17.707 17.707C18.0976 17.3165 18.0976 16.6835 17.707 16.293L15.1709 13.7568C15.6944 12.9664 16 12.0191 16 11C16 8.23858 13.7614 6 11 6Z" fill="currentColor"/>`,
  duotone: `<path d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z" fill="currentColor" fill-opacity="0.2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C14.4183 2 18 5.58172 18 10C18 11.8486 17.3703 13.5487 16.3174 14.9033L21.707 20.293C22.0976 20.6835 22.0976 21.3165 21.707 21.707C21.3165 22.0976 20.6835 22.0976 20.293 21.707L14.9033 16.3174C13.5487 17.3703 11.8486 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2ZM10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 13.5899 6.41015 16.5 10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Search icon
 * Variants: outline, fill, duotone
 */
export function Search({
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

Search.displayName = "Search";
Search.variants = AVAILABLE;
