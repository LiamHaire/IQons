import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M15.457 8.48242C15.7427 8.18277 16.2177 8.17148 16.5176 8.45703C16.8172 8.74271 16.8285 9.21772 16.543 9.51758L10.8359 15.5098C10.53 15.8306 10.0154 15.8225 9.71973 15.4922L7.44043 12.9434C7.16468 12.6347 7.19158 12.1608 7.5 11.8848C7.80879 11.6087 8.2835 11.6346 8.55957 11.9434L10.3027 13.8936L15.457 8.48242Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM16.5176 8.45703C16.2177 8.17149 15.7427 8.18273 15.457 8.48242L10.3027 13.8936L8.55957 11.9434C8.28348 11.6346 7.80878 11.6087 7.5 11.8848C7.19158 12.1608 7.1647 12.6347 7.44043 12.9434L9.71973 15.4922C10.0154 15.8225 10.53 15.8306 10.8359 15.5098L16.543 9.51758C16.8286 9.21771 16.8173 8.74272 16.5176 8.45703Z" fill="currentColor"/>`,
  duotone: `<path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M15.457 8.48242C15.7427 8.18277 16.2177 8.17148 16.5176 8.45703C16.8172 8.74271 16.8285 9.21772 16.543 9.51758L10.8359 15.5098C10.53 15.8306 10.0154 15.8225 9.71973 15.4922L7.44043 12.9434C7.16468 12.6347 7.19158 12.1608 7.5 11.8848C7.80879 11.6087 8.2835 11.6346 8.55957 11.9434L10.3027 13.8936L15.457 8.48242Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * CheckRound icon
 * Variants: outline, fill, duotone
 */
export function CheckRound({
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

CheckRound.displayName = "CheckRound";
CheckRound.variants = AVAILABLE;
