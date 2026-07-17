import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M12 1.75C17.6609 1.75 22.25 6.33908 22.25 12C22.25 17.6609 17.6609 22.25 12 22.25H5C3.20507 22.25 1.75 20.7949 1.75 19V12C1.75 6.33908 6.33908 1.75 12 1.75Z" stroke="currentColor" stroke- />
<path d="M12 5.75C12.4142 5.75 12.75 6.08579 12.75 6.5V11.6895L15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303C15.2374 15.8232 14.7626 15.8232 14.4697 15.5303L11.4697 12.5303C11.421 12.4816 11.3831 12.4263 11.3506 12.3691C11.3351 12.342 11.3187 12.3153 11.3066 12.2861C11.286 12.2361 11.2711 12.1844 11.2617 12.1318C11.2541 12.089 11.25 12.045 11.25 12V6.5C11.25 6.08579 11.5858 5.75 12 5.75Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23H5C2.79086 23 1 21.2091 1 19V12C1 5.92487 5.92487 1 12 1ZM12 5.75C11.5858 5.75 11.25 6.08579 11.25 6.5V12C11.25 12.045 11.2541 12.089 11.2617 12.1318C11.2711 12.1844 11.286 12.2361 11.3066 12.2861C11.3187 12.3153 11.3351 12.342 11.3506 12.3691C11.3831 12.4262 11.421 12.4816 11.4697 12.5303L14.4697 15.5303C14.7626 15.8231 15.2374 15.8232 15.5303 15.5303C15.8231 15.2374 15.8231 14.7626 15.5303 14.4697L12.75 11.6895V6.5C12.75 6.08579 12.4142 5.75 12 5.75Z" fill="currentColor"/>`,
  duotone: `<path d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23H5C2.79086 23 1 21.2091 1 19V12C1 5.92487 5.92487 1 12 1Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M12 1.75C17.6609 1.75 22.25 6.33908 22.25 12C22.25 17.6609 17.6609 22.25 12 22.25H5C3.20507 22.25 1.75 20.7949 1.75 19V12C1.75 6.33908 6.33908 1.75 12 1.75Z" stroke="currentColor" stroke- />
<path d="M12 5.75C12.4142 5.75 12.75 6.08579 12.75 6.5V11.6895L15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303C15.2374 15.8232 14.7626 15.8232 14.4697 15.5303L11.4697 12.5303C11.421 12.4816 11.3831 12.4263 11.3506 12.3691C11.3351 12.342 11.3187 12.3153 11.3066 12.2861C11.286 12.2361 11.2711 12.1844 11.2617 12.1318C11.2541 12.089 11.25 12.045 11.25 12V6.5C11.25 6.08579 11.5858 5.75 12 5.75Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * ChatHistory icon
 * Variants: outline, fill, duotone
 */
export function ChatHistory({
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

ChatHistory.displayName = "ChatHistory";
ChatHistory.variants = AVAILABLE;
