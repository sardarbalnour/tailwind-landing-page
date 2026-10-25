import type { SVGProps } from "react";

export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="260 360 1420 1240"
      fill="currentColor"
      {...props}
    >
      {/* Circle (sun/moon) */}
      <path
        d="M1187 609 L735 882 L725 905
       L567 1334 A495 485 0 1 1 1187 609 Z"
      />

      {/* Nib: outer shape with inner cut-out (transparent) */}
      <path
        fillRule="evenodd"
        d="M1648 395 L780 917 L540 1572 L912 1350
         L1130 1350 C1250 1350 1320 1290 1355 1210 
         C1380 1155 1405 1090 1425 1040 Z M1545 520
          L823 953 L640 1448 L775 1370 L832 1335 L900
           1295 L1135 1295 C1230 1295 1290 1230 1315
            1170 L1342 1063 L1160 1163 L1052 1163 L1372 985 Z"
      />

      {/* Stylus line + dot */}
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={38}
        strokeLinejoin="miter"
        d="M1195 920 L928 1072 L768 1408"
      />
      <circle cx={1202} cy={911} r={53} />
    </svg>
  );
}
