import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M12 7.75C12 11.3461 12 12.6539 12 16.25" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M7.75 12H16.25" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M12 1.75C17.6609 1.75 22.25 6.33908 22.25 12C22.25 17.6609 17.6609 22.25 12 22.25H5C3.20507 22.25 1.75 20.7949 1.75 19V12C1.75 6.33908 6.33908 1.75 12 1.75Z" stroke="currentColor" stroke- />`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23H5C2.79086 23 1 21.2091 1 19V12C1 5.92487 5.92487 1 12 1ZM12 7C11.5858 7 11.25 7.33579 11.25 7.75V11.25H7.75C7.33579 11.25 7 11.5858 7 12C7 12.4142 7.33579 12.75 7.75 12.75H11.25V16.25C11.25 16.6642 11.5858 17 12 17C12.4142 17 12.75 16.6642 12.75 16.25V12.75H16.25C16.6642 12.75 17 12.4142 17 12C17 11.5858 16.6642 11.25 16.25 11.25H12.75V7.75C12.75 7.33579 12.4142 7 12 7Z" fill="currentColor"/>`,
  duotone: `<path d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23H5C2.79086 23 1 21.2091 1 19V12C1 5.92487 5.92487 1 12 1Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M12 7C12.4142 7 12.75 7.33579 12.75 7.75V11.25H16.25C16.6642 11.25 17 11.5858 17 12C17 12.4142 16.6642 12.75 16.25 12.75H12.75V16.25C12.75 16.6642 12.4142 17 12 17C11.5858 17 11.25 16.6642 11.25 16.25V12.75H7.75C7.33579 12.75 7 12.4142 7 12C7 11.5858 7.33579 11.25 7.75 11.25H11.25V7.75C11.25 7.33579 11.5858 7 12 7Z" fill="currentColor"/>
<path d="M12 1.75C17.6609 1.75 22.25 6.33908 22.25 12C22.25 17.6609 17.6609 22.25 12 22.25H5C3.20507 22.25 1.75 20.7949 1.75 19V12C1.75 6.33908 6.33908 1.75 12 1.75Z" stroke="currentColor" stroke- />`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * ChatNew icon
 * Variants: outline, fill, duotone
 */
export function ChatNew({
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

ChatNew.displayName = "ChatNew";
ChatNew.variants = AVAILABLE;
