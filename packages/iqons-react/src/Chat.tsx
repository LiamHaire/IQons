import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<circle cx="12" cy="12.1" r="1.1" fill="currentColor"/>
<circle cx="8.15005" cy="12.1" r="1.1" fill="currentColor"/>
<circle cx="15.85" cy="12.1" r="1.1" fill="currentColor"/>
<path d="M12 1.75C17.6609 1.75 22.25 6.33908 22.25 12C22.25 17.6609 17.6609 22.25 12 22.25H5C3.20507 22.25 1.75 20.7949 1.75 19V12C1.75 6.33908 6.33908 1.75 12 1.75Z" stroke="currentColor" stroke-width="1.5"/>`,
  fill: `<path d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23H5C2.79086 23 1 21.2091 1 19V12C1 5.92487 5.92487 1 12 1ZM8.15039 11C7.54301 11 7.05002 11.4923 7.0498 12.0996C7.0498 12.7071 7.54288 13.2002 8.15039 13.2002C8.75775 13.2 9.25 12.707 9.25 12.0996C9.24979 11.4924 8.75762 11.0002 8.15039 11ZM12 11C11.3926 11 10.9006 11.4923 10.9004 12.0996C10.9004 12.7071 11.3925 13.2002 12 13.2002C12.6075 13.2002 13.0996 12.7071 13.0996 12.0996C13.0994 11.4923 12.6074 11 12 11ZM15.8496 11C15.2424 11.0002 14.7502 11.4924 14.75 12.0996C14.75 12.707 15.2423 13.2 15.8496 13.2002C16.4571 13.2002 16.9502 12.7071 16.9502 12.0996C16.95 11.4923 16.457 11 15.8496 11Z" fill="currentColor"/>`,
  duotone: `<circle cx="12" cy="12.1" r="1.1" fill="currentColor"/>
<circle cx="8.15005" cy="12.1" r="1.1" fill="currentColor"/>
<circle cx="15.85" cy="12.1" r="1.1" fill="currentColor"/>
<path d="M12 1.75C17.6609 1.75 22.25 6.33908 22.25 12C22.25 17.6609 17.6609 22.25 12 22.25H5C3.20507 22.25 1.75 20.7949 1.75 19V12C1.75 6.33908 6.33908 1.75 12 1.75Z" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/>`,
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
