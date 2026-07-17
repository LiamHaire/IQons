import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2618 14.0766 17.0303 15.6162L22.707 21.293C23.0975 21.6835 23.0976 22.3165 22.707 22.707C22.3165 23.0975 21.6835 23.0975 21.293 22.707L15.6162 17.0303C14.0766 18.2618 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1ZM10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C12.0199 17.5 13.8517 16.6999 15.2002 15.4014C15.2284 15.3638 15.2588 15.3272 15.293 15.293C15.3271 15.2588 15.3638 15.2284 15.4014 15.2002C16.6999 13.8517 17.5 12.0199 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2618 14.0766 17.0303 15.6162L22.707 21.293C23.0975 21.6835 23.0976 22.3165 22.707 22.707C22.3165 23.0975 21.6835 23.0975 21.293 22.707L15.6162 17.0303C14.0766 18.2618 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1ZM10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C12.0199 17.5 13.8517 16.6999 15.2002 15.4014C15.2284 15.3638 15.2588 15.3272 15.293 15.293C15.3271 15.2588 15.3638 15.2284 15.4014 15.2002C16.6999 13.8517 17.5 12.0199 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5Z" fill="currentColor"/>`,
  duotone: `<circle cx="10" cy="10" r="9" fill="currentColor" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2618 14.0766 17.0303 15.6162L22.707 21.293C23.0975 21.6835 23.0976 22.3165 22.707 22.707C22.3165 23.0975 21.6835 23.0975 21.293 22.707L15.6162 17.0303C14.0766 18.2618 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1ZM10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C12.0199 17.5 13.8517 16.6999 15.2002 15.4014C15.2284 15.3638 15.2588 15.3272 15.293 15.293C15.3271 15.2588 15.3638 15.2284 15.4014 15.2002C16.6999 13.8517 17.5 12.0199 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5Z" fill="currentColor"/>`,
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
