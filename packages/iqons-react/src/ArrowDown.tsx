import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M12.6455 19.7031C12.3274 20.0743 11.7689 20.0975 11.4209 19.7724L11.3545 19.7031L5.4307 12.792C5.16131 12.4775 5.19745 12.0039 5.51175 11.7343C5.82614 11.4649 6.29977 11.5012 6.56937 11.8154L11.25 17.2763L11.25 4.75388C11.25 4.33969 11.5859 4.00393 12 4.00388C12.4142 4.00388 12.75 4.33966 12.75 4.75388L12.75 17.2763L17.4307 11.8154C17.7003 11.5011 18.1739 11.465 18.4883 11.7343C18.8026 12.0039 18.8388 12.4775 18.5694 12.792L12.6455 19.7031Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M4 22C2.89543 22 2 21.1046 2 20L2 4C2 2.89543 2.89543 2 4 2L20 2C21.1046 2 22 2.89543 22 4L22 20C22 21.1046 21.1046 22 20 22L4 22ZM11.4209 19.7686C11.7689 20.0935 12.3274 20.0704 12.6455 19.6992L18.5693 12.7881C18.8387 12.4737 18.8026 12 18.4883 11.7305C18.1739 11.4611 17.7002 11.4973 17.4307 11.8115L12.75 17.2725L12.75 4.75C12.75 4.33582 12.4142 4.00005 12 4C11.5858 4.00005 11.25 4.33582 11.25 4.75L11.25 17.2725L6.56934 11.8115C6.29975 11.4973 5.82611 11.4611 5.51172 11.7305C5.19742 12 5.16128 12.4736 5.43066 12.7881L11.3545 19.6992L11.4209 19.7686Z" fill="currentColor"/>`,
  duotone: `<path d="M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M12.6455 19.7031C12.3274 20.0743 11.7689 20.0975 11.4209 19.7724L11.3545 19.7031L5.4307 12.792C5.16131 12.4775 5.19745 12.0039 5.51175 11.7344C5.82614 11.4649 6.29977 11.5012 6.56937 11.8154L11.25 17.2763L11.25 4.75388C11.25 4.3397 11.5859 4.00393 12 4.00388C12.4142 4.00388 12.75 4.33967 12.75 4.75388L12.75 17.2763L17.4307 11.8154C17.7003 11.5012 18.1739 11.465 18.4883 11.7344C18.8026 12.0039 18.8388 12.4775 18.5694 12.792L12.6455 19.7031Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * ArrowDown icon
 * Variants: outline, fill, duotone
 */
export function ArrowDown({
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

ArrowDown.displayName = "ArrowDown";
ArrowDown.variants = AVAILABLE;
