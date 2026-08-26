import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22H4L3.7959 21.9893C2.85435 21.8938 2.1062 21.1457 2.01074 20.2041L2 20V12C2 6.47715 6.47715 2 12 2ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12V20C3.5 20.2761 3.72386 20.5 4 20.5H12C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5Z" fill="currentColor"/>
<circle cx="8.5" cy="12" r="1" fill="currentColor"/>
<circle cx="12" cy="12" r="1" fill="currentColor"/>
<circle cx="15.5" cy="12" r="1" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22H4C2.89543 22 2 21.1046 2 20V12C2 6.47715 6.47715 2 12 2ZM8.5 11C7.94772 11 7.5 11.4477 7.5 12C7.5 12.5523 7.94772 13 8.5 13C9.05228 13 9.5 12.5523 9.5 12C9.5 11.4477 9.05228 11 8.5 11ZM12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11ZM15.5 11C14.9477 11 14.5 11.4477 14.5 12C14.5 12.5523 14.9477 13 15.5 13C16.0523 13 16.5 12.5523 16.5 12C16.5 11.4477 16.0523 11 15.5 11Z" fill="currentColor"/>`,
  duotone: `<path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22H4C2.89543 22 2 21.1046 2 20V12C2 6.47715 6.47715 2 12 2Z" fill="currentColor" fill-opacity="0.2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22H4L3.7959 21.9893C2.85435 21.8938 2.1062 21.1457 2.01074 20.2041L2 20V12C2 6.47715 6.47715 2 12 2ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12V20C3.5 20.2761 3.72386 20.5 4 20.5H12C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5Z" fill="currentColor"/>
<circle cx="8.5" cy="12" r="1" fill="currentColor"/>
<circle cx="12" cy="12" r="1" fill="currentColor"/>
<circle cx="15.5" cy="12" r="1" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Chat icon
 * Variants: outline, fill, duotone
 */
export function Chat({
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

Chat.displayName = "Chat";
Chat.variants = AVAILABLE;
