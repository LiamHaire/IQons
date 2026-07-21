import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2041 2.01074C21.2128 2.113 22 2.96435 22 4V20L21.9893 20.2041C21.8938 21.1457 21.1457 21.8938 20.2041 21.9893L20 22H4C2.96435 22 2.113 21.2128 2.01074 20.2041L2 20V4C2 2.89543 2.89543 2 4 2H20L20.2041 2.01074ZM4 3.5C3.72386 3.5 3.5 3.72386 3.5 4V20C3.5 20.2761 3.72386 20.5 4 20.5H20C20.2761 20.5 20.5 20.2761 20.5 20V4C20.5 3.72386 20.2761 3.5 20 3.5H4Z" fill="currentColor"/>
<path d="M8.5 8.57385C8.5 7.73178 9.42655 7.21837 10.1406 7.66467L15.6221 11.0905C16.2939 11.5104 16.2939 12.4889 15.6221 12.9088L10.1406 16.3346L10.0039 16.4078C9.31385 16.7157 8.5 16.2147 8.5 15.4254V8.57385ZM10 14.6539L14.2451 11.9996L10 9.34436V14.6539Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M20 2C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2H20ZM10.333 8.62305C9.94762 8.45855 9.50017 8.7396 9.5 9.17676V14.8232C9.50016 15.2895 10.0093 15.5777 10.4092 15.3379L15.1143 12.5146C15.5025 12.2816 15.5025 11.7184 15.1143 11.4854L10.4092 8.66211L10.333 8.62305Z" fill="currentColor"/>`,
  duotone: `<path fill-rule="evenodd" clip-rule="evenodd" d="M20 2C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2H20ZM10.1514 9.09082C10.0847 9.05092 10 9.09906 10 9.17676V14.8232C10 14.9009 10.0847 14.9491 10.1514 14.9092L14.8574 12.0859C14.9219 12.0471 14.9219 11.9529 14.8574 11.9141L10.1514 9.09082Z" fill="currentColor" fill-opacity="0.2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2041 2.01074C21.2128 2.113 22 2.96435 22 4V20L21.9893 20.2041C21.8938 21.1457 21.1457 21.8938 20.2041 21.9893L20 22H4C2.96435 22 2.113 21.2128 2.01074 20.2041L2 20V4C2 2.89543 2.89543 2 4 2H20L20.2041 2.01074ZM4 3.5C3.72386 3.5 3.5 3.72386 3.5 4V20C3.5 20.2761 3.72386 20.5 4 20.5H20C20.2761 20.5 20.5 20.2761 20.5 20V4C20.5 3.72386 20.2761 3.5 20 3.5H4Z" fill="currentColor"/>
<path d="M8.5 8.57422C8.5 7.73215 9.42655 7.21874 10.1406 7.66504L15.6221 11.0908C16.2939 11.5107 16.2939 12.4893 15.6221 12.9092L10.1406 16.335L10.0039 16.4082C9.31385 16.7161 8.5 16.2151 8.5 15.4258V8.57422ZM10 14.6543L14.2451 12L10 9.34472V14.6543Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Play icon
 * Variants: outline, fill, duotone
 */
export function Play({
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

Play.displayName = "Play";
Play.variants = AVAILABLE;
