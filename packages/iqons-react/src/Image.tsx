import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 6C7.88071 6 9 7.11929 9 8.5C9 9.88071 7.88071 11 6.5 11C5.11929 11 4 9.88071 4 8.5C4 7.11929 5.11929 6 6.5 6ZM6.5 7.5C5.94772 7.5 5.5 7.94772 5.5 8.5C5.5 9.05228 5.94772 9.5 6.5 9.5C7.05228 9.5 7.5 9.05228 7.5 8.5C7.5 7.94772 7.05228 7.5 6.5 7.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 3C22.1046 3 23 3.89543 23 5V16.9395L23.0303 16.9697L23 17V19C23 20.1046 22.1046 21 21 21H14L13.9697 21.0303L13.9395 21H3L2.7959 20.9893C1.78722 20.887 1 20.0357 1 19V5C1 3.89543 1.89543 3 3 3H21ZM3.56055 19.5H12.4395L8 15.0605L3.56055 19.5ZM11.5605 16.5L14.5605 19.5H21C21.2761 19.5 21.5 19.2761 21.5 19V17.5605L16 12.0605L11.5605 16.5ZM3 4.5C2.72386 4.5 2.5 4.72386 2.5 5V18.4395L8 12.9395L10.5 15.4395L16 9.93945L21.5 15.4395V5C21.5 4.72386 21.2761 4.5 21 4.5H3Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 6C7.88071 6 9 7.11929 9 8.5C9 9.88071 7.88071 11 6.5 11C5.11929 11 4 9.88071 4 8.5C4 7.11929 5.11929 6 6.5 6ZM6.5 7.5C5.94772 7.5 5.5 7.94772 5.5 8.5C5.5 9.05228 5.94772 9.5 6.5 9.5C7.05228 9.5 7.5 9.05228 7.5 8.5C7.5 7.94772 7.05228 7.5 6.5 7.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 3C22.1046 3 23 3.89543 23 5V16.9395L23.0303 16.9697L23 17V19C23 20.1046 22.1046 21 21 21H14L13.9697 21.0303L13.9395 21H3L2.7959 20.9893C1.78722 20.887 1 20.0357 1 19V5C1 3.89543 1.89543 3 3 3H21ZM3 4.5C2.72386 4.5 2.5 4.72386 2.5 5V18.4395L8 12.9395L10.5 15.4395L16 9.93945L21.5 15.4395V5C21.5 4.72386 21.2761 4.5 21 4.5H3Z" fill="currentColor"/>`,
  duotone: `<path d="M8 14L2 20H22V17L16 11L10.5 16.5L8 14Z" fill="currentColor" fill-opacity="0.2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 6C7.88071 6 9 7.11929 9 8.5C9 9.88071 7.88071 11 6.5 11C5.11929 11 4 9.88071 4 8.5C4 7.11929 5.11929 6 6.5 6ZM6.5 7.5C5.94772 7.5 5.5 7.94772 5.5 8.5C5.5 9.05228 5.94772 9.5 6.5 9.5C7.05228 9.5 7.5 9.05228 7.5 8.5C7.5 7.94772 7.05228 7.5 6.5 7.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 3C22.1046 3 23 3.89543 23 5V16.9395L23.0303 16.9697L23 17V19C23 20.1046 22.1046 21 21 21H14L13.9697 21.0303L13.9395 21H3L2.7959 20.9893C1.78722 20.887 1 20.0357 1 19V5C1 3.89543 1.89543 3 3 3H21ZM3.56055 19.5H12.4395L8 15.0605L3.56055 19.5ZM11.5605 16.5L14.5605 19.5H21C21.2761 19.5 21.5 19.2761 21.5 19V17.5605L16 12.0605L11.5605 16.5ZM3 4.5C2.72386 4.5 2.5 4.72386 2.5 5V18.4395L8 12.9395L10.5 15.4395L16 9.93945L21.5 15.4395V5C21.5 4.72386 21.2761 4.5 21 4.5H3Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Image icon
 * Variants: outline, fill, duotone
 */
export function Image({
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

Image.displayName = "Image";
Image.variants = AVAILABLE;
