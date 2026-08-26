import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M15.457 8.48242C15.7427 8.18272 16.2177 8.17146 16.5176 8.45703C16.8173 8.74272 16.8286 9.21771 16.543 9.51758L10.8359 15.5098C10.53 15.8306 10.0154 15.8225 9.71973 15.4922L7.44043 12.9434C7.16466 12.6347 7.19154 12.1608 7.5 11.8848C7.80879 11.6087 8.28349 11.6346 8.55957 11.9434L10.3027 13.8936L15.457 8.48242Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 3C20.1046 3 21 3.89543 21 5V19C21 20.0357 20.2128 20.887 19.2041 20.9893L19 21H5L4.7959 20.9893C3.85435 20.8938 3.1062 20.1457 3.01074 19.2041L3 19V5C3 3.89543 3.89543 3 5 3H19ZM5 4.5C4.72386 4.5 4.5 4.72386 4.5 5V19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V5C19.5 4.72386 19.2761 4.5 19 4.5H5Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M19 3C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19ZM16.5176 8.45703C16.2177 8.17149 15.7427 8.18273 15.457 8.48242L10.3027 13.8936L8.55957 11.9434C8.28348 11.6346 7.80878 11.6087 7.5 11.8848C7.19158 12.1608 7.1647 12.6347 7.44043 12.9434L9.71973 15.4922C10.0154 15.8225 10.53 15.8306 10.8359 15.5098L16.543 9.51758C16.8286 9.21771 16.8173 8.74272 16.5176 8.45703Z" fill="currentColor"/>`,
  duotone: `<path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M15.457 8.48242C15.7427 8.18272 16.2177 8.17146 16.5176 8.45703C16.8173 8.74272 16.8286 9.21771 16.543 9.51758L10.8359 15.5098C10.53 15.8306 10.0154 15.8225 9.71973 15.4922L7.44043 12.9434C7.16466 12.6347 7.19154 12.1608 7.5 11.8848C7.80879 11.6087 8.28349 11.6346 8.55957 11.9434L10.3027 13.8936L15.457 8.48242Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 3C20.1046 3 21 3.89543 21 5V19C21 20.0357 20.2128 20.887 19.2041 20.9893L19 21H5L4.7959 20.9893C3.85435 20.8938 3.1062 20.1457 3.01074 19.2041L3 19V5C3 3.89543 3.89543 3 5 3H19ZM5 4.5C4.72386 4.5 4.5 4.72386 4.5 5V19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V5C19.5 4.72386 19.2761 4.5 19 4.5H5Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * CheckSquare icon
 * Variants: outline, fill, duotone
 */
export function CheckSquare({
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

CheckSquare.displayName = "CheckSquare";
CheckSquare.variants = AVAILABLE;
