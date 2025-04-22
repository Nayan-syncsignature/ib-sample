import React from "react";

const Ellipse = ({ color, opacity, className }: { color: string; opacity?: number; className?: string; }) => {
  return (
    <svg
      width="446"
      height="396"
      viewBox="0 0 446 396"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_f_329_725)">
        <circle cx="251" cy="216" r="171" fill={color} fillOpacity={opacity} />
      </g>
      <defs>
        <filter
          id="filter0_f_329_725"
          x="0"
          y="-35"
          width="502"
          height="502"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="40"
            result="effect1_foregroundBlur_329_725"
          />
        </filter>
      </defs>
      x
    </svg>
  );
};

export default Ellipse;
