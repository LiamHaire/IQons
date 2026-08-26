import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0537 2.01172C18.2296 2.13599 21.9999 3.2475 22 7L21.9941 7.55566C21.7519 19.093 13.9688 22 12 22L11.7949 21.9912C9.5069 21.8035 2 18.6243 2 7C2 2.99722 5.70985 2 12 2L13.0537 2.01172ZM12 3.5C8.86664 3.5 6.6451 3.75936 5.24219 4.37305C4.5751 4.66487 4.1684 5.00613 3.91895 5.37305C3.67341 5.73434 3.5 6.23854 3.5 7C3.5 12.6351 5.3643 15.9932 7.31055 17.9395C8.29856 18.9275 9.33423 19.5782 10.2148 19.9785C11.1287 20.3939 11.7857 20.5 12 20.5C12.2143 20.5 12.8713 20.3938 13.7852 19.9785C14.6658 19.5782 15.7014 18.9274 16.6895 17.9395C18.6357 15.9932 20.5002 12.6351 20.5 7C20.5 6.28462 20.3152 5.79618 20.04 5.42871C19.752 5.04403 19.2842 4.68554 18.5605 4.38184C17.0667 3.75496 14.8228 3.5 12 3.5Z" fill="currentColor"/>`,
  fill: `<path d="M12 2C17.7098 2 21.9999 2.99722 22 7C22.0004 19 14 22 12 22C10 22 2 19 2 7C2 2.99722 5.70985 2 12 2Z" fill="currentColor"/>`,
  duotone: `<path d="M12 2C17.7098 2 21.9999 2.99722 22 7C22.0004 19 14 22 12 22C10 22 2 19 2 7C2 2.99722 5.70985 2 12 2Z" fill="currentColor" fill-opacity="0.2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0537 2.01172C18.2296 2.13599 21.9999 3.2475 22 7L21.9941 7.55566C21.7519 19.093 13.9688 22 12 22L11.7949 21.9912C9.5069 21.8035 2 18.6243 2 7C2 2.99722 5.70985 2 12 2L13.0537 2.01172ZM12 3.5C8.86664 3.5 6.6451 3.75936 5.24219 4.37305C4.5751 4.66487 4.1684 5.00613 3.91895 5.37305C3.67341 5.73434 3.5 6.23854 3.5 7C3.5 12.6351 5.3643 15.9932 7.31055 17.9395C8.29856 18.9275 9.33423 19.5782 10.2148 19.9785C11.1287 20.3939 11.7857 20.5 12 20.5C12.2143 20.5 12.8713 20.3938 13.7852 19.9785C14.6658 19.5782 15.7014 18.9274 16.6895 17.9395C18.6357 15.9932 20.5002 12.6351 20.5 7C20.5 6.28462 20.3152 5.79618 20.04 5.42871C19.752 5.04403 19.2842 4.68554 18.5605 4.38184C17.0667 3.75496 14.8228 3.5 12 3.5Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Shield icon
 * Variants: outline, fill, duotone
 */
export function Shield({
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

Shield.displayName = "Shield";
Shield.variants = AVAILABLE;
