import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M12 7C12.4142 7 12.75 7.33579 12.75 7.75V12.25H15.5C15.9142 12.25 16.25 12.5858 16.25 13C16.25 13.4142 15.9142 13.75 15.5 13.75H12C11.5858 13.75 11.25 13.4142 11.25 13V7.75C11.25 7.33579 11.5858 7 12 7Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 2C14.4142 2 14.75 2.33579 14.75 2.75C14.75 3.16421 14.4142 3.5 14 3.5H12.75V4.0332C17.3696 4.41441 21 8.28207 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 8.28207 6.63045 4.41441 11.25 4.0332V3.5H10C9.58579 3.5 9.25 3.16421 9.25 2.75C9.25 2.33579 9.58579 2 10 2H14ZM12 5.5C7.85786 5.5 4.5 8.85786 4.5 13C4.5 17.1421 7.85786 20.5 12 20.5C16.1421 20.5 19.5 17.1421 19.5 13C19.5 8.85786 16.1421 5.5 12 5.5Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M14 2C14.4142 2 14.75 2.33579 14.75 2.75C14.75 3.16421 14.4142 3.5 14 3.5H12.75V4.0332C17.3696 4.41441 21 8.28207 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 8.28207 6.63045 4.41441 11.25 4.0332V3.5H10C9.58579 3.5 9.25 3.16421 9.25 2.75C9.25 2.33579 9.58579 2 10 2H14ZM12 7C11.5858 7 11.25 7.33579 11.25 7.75V13C11.25 13.4142 11.5858 13.75 12 13.75H15.5C15.9142 13.75 16.25 13.4142 16.25 13C16.25 12.5858 15.9142 12.25 15.5 12.25H12.75V7.75C12.75 7.33579 12.4142 7 12 7Z" fill="currentColor"/>`,
  duotone: `<path d="M21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 8.02944 7.02944 4 12 4C16.9706 4 21 8.02944 21 13Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M12 7C12.4142 7 12.75 7.33579 12.75 7.75V12.25H15.5C15.9142 12.25 16.25 12.5858 16.25 13C16.25 13.4142 15.9142 13.75 15.5 13.75H12C11.5858 13.75 11.25 13.4142 11.25 13V7.75C11.25 7.33579 11.5858 7 12 7Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 2C14.4142 2 14.75 2.33579 14.75 2.75C14.75 3.16421 14.4142 3.5 14 3.5H12.75V4.0332C17.3696 4.41441 21 8.28207 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 8.28207 6.63045 4.41441 11.25 4.0332V3.5H10C9.58579 3.5 9.25 3.16421 9.25 2.75C9.25 2.33579 9.58579 2 10 2H14ZM12 5.5C7.85786 5.5 4.5 8.85786 4.5 13C4.5 17.1421 7.85786 20.5 12 20.5C16.1421 20.5 19.5 17.1421 19.5 13C19.5 8.85786 16.1421 5.5 12 5.5Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Stopwatch icon
 * Variants: outline, fill, duotone
 */
export function Stopwatch({
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

Stopwatch.displayName = "Stopwatch";
Stopwatch.variants = AVAILABLE;
