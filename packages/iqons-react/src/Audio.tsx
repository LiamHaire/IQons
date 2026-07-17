import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M10.3701 15.5L19.792 20.4472C20.0711 20.5875 20.5 20.4083 20.5 19.9492V4.05075C20.5 3.5919 20.0711 3.41189 19.792 3.55172L10.3701 8.49997H4C3.72391 8.49997 3.50004 8.72382 3.5 8.99997V15C3.5 15.2761 3.72386 15.5 4 15.5V17C2.89543 17 2 16.1045 2 15V8.99997C2.00004 7.89543 2.89545 6.99997 4 6.99997H10L19.1055 2.21871C20.4353 1.53794 22 2.52846 22 4.05075V19.9492C22 21.4715 20.4353 22.462 19.1055 21.7812L10 17H4V15.5H10.3701Z" fill="currentColor"/>`,
  fill: `<path d="M18.1055 3.21902C19.4353 2.5365 21 3.52961 21 5.05594V18.9436C21 20.47 19.4353 21.4632 18.1055 20.7805L11 17.0003H5C3.89552 17.0003 3.00014 16.1047 3 15.0003V9.00027C3 7.8957 3.89543 7.00027 5 7.00027H11L18.1055 3.21902Z" fill="currentColor"/>`,
  duotone: `<path d="M18.1055 3.21902C19.4353 2.5365 21 3.52961 21 5.05594V18.9436C21 20.47 19.4353 21.4632 18.1055 20.7805L11 17.0003H5C3.89552 17.0003 3.00014 16.1047 3 15.0003V9.00027C3 7.8957 3.89543 7.00027 5 7.00027H11L18.1055 3.21902Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M11.374 15.5007L18.7891 19.446C19.0621 19.5862 19.4998 19.4146 19.5 18.9441V5.05637C19.5 4.59112 19.0735 4.41708 18.7998 4.54855L11.7051 8.32492L11.374 8.5007H5C4.72386 8.5007 4.5 8.72456 4.5 9.0007V14.9997C4.50004 15.2761 4.72414 15.5007 5 15.5007V17.0007L4.7959 16.99C3.85455 16.8945 3.10648 16.1461 3.01074 15.2048L3 15.0007V9.0007C3 7.96503 3.78719 7.1127 4.7959 7.01047L5 7.0007H11L18.1055 3.21945C19.4353 2.53693 21 3.53004 21 5.05637V18.9441L20.9951 19.0847C20.9054 20.4837 19.4895 21.3827 18.2305 20.8396L18.1055 20.781L11 17.0007H5V15.5007H11.374Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Audio icon
 * Variants: outline, fill, duotone
 */
export function Audio({
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

Audio.displayName = "Audio";
Audio.variants = AVAILABLE;
