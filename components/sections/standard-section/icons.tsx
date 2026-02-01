import * as React from "react";

export const RedCheck = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        className="beckham-comparison__check-icon"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <circle
            cx={12}
            cy={12}
            r={11}
            fill="#9b1b1f"
            stroke="#9b1b1f"
            strokeWidth={2}
        />
        <path
            d="m7 12 3.5 3.5L17 9"
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const GreyX = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        className="beckham-comparison__x-icon"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <circle
            cx={12}
            cy={12}
            r={11}
            fill="#e8e8e8"
            stroke="#d0d0d0"
            strokeWidth={2}
        />
        <path
            d="m8.5 8.5 7 7m0-7-7 7"
            stroke="#999"
            strokeWidth={2}
            strokeLinecap="round"
        />
    </svg>
);

export const GreenX = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width={21}
        height={20}
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <ellipse
            cx={10.4883}
            cy={10.0002}
            rx={10}
            ry={9.7561}
            fill="#1E3B32"
            fillOpacity={0.44}
        />
        <path
            d="M6.82812 6.09766L14.1452 13.4147M6.82812 13.4147L14.1452 6.09766"
            stroke="white"
            strokeWidth={2}
        />
    </svg>
);

export const GreenCheck = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width={21}
        height={20}
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <ellipse cx={10.4883} cy={10.0002} rx={10} ry={9.7561} fill="#18332A" />
        <ellipse cx={10.4883} cy={10.0002} rx={10} ry={9.7561} fill="#18332A" />
        <ellipse cx={10.4883} cy={10.0002} rx={10} ry={9.7561} fill="#18332A" />
        <path
            d="M6.44531 10.2079L9.54815 13.114C12.2077 9.79279 14.424 6.88672 14.424 6.88672"
            stroke="#EFEFEF"
            strokeWidth={2}
            strokeLinecap="square"
        />
    </svg>
);
