/**
 * Lucide-style stroked icons rendered as inline SVGs. No icon library import,
 * no client JS, full tree-shake. Add new keys here as the catalog grows.
 */

import type { ReactElement, SVGProps } from "react";

const COMMON: SVGProps<SVGSVGElement> = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const PATHS: Record<string, ReactElement> = {
  rocket: (
    <>
      <path d='M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z' />
      <path d='m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z' />
      <path d='M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0' />
      <path d='M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5' />
    </>
  ),
  scissors: (
    <>
      <circle cx='6' cy='6' r='3' />
      <circle cx='6' cy='18' r='3' />
      <line x1='20' y1='4' x2='8.12' y2='15.88' />
      <line x1='14.47' y1='14.48' x2='20' y2='20' />
      <line x1='8.12' y1='8.12' x2='12' y2='12' />
    </>
  ),
  camera: (
    <>
      <path d='M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z' />
      <circle cx='12' cy='13' r='3' />
    </>
  ),
  sparkles: (
    <>
      <path d='m12 3-1.9 5.8L4 10.9l5.8 1.9L12 19l1.9-5.8L20 10.9l-5.8-1.9L12 3Z' />
      <path d='M5 3v4' />
      <path d='M3 5h4' />
      <path d='M19 17v4' />
      <path d='M17 19h4' />
    </>
  ),
  home: (
    <>
      <path d='m3 10 9-7 9 7v10a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2V10Z' />
    </>
  ),
  shirt: (
    <>
      <path d='M20.4 6 16 4l-4 4-4-4-4.4 2L1 10l4 2v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9l4-2-2.6-4Z' />
    </>
  ),
  sofa: (
    <>
      <path d='M20 10V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2' />
      <path d='M2 12h20v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6Z' />
      <path d='M4 18v2' />
      <path d='M20 18v2' />
    </>
  ),
  car: (
    <>
      <path d='M5 17H3v-3l1-4 2-4h12l2 4 1 4v3h-2' />
      <circle cx='7.5' cy='17.5' r='2.5' />
      <circle cx='16.5' cy='17.5' r='2.5' />
    </>
  ),
  megaphone: (
    <>
      <path d='m3 11 18-8v18l-18-8Z' />
      <path d='M11.6 16.8a3 3 0 1 1-5.8-1.6' />
    </>
  ),
  users: (
    <>
      <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
      <circle cx='9' cy='7' r='4' />
      <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
      <path d='M16 3.13a4 4 0 0 1 0 7.75' />
    </>
  ),
  wallet: (
    <>
      <rect x='2' y='6' width='20' height='14' rx='2' />
      <path d='M2 10h20' />
      <circle cx='17' cy='15' r='1' />
    </>
  ),
  search: (
    <>
      <circle cx='11' cy='11' r='7' />
      <path d='m20 20-3.5-3.5' />
    </>
  ),
  play: <path d='M6 4v16l14-8L6 4Z' />,
  bookmark: <path d='M19 21 12 16l-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16Z' />,
  arrowRight: (
    <>
      <line x1='5' y1='12' x2='19' y2='12' />
      <polyline points='12 5 19 12 12 19' />
    </>
  ),
  check: <polyline points='4 12 10 18 20 6' />,
  clock: (
    <>
      <circle cx='12' cy='12' r='9' />
      <polyline points='12 7 12 12 15 14' />
    </>
  ),
  layers: (
    <>
      <path d='m12 3 9 5-9 5-9-5 9-5Z' />
      <path d='m3 13 9 5 9-5' />
      <path d='m3 18 9 5 9-5' />
    </>
  ),
  flame: (
    <>
      <path d='M8.5 14.5A2.5 2.5 0 0 0 11 17a4 4 0 0 0 4-4c0-3-2.5-5-2.5-7 0 0-1.5 1-1.5 3a3 3 0 0 1-2 3 3 3 0 0 0-3 3 3 3 0 0 0 2.5 2.5Z' />
      <path d='M12 22s8-4 8-12-8-8-8-8-8 0-8 8 8 12 8 12Z' />
    </>
  ),
  trophy: (
    <>
      <path d='M8 21h8' />
      <path d='M12 17v4' />
      <path d='M7 4h10v4a5 5 0 0 1-10 0V4Z' />
      <path d='M17 4h3v3a3 3 0 0 1-3 3' />
      <path d='M7 4H4v3a3 3 0 0 0 3 3' />
    </>
  ),
  fileText: (
    <>
      <path d='M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z' />
      <polyline points='14 3 14 9 20 9' />
      <line x1='8' y1='13' x2='16' y2='13' />
      <line x1='8' y1='17' x2='13' y2='17' />
    </>
  ),
  download: (
    <>
      <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
      <polyline points='7 10 12 15 17 10' />
      <line x1='12' y1='15' x2='12' y2='3' />
    </>
  ),
  command: (
    <path d='M18 6h-3a3 3 0 1 0 3 3v0V6Zm0 0v3m0 0H9m9 0v3m0 0a3 3 0 1 0 3 3v0M9 6V3a3 3 0 1 0-3 3h0m3 0H6m3 0v3m0 0v3a3 3 0 1 1-3 3h0m3-3h3' />
  ),
  helpCircle: (
    <>
      <circle cx='12' cy='12' r='10' />
      <path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3' />
      <line x1='12' y1='17' x2='12.01' y2='17' />
    </>
  ),
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: keyof typeof PATHS | string;
  size?: number;
}

export function Icon({ name, size = 16, ...rest }: IconProps) {
  const path = PATHS[name];
  if (!path) return null;
  return (
    <svg {...COMMON} width={size} height={size} {...rest} aria-hidden='true'>
      {path}
    </svg>
  );
}

export type IconName = keyof typeof PATHS;
