import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M15 15L9 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M9 15L15 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M12 1.75C17.6609 1.75 22.25 6.33908 22.25 12C22.25 17.6609 17.6609 22.25 12 22.25H5C3.20507 22.25 1.75 20.7949 1.75 19V12C1.75 6.33908 6.33908 1.75 12 1.75Z" stroke="currentColor" stroke-width="1.5"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23H5C2.79086 23 1 21.2091 1 19V12C1 5.92487 5.92487 1 12 1ZM15.5303 8.46973C15.2374 8.1769 14.7626 8.17686 14.4697 8.46973L12 10.9395L9.53027 8.46973C9.23737 8.1769 8.7626 8.17686 8.46973 8.46973C8.17686 8.7626 8.1769 9.23737 8.46973 9.53027L10.9395 12L8.46973 14.4697C8.17686 14.7626 8.1769 15.2374 8.46973 15.5303C8.76262 15.8231 9.2374 15.8231 9.53027 15.5303L12 13.0605L14.4697 15.5303C14.7626 15.8231 15.2374 15.8231 15.5303 15.5303C15.8231 15.2374 15.8231 14.7626 15.5303 14.4697L13.0605 12L15.5303 9.53027C15.8231 9.2374 15.8231 8.76262 15.5303 8.46973Z" fill="currentColor"/>`,
  duotone: `<path d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23H5C2.79086 23 1 21.2091 1 19V12C1 5.92487 5.92487 1 12 1Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M15 15L9 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M9 15L15 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M12 1.75C17.6609 1.75 22.25 6.33908 22.25 12C22.25 17.6609 17.6609 22.25 12 22.25H5C3.20507 22.25 1.75 20.7949 1.75 19V12C1.75 6.33908 6.33908 1.75 12 1.75Z" stroke="currentColor" stroke-width="1.5"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * ChatClose icon
 * Variants: outline, fill, duotone
 */
export function ChatClose({
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

ChatClose.displayName = "ChatClose";
ChatClose.variants = AVAILABLE;
