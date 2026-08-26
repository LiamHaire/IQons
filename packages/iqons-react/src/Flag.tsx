import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path fill-rule="evenodd" clip-rule="evenodd" d="M18.9473 2C19.7861 2.00003 20.2871 2.81569 19.8223 3.4248L17.0967 6.99121C16.8614 7.29912 16.8614 7.70088 17.0967 8.00879L19.8223 11.5752C20.2871 12.1843 19.7861 13 18.9473 13H5.5V21.25C5.5 21.6642 5.16421 22 4.75 22C4.33579 22 4 21.6642 4 21.25V2.91699C4 2.44232 4.41351 2.05176 4.94336 2.00488L5.05078 2H18.9473ZM5.5 11.5H17.877L15.9053 8.91895C15.2592 8.07339 15.2592 6.9266 15.9053 6.08105L17.877 3.5H5.5V11.5Z" fill="currentColor"/>`,
  fill: `<path d="M18.9473 2C19.7862 2 20.2871 2.81568 19.8223 3.4248L17.0967 6.99121C16.8614 7.29912 16.8614 7.70088 17.0967 8.00879L19.8223 11.5752C20.2871 12.1843 19.7862 13 18.9473 13H5.5V21.25C5.5 21.6642 5.16421 22 4.75 22C4.33579 22 4 21.6642 4 21.25V2.91699C4 2.41073 4.47055 2 5.05078 2H18.9473Z" fill="currentColor"/>`,
  duotone: `<path d="M18.9476 2H5.05059C4.47037 2 4 2.41041 4 2.91667V12.0833C4 12.5896 4.47037 13 5.05059 13H18.9476C19.7867 13 20.2872 12.184 19.8218 11.5749L17.0968 8.00848C16.8616 7.70057 16.8616 7.29943 17.0968 6.99153L19.8218 3.42514C20.2872 2.81597 19.7867 2 18.9476 2Z" fill="currentColor" fill-opacity="0.2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.9473 2C19.7861 2.00003 20.2871 2.81569 19.8223 3.4248L17.0967 6.99121C16.8614 7.29912 16.8614 7.70088 17.0967 8.00879L19.8223 11.5752C20.2871 12.1843 19.7861 13 18.9473 13H5.5V21.25C5.5 21.6642 5.16421 22 4.75 22C4.33579 22 4 21.6642 4 21.25V2.91699C4 2.44232 4.41351 2.05176 4.94336 2.00488L5.05078 2H18.9473ZM5.5 11.5H17.877L15.9053 8.91895C15.2592 8.07339 15.2592 6.9266 15.9053 6.08105L17.877 3.5H5.5V11.5Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Flag icon
 * Variants: outline, fill, duotone
 */
export function Flag({
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

Flag.displayName = "Flag";
Flag.variants = AVAILABLE;
