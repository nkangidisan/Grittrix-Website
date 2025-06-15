import type { SVGProps } from 'react';

export function GrittrixLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="150"
      height="37.5"
      aria-labelledby="grittrixLogoTitle"
      role="img"
      {...props}
    >
      <title id="grittrixLogoTitle">Grittrix AI Solutions Logo</title>
      <text
        x="10"
        y="35"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize="30"
        fontWeight="bold"
        fill="hsl(var(--primary))"
      >
        GRITTRIX
      </text>
      <text
        x="125"
        y="35"
        fontFamily="'Inter', sans-serif"
        fontSize="18"
        fill="hsl(var(--foreground))"
        opacity="0.8"
      >
        AI
      </text>
    </svg>
  );
}
