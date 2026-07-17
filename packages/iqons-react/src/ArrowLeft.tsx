import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M4.29891 12.6474C3.92774 12.3293 3.90454 11.7708 4.22957 11.4228L4.29891 11.3564L11.21 5.43257C11.5245 5.16319 11.9981 5.19933 12.2677 5.51363C12.5371 5.82802 12.5008 6.30164 12.1866 6.57124L6.72567 11.2519L19.2481 11.2519C19.6623 11.2519 19.9981 11.5877 19.9981 12.0019C19.9981 12.4161 19.6623 12.7519 19.2481 12.7519L6.72567 12.7519L12.1866 17.4326C12.5009 17.7021 12.537 18.1758 12.2677 18.4902C11.9981 18.8045 11.5245 18.8407 11.21 18.5712L4.29891 12.6474Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 2.89543 2.89543 2 4 2L20 2C21.1046 2 22 2.89543 22 4L22 20C22 21.1046 21.1046 22 20 22L4 22C2.89543 22 2 21.1046 2 20L2 4ZM4.23144 11.4209C3.90646 11.7689 3.92963 12.3274 4.30078 12.6455L11.2119 18.5693C11.5263 18.8387 12 18.8025 12.2695 18.4883C12.5389 18.1739 12.5027 17.7002 12.1885 17.4307L6.72754 12.75L19.25 12.75C19.6642 12.75 20 12.4142 20 12C20 11.5858 19.6642 11.25 19.25 11.25L6.72754 11.25L12.1885 6.56934C12.5027 6.29975 12.5389 5.82611 12.2695 5.51172C12 5.19742 11.5264 5.16128 11.2119 5.43066L4.30078 11.3545L4.23144 11.4209Z" fill="currentColor"/>`,
  duotone: `<path d="M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M4.29891 12.6474C3.92774 12.3293 3.90454 11.7708 4.22957 11.4228L4.29891 11.3564L11.21 5.43259C11.5245 5.1632 11.9981 5.19935 12.2677 5.51364C12.5371 5.82803 12.5008 6.30166 12.1866 6.57126L6.72567 11.2519L19.2481 11.2519C19.6623 11.2519 19.9981 11.5878 19.9981 12.0019C19.9981 12.4161 19.6623 12.7519 19.2481 12.7519L6.72567 12.7519L12.1866 17.4326C12.5009 17.7021 12.537 18.1758 12.2677 18.4902C11.9981 18.8045 11.5245 18.8407 11.21 18.5713L4.29891 12.6474Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * ArrowLeft icon
 * Variants: outline, fill, duotone
 */
export function ArrowLeft({
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

ArrowLeft.displayName = "ArrowLeft";
ArrowLeft.variants = AVAILABLE;
