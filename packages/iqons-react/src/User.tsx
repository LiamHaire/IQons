import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C15.7279 1 18.75 4.02208 18.75 7.75C18.75 9.93145 17.7139 11.8696 16.1084 13.1035C18.8925 13.6236 21 16.0651 21 19V23H3V19C3 16.0654 5.10702 13.624 7.89062 13.1035C6.28545 11.8695 5.25 9.93117 5.25 7.75C5.25 4.02208 8.27208 1 12 1ZM9 14.5C6.51472 14.5 4.5 16.5147 4.5 19V21.5H19.5V19C19.5 16.5147 17.4853 14.5 15 14.5H9ZM12 2.5C9.1005 2.5 6.75 4.85051 6.75 7.75C6.75 10.6495 9.1005 13 12 13C14.8995 13 17.25 10.6495 17.25 7.75C17.25 4.85051 14.8995 2.5 12 2.5Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C15.7279 1 18.75 4.02208 18.75 7.75C18.75 9.93145 17.7139 11.8696 16.1084 13.1035C18.8925 13.6236 21 16.0651 21 19V23H3V19C3 16.0654 5.10702 13.624 7.89062 13.1035C6.28545 11.8695 5.25 9.93117 5.25 7.75C5.25 4.02208 8.27208 1 12 1ZM12 3C9.37665 3 7.25 5.12665 7.25 7.75C7.25 10.3734 9.37665 12.5 12 12.5C14.6234 12.5 16.75 10.3734 16.75 7.75C16.75 5.12665 14.6234 3 12 3Z" fill="currentColor"/>`,
  duotone: `<path d="M3 19C3 15.6863 5.68629 13 9 13H15C18.3137 13 21 15.6863 21 19V23H3V19Z" fill="currentColor" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C15.7279 1 18.75 4.02208 18.75 7.75C18.75 9.93145 17.7139 11.8696 16.1084 13.1035C18.8925 13.6236 21 16.0651 21 19V23H3V19C3 16.0654 5.10702 13.624 7.89062 13.1035C6.28545 11.8695 5.25 9.93117 5.25 7.75C5.25 4.02208 8.27208 1 12 1ZM9 14.5C6.51472 14.5 4.5 16.5147 4.5 19V21.5H19.5V19C19.5 16.5147 17.4853 14.5 15 14.5H9ZM12 2.5C9.1005 2.5 6.75 4.85051 6.75 7.75C6.75 10.6495 9.1005 13 12 13C14.8995 13 17.25 10.6495 17.25 7.75C17.25 4.85051 14.8995 2.5 12 2.5Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * User icon
 * Variants: outline, fill, duotone
 */
export function User({
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

User.displayName = "User";
User.variants = AVAILABLE;
