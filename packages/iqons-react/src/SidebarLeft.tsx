import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M7.3252 10.125C7.73932 10.1251 8.0752 10.4609 8.0752 10.875C8.0752 11.2891 7.73932 11.6249 7.3252 11.625H5.125C4.71079 11.625 4.375 11.2892 4.375 10.875C4.375 10.4608 4.71079 10.125 5.125 10.125H7.3252Z" fill="currentColor"/>
<path d="M7.3252 6.75C7.73932 6.75011 8.0752 7.08585 8.0752 7.5C8.0752 7.91415 7.73932 8.24989 7.3252 8.25H5.125C4.71079 8.25 4.375 7.91421 4.375 7.5C4.375 7.08579 4.71079 6.75 5.125 6.75H7.3252Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 3C22.1046 3 23 3.89543 23 5V19C23 20.1046 22.1046 21 21 21H3L2.7959 20.9893C1.78722 20.887 1 20.0357 1 19V5C1 3.89543 1.89543 3 3 3H21ZM3 4.5C2.72386 4.5 2.5 4.72386 2.5 5V19C2.5 19.2761 2.72386 19.5 3 19.5H9.59961V4.5H3ZM11.0996 19.5H21C21.2761 19.5 21.5 19.2761 21.5 19V5C21.5 4.72386 21.2761 4.5 21 4.5H11.0996V19.5Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M21 3C22.1046 3 23 3.89543 23 5V19C23 20.0357 22.2128 20.887 21.2041 20.9893L21 21H3L2.7959 20.9893C1.85435 20.8938 1.1062 20.1457 1.01074 19.2041L1 19V5C1 3.89543 1.89543 3 3 3H21ZM11.0996 19.5H21C21.2761 19.5 21.5 19.2761 21.5 19V5C21.5 4.72386 21.2761 4.5 21 4.5H11.0996V19.5ZM5.125 10.125C4.71079 10.125 4.375 10.4608 4.375 10.875C4.375 11.2892 4.71079 11.625 5.125 11.625H7.3252C7.73932 11.6249 8.0752 11.2891 8.0752 10.875C8.0752 10.4609 7.73932 10.1251 7.3252 10.125H5.125ZM5.125 6.75C4.71079 6.75 4.375 7.08579 4.375 7.5C4.375 7.91421 4.71079 8.25 5.125 8.25H7.3252C7.73932 8.24989 8.0752 7.91415 8.0752 7.5C8.0752 7.08585 7.73932 6.75011 7.3252 6.75H5.125Z" fill="currentColor"/>`,
  duotone: `<path d="M2 6C2 4.89543 2.89543 4 4 4H11V20H4C2.89543 20 2 19.1046 2 18V6Z" fill="currentColor" fill-opacity="0.15"/>
<path d="M7.3252 10.125C7.73932 10.1251 8.0752 10.4609 8.0752 10.875C8.0752 11.2891 7.73932 11.6249 7.3252 11.625H5.125C4.71079 11.625 4.375 11.2892 4.375 10.875C4.375 10.4608 4.71079 10.125 5.125 10.125H7.3252Z" fill="currentColor"/>
<path d="M7.3252 6.75C7.73932 6.75011 8.0752 7.08585 8.0752 7.5C8.0752 7.91415 7.73932 8.24989 7.3252 8.25H5.125C4.71079 8.25 4.375 7.91421 4.375 7.5C4.375 7.08579 4.71079 6.75 5.125 6.75H7.3252Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 3C22.1046 3 23 3.89543 23 5V19C23 20.1046 22.1046 21 21 21H3L2.7959 20.9893C1.78722 20.887 1 20.0357 1 19V5C1 3.89543 1.89543 3 3 3H21ZM3 4.5C2.72386 4.5 2.5 4.72386 2.5 5V19C2.5 19.2761 2.72386 19.5 3 19.5H9.59961V4.5H3ZM11.0996 19.5H21C21.2761 19.5 21.5 19.2761 21.5 19V5C21.5 4.72386 21.2761 4.5 21 4.5H11.0996V19.5Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * SidebarLeft icon
 * Variants: outline, fill, duotone
 */
export function SidebarLeft({
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

SidebarLeft.displayName = "SidebarLeft";
SidebarLeft.variants = AVAILABLE;
