import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<mask id="path-1-inside-1_488_131" fill="white">
<path d="M5 7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V17C19 18.1046 18.1046 19 17 19H7C5.89543 19 5 18.1046 5 17V7Z"/>
</mask>
<path d="M7 5V6.5H17V5V3.5H7V5ZM19 7H17.5V17H19H20.5V7H19ZM17 19V17.5H7V19V20.5H17V19ZM5 17H6.5V7H5H3.5V17H5ZM7 19V17.5C6.72386 17.5 6.5 17.2761 6.5 17H5H3.5C3.5 18.933 5.067 20.5 7 20.5V19ZM19 17H17.5C17.5 17.2761 17.2761 17.5 17 17.5V19V20.5C18.933 20.5 20.5 18.933 20.5 17H19ZM17 5V6.5C17.2761 6.5 17.5 6.72386 17.5 7H19H20.5C20.5 5.067 18.933 3.5 17 3.5V5ZM7 5V3.5C5.067 3.5 3.5 5.067 3.5 7H5H6.5C6.5 6.72386 6.72386 6.5 7 6.5V5Z" fill="currentColor" mask="url(#path-1-inside-1_488_131)"/>
<path d="M7 5.5V2" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M10.3333 5.5V2" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M13.6667 5.5V2" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M17 5.5V2" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M18.5 7L22 7" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M18.5 10.3333L22 10.3333" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M18.5 13.6667L22 13.6667" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M18.5 17L22 17" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M17 18.5L17 22" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M13.6667 18.5L13.6667 22" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M10.3333 18.5L10.3333 22" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M7 18.5L7 22" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M5.5 17L2 17" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M5.5 13.6667L2 13.6667" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M5.5 10.3333L2 10.3333" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M5.5 7L2 7" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M15.5 9V15H14.0904V9H15.5Z" fill="currentColor"/>
<path d="M10.448 10.261L9.01833 15H7.5L9.65465 9H10.6172L10.448 10.261ZM11.6321 15L10.1984 10.261L10.0131 9H10.9877L13.1545 15H11.6321ZM11.5757 12.7624V13.8791H8.56726V12.7624H11.5757Z" fill="currentColor"/>`,
  fill: `<path d="M10.9551 12.7627H9.69336L10.3232 10.6738L10.9551 12.7627Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 1.25C17.4142 1.25 17.75 1.58579 17.75 2V5.14648C18.251 5.34942 18.6506 5.74896 18.8535 6.25H22C22.4142 6.25 22.75 6.58579 22.75 7C22.75 7.41421 22.4142 7.75 22 7.75H19V9.58301H22C22.4141 9.58301 22.7498 9.91895 22.75 10.333C22.75 10.7472 22.4142 11.083 22 11.083H19V12.917H22C22.4142 12.917 22.75 13.2528 22.75 13.667C22.7498 14.0811 22.4141 14.417 22 14.417H19V16.25H22C22.4142 16.25 22.75 16.5858 22.75 17C22.75 17.4142 22.4142 17.75 22 17.75H18.8535C18.6506 18.2509 18.2509 18.6496 17.75 18.8525V22C17.75 22.4142 17.4142 22.75 17 22.75C16.5858 22.75 16.25 22.4142 16.25 22V19H14.417V22C14.417 22.4141 14.0811 22.7498 13.667 22.75C13.2528 22.75 12.917 22.4142 12.917 22V19H11.083V22C11.083 22.4142 10.7472 22.75 10.333 22.75C9.91895 22.7498 9.58301 22.4141 9.58301 22V19H7.75V22C7.75 22.4142 7.41421 22.75 7 22.75C6.58579 22.75 6.25 22.4142 6.25 22V18.8525C5.74912 18.6496 5.34938 18.2509 5.14648 17.75H2C1.58579 17.75 1.25 17.4142 1.25 17C1.25 16.5858 1.58579 16.25 2 16.25H5V14.417H2C1.5859 14.417 1.25018 14.0811 1.25 13.667C1.25 13.2528 1.58579 12.917 2 12.917H5V11.083H2C1.58579 11.083 1.25 10.7472 1.25 10.333C1.25018 9.91895 1.5859 9.58301 2 9.58301H5V7.75H2C1.58579 7.75 1.25 7.41421 1.25 7C1.25 6.58579 1.58579 6.25 2 6.25H5.14648C5.34942 5.74896 5.74896 5.34942 6.25 5.14648V2C6.25 1.58579 6.58579 1.25 7 1.25C7.41421 1.25 7.75 1.58579 7.75 2V5H9.58301V2C9.58301 1.5859 9.91895 1.25018 10.333 1.25C10.7472 1.25 11.083 1.58579 11.083 2V5H12.917V2C12.917 1.58579 13.2528 1.25 13.667 1.25C14.0811 1.25018 14.417 1.5859 14.417 2V5H16.25V2C16.25 1.58579 16.5858 1.25 17 1.25ZM7.5 15H9.01855L9.35645 13.8789H11.293L11.6318 15H13.1543L10.9873 9H9.6543L7.5 15ZM14.0908 15H15.5V9H14.0908V15Z" fill="currentColor"/>`,
  duotone: `<path d="M5 7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V17C19 18.1046 18.1046 19 17 19H7C5.89543 19 5 18.1046 5 17V7Z" fill="currentColor" fill-opacity="0.2"/>
<mask id="path-2-inside-1_488_133" fill="white">
<path d="M5 7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V17C19 18.1046 18.1046 19 17 19H7C5.89543 19 5 18.1046 5 17V7Z"/>
</mask>
<path d="M7 5V6.5H17V5V3.5H7V5ZM19 7H17.5V17H19H20.5V7H19ZM17 19V17.5H7V19V20.5H17V19ZM5 17H6.5V7H5H3.5V17H5ZM7 19V17.5C6.72386 17.5 6.5 17.2761 6.5 17H5H3.5C3.5 18.933 5.067 20.5 7 20.5V19ZM19 17H17.5C17.5 17.2761 17.2761 17.5 17 17.5V19V20.5C18.933 20.5 20.5 18.933 20.5 17H19ZM17 5V6.5C17.2761 6.5 17.5 6.72386 17.5 7H19H20.5C20.5 5.067 18.933 3.5 17 3.5V5ZM7 5V3.5C5.067 3.5 3.5 5.067 3.5 7H5H6.5C6.5 6.72386 6.72386 6.5 7 6.5V5Z" fill="currentColor" mask="url(#path-2-inside-1_488_133)"/>
<path d="M7 5.5V2" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M10.3333 5.5V2" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M13.6667 5.5V2" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M17 5.5V2" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M18.5 7L22 7" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M18.5 10.3333L22 10.3333" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M18.5 13.6667L22 13.6667" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M18.5 17L22 17" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M17 18.5L17 22" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M13.6667 18.5L13.6667 22" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M10.3333 18.5L10.3333 22" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M7 18.5L7 22" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M5.5 17L2 17" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M5.5 13.6667L2 13.6667" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M5.5 10.3333L2 10.3333" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M5.5 7L2 7" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M15.5 9V15H14.0904V9H15.5Z" fill="currentColor"/>
<path d="M10.448 10.261L9.01833 15H7.5L9.65465 9H10.6172L10.448 10.261ZM11.6321 15L10.1984 10.261L10.0131 9H10.9877L13.1545 15H11.6321ZM11.5757 12.7624V13.8791H8.56726V12.7624H11.5757Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * AiMemory icon
 * Variants: outline, fill, duotone
 */
export function AiMemory({
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

AiMemory.displayName = "AiMemory";
AiMemory.variants = AVAILABLE;
