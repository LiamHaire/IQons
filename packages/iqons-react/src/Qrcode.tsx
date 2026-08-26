import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M3.75 14.875C4.16421 14.875 4.5 15.2108 4.5 15.625V19.25C4.5 19.3881 4.61193 19.5 4.75 19.5H8.375C8.78921 19.5 9.125 19.8358 9.125 20.25C9.125 20.6642 8.78921 21 8.375 21H4.75C3.7835 21 3 20.2165 3 19.25V15.625C3 15.2108 3.33579 14.875 3.75 14.875Z" fill="currentColor"/>
<path d="M20.25 14.875C20.6642 14.875 21 15.2108 21 15.625V19.25C21 20.2165 20.2165 21 19.25 21H15.625C15.2108 21 14.875 20.6642 14.875 20.25C14.875 19.8358 15.2108 19.5 15.625 19.5H19.25C19.3881 19.5 19.5 19.3881 19.5 19.25V15.625C19.5 15.2108 19.8358 14.875 20.25 14.875Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 17H7V13H12V17ZM8.5 15.5H10.5V14.5H8.5V15.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 17H13V12H17V17ZM14.5 15.5H15.5V13.5H14.5V15.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 12H7V7H12V12ZM8.5 10.5H10.5V8.5H8.5V10.5Z" fill="currentColor"/>
<path d="M16.5 10.75H13.5V7.75H16.5V10.75Z" fill="currentColor"/>
<path d="M8.375 3C8.78921 3 9.125 3.33579 9.125 3.75C9.125 4.16421 8.78921 4.5 8.375 4.5H4.75C4.61193 4.5 4.5 4.61193 4.5 4.75V8.375C4.5 8.78921 4.16421 9.125 3.75 9.125C3.33579 9.125 3 8.78921 3 8.375V4.75C3 3.7835 3.7835 3 4.75 3H8.375Z" fill="currentColor"/>
<path d="M19.25 3C20.2165 3 21 3.7835 21 4.75V8.375C21 8.78921 20.6642 9.125 20.25 9.125C19.8358 9.125 19.5 8.78921 19.5 8.375V4.75C19.5 4.61193 19.3881 4.5 19.25 4.5H15.625C15.2108 4.5 14.875 4.16421 14.875 3.75C14.875 3.33579 15.2108 3 15.625 3H19.25Z" fill="currentColor"/>`,
  fill: `<path d="M10.5 15.5H8.5V14.5H10.5V15.5Z" fill="currentColor"/>
<path d="M15.5 15.5H14.5V13.5H15.5V15.5Z" fill="currentColor"/>
<path d="M10.5 10.5H8.5V8.5H10.5V10.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 3C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19ZM7 17H12V13H7V17ZM13 17H17V12H13V17ZM7 12H12V7H7V12ZM13.5 7.5V10.5H16.5V7.5H13.5Z" fill="currentColor"/>`,
  duotone: `<path d="M3.75 4.75C3.75 4.19772 4.19772 3.75 4.75 3.75H19.25C19.8023 3.75 20.25 4.19772 20.25 4.75V19.25C20.25 19.8023 19.8023 20.25 19.25 20.25H4.75C4.19772 20.25 3.75 19.8023 3.75 19.25V4.75Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M3.75 14.875C4.16421 14.875 4.5 15.2108 4.5 15.625V19.25C4.5 19.3881 4.61193 19.5 4.75 19.5H8.375C8.78921 19.5 9.125 19.8358 9.125 20.25C9.125 20.6642 8.78921 21 8.375 21H4.75C3.7835 21 3 20.2165 3 19.25V15.625C3 15.2108 3.33579 14.875 3.75 14.875Z" fill="currentColor"/>
<path d="M20.25 14.875C20.6642 14.875 21 15.2108 21 15.625V19.25C21 20.2165 20.2165 21 19.25 21H15.625C15.2108 21 14.875 20.6642 14.875 20.25C14.875 19.8358 15.2108 19.5 15.625 19.5H19.25C19.3881 19.5 19.5 19.3881 19.5 19.25V15.625C19.5 15.2108 19.8358 14.875 20.25 14.875Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 17H7V13H12V17ZM8.5 15.5H10.5V14.5H8.5V15.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 17H13V12H17V17ZM14.5 15.5H15.5V13.5H14.5V15.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 12H7V7H12V12ZM8.5 10.5H10.5V8.5H8.5V10.5Z" fill="currentColor"/>
<path d="M16.5 10.75H13.5V7.75H16.5V10.75Z" fill="currentColor"/>
<path d="M8.375 3C8.78921 3 9.125 3.33579 9.125 3.75C9.125 4.16421 8.78921 4.5 8.375 4.5H4.75C4.61193 4.5 4.5 4.61193 4.5 4.75V8.375C4.5 8.78921 4.16421 9.125 3.75 9.125C3.33579 9.125 3 8.78921 3 8.375V4.75C3 3.7835 3.7835 3 4.75 3H8.375Z" fill="currentColor"/>
<path d="M19.25 3C20.2165 3 21 3.7835 21 4.75V8.375C21 8.78921 20.6642 9.125 20.25 9.125C19.8358 9.125 19.5 8.78921 19.5 8.375V4.75C19.5 4.61193 19.3881 4.5 19.25 4.5H15.625C15.2108 4.5 14.875 4.16421 14.875 3.75C14.875 3.33579 15.2108 3 15.625 3H19.25Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Qrcode icon
 * Variants: outline, fill, duotone
 */
export function Qrcode({
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

Qrcode.displayName = "Qrcode";
Qrcode.variants = AVAILABLE;
