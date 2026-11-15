import type { SVGProps } from "react";
import type { SimpleIcon } from "simple-icons";

interface BrandIconProps extends Omit<SVGProps<SVGSVGElement>, "children"> {
  icon: SimpleIcon;
  size?: number;
}

export function BrandIcon({ icon, size = 20, ...props }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d={icon.path} />
    </svg>
  );
}
