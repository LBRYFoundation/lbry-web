import React, { JSX } from "react";
import type Props from "react";

function CustomSVG({
  className,
  icon,
  viewBox,
  style,
}: Props & {
  className?: string;
  icon: string;
  viewBox: string;
  style?: object;
}): JSX.Element {
  let element = null;

  if (icon === "account") {
    element = (
      <g>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </g>
    );
  }
  if (icon === "arrow-left") {
    element = (
      <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeWidth="2">
        <polyline points="15 18 9 12 15 6" />
      </g>
    );
  }
  if (icon === "arrow-right") {
    element = (
      <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeWidth="2">
        <polyline points="9 18 15 12 9 6" />
      </g>
    );
  }
  if (icon === "at") {
    element = (
      <g>
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
      </g>
    );
  }
  if (icon === "chat") {
    element = (
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    );
  }
  if (icon === "compass") {
    element = (
      <g>
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
      </g>
    );
  }
  if (icon === "flask") {
    element = (
      <g>
        <path d="M 8.4312337,1.6285136 V 9.4232264 L 2.2367584,22.725564 H 22.030217 L 15.773797,9.2902071 V 1.6285136 Z"></path>
        <path d="M 4.2426407,18.166369 H 12.197591"></path>
        <path d="m 6.363961,14.188893 h 5.701048"></path>
      </g>
    );
  }
  if (icon === "heart") {
    element = (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    );
  }
  if (icon === "help") {
    element = (
      <g>
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
        <line x1="12" y1="17" x2="12" y2="17"></line>
      </g>
    );
  }
  if (icon === "home") {
    element = (
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1, 11 L12, 2 C12, 2 22.9999989, 11.0000005 23, 11"></path>
        <path d="M3, 10 C3, 10 3, 10.4453982 3, 10.9968336 L3, 20.0170446 C3, 20.5675806 3.43788135, 21.0138782 4.00292933, 21.0138781 L8.99707067, 21.0138779 C9.55097324, 21.0138779 10, 20.5751284 10, 20.0089602 L10, 15.0049177 C10, 14.449917 10.4433532, 14 11.0093689, 14 L12.9906311, 14 C13.5480902, 14 14, 14.4387495 14, 15.0049177 L14, 20.0089602 C14, 20.5639609 14.4378817, 21.0138779 15.0029302, 21.0138779 L19.9970758, 21.0138781 C20.5509789, 21.0138782 21.000006, 20.56848 21.000006, 20.0170446 L21.0000057, 10"></path>
      </g>
    );
  }
  if (icon === "inside") {
    element = (
      <g>
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
        <polyline points="10 17 15 12 10 7"></polyline>
        <line x1="15" y1="12" x2="3" y2="12"></line>
      </g>
    );
  }
  if (icon === "key") {
    element = (
      <g>
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
      </g>
    );
  }
  if (icon === "lbc") {
    element = (
      <>
        <path d="M1.03125 14.1562V9.84375L12 0L22.9688 9.84375V14.1562L12 24L1.03125 14.1562Z"></path>
        <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z"></path>
        <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z"></path>
        <path
          d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z"
          fill="url(#paint0_linearc678bc17-6ce2-4a8b-a17c-0f18274dc1ff)"
        ></path>
        <path
          d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z"
          fill="url(#paint1_linearc678bc17-6ce2-4a8b-a17c-0f18274dc1ff)"
        ></path>
        <path
          d="M15.075 13.6313L20.0062 9.1876L16.2937 5.8501L11.3625 10.2938L15.075 13.6313Z"
          fill="url(#paint2_linearc678bc17-6ce2-4a8b-a17c-0f18274dc1ff)"
        ></path>
        <path
          d="M15.075 13.6312L8.86875 19.2L12 22.0125L21.3937 13.575V10.425L20.0062 9.1875L15.075 13.6312Z"
          fill="url(#paint3_linearc678bc17-6ce2-4a8b-a17c-0f18274dc1ff)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linearc678bc17-6ce2-4a8b-a17c-0f18274dc1ff"
            x1="3.7206"
            y1="14.2649"
            x2="15.1645"
            y2="14.2649"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.2464" stopColor="#E700FF"></stop>
            <stop offset="0.3166" stopColor="#E804F9"></stop>
            <stop offset="0.4108" stopColor="#E90EE8"></stop>
            <stop offset="0.5188" stopColor="#EC1FCC"></stop>
            <stop offset="0.637" stopColor="#F037A5"></stop>
            <stop offset="0.7635" stopColor="#F45672"></stop>
            <stop offset="0.8949" stopColor="#FA7A36"></stop>
            <stop offset="1" stopColor="#FF9B00"></stop>
          </linearGradient>
          <linearGradient
            id="paint1_linearc678bc17-6ce2-4a8b-a17c-0f18274dc1ff"
            x1="2.60274"
            y1="8.40089"
            x2="15.14"
            y2="8.40089"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.4233" stopColor="#FABD09"></stop>
            <stop offset="0.8292" stopColor="#FA6B00"></stop>
          </linearGradient>
          <linearGradient
            id="paint2_linearc678bc17-6ce2-4a8b-a17c-0f18274dc1ff"
            x1="6.8682"
            y1="14.1738"
            x2="25.405"
            y2="4.84055"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BAFF8E"></stop>
            <stop offset="0.6287" stopColor="#008EBB"></stop>
          </linearGradient>
          <linearGradient
            id="paint3_linearc678bc17-6ce2-4a8b-a17c-0f18274dc1ff"
            x1="25.2522"
            y1="6.08799"
            x2="3.87697"
            y2="27.836"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BAFF8E"></stop>
            <stop offset="0.6287" stopColor="#008EBB"></stop>
          </linearGradient>
          <clipPath id="clip0">
            <rect width="24" height="24" fill="white"></rect>
          </clipPath>
        </defs>
      </>
    );
  }
  if (icon === "logo") {
    element = (
      <>
        <path d="M296,85.9V100l-138.8,85.3L52.6,134l0.2-7.9l104,51.2L289,96.1v-5.8L164.2,30.1L25,116.2v38.5l131.8,65.2 l137.6-84.4l3.9,6l-141.1,86.4L18.1,159.1v-46.8l145.8-90.2C163.9,22.1,296,85.9,296,85.9z"></path>
        <path d="M294.3,150.9l2-12.6l-12.2-2.1l0.8-4.9l17.1,2.9l-2.8,17.5L294.3,150.9L294.3,150.9z"></path>
      </>
    );
  }
  if (icon === "menu") {
    element = (
      <g strokeWidth="2">
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </g>
    );
  }
  if (icon === "publish") {
    element = (
      <g fill="none" fillRule="evenodd" strokeLinecap="round">
        <path
          d="M8, 18 L5, 18 L5, 18 C2.790861, 18 1, 16.209139 1, 14 C1, 11.790861 2.790861, 10 5, 10 C5.35840468, 10 5.70579988, 10.0471371 6.03632437, 10.1355501 C6.01233106, 9.92702603 6, 9.71495305 6, 9.5 C6, 6.46243388 8.46243388, 4 11.5, 4 C14.0673313, 4 16.2238156, 5.7590449 16.8299648, 8.1376465 C17.2052921, 8.04765874 17.5970804, 8 18, 8 C20.7614237, 8 23, 10.2385763 23, 13 C23, 15.7614237 20.7614237, 18 18, 18 L16, 18"
          strokeLinejoin="round"
        />
        <path d="M12, 13 L12, 21" />
        <polyline
          strokeLinejoin="round"
          transform="translate(12.000000, 12.500000) scale(1, -1) translate(-12.000000, -12.500000)"
          points="15 11 12 14 9 11"
        />
      </g>
    );
  }
  if (icon === "search") {
    element = (
      <g>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </g>
    );
  }
  if (icon === "settings") {
    element = (
      <g>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </g>
    );
  }
  if (icon === "spinner") {
    element = (
      <path d="M272 112C272 85.5 293.5 64 320 64C346.5 64 368 85.5 368 112C368 138.5 346.5 160 320 160C293.5 160 272 138.5 272 112zM272 528C272 501.5 293.5 480 320 480C346.5 480 368 501.5 368 528C368 554.5 346.5 576 320 576C293.5 576 272 554.5 272 528zM112 272C138.5 272 160 293.5 160 320C160 346.5 138.5 368 112 368C85.5 368 64 346.5 64 320C64 293.5 85.5 272 112 272zM480 320C480 293.5 501.5 272 528 272C554.5 272 576 293.5 576 320C576 346.5 554.5 368 528 368C501.5 368 480 346.5 480 320zM139 433.1C157.8 414.3 188.1 414.3 206.9 433.1C225.7 451.9 225.7 482.2 206.9 501C188.1 519.8 157.8 519.8 139 501C120.2 482.2 120.2 451.9 139 433.1zM139 139C157.8 120.2 188.1 120.2 206.9 139C225.7 157.8 225.7 188.1 206.9 206.9C188.1 225.7 157.8 225.7 139 206.9C120.2 188.1 120.2 157.8 139 139zM501 433.1C519.8 451.9 519.8 482.2 501 501C482.2 519.8 451.9 519.8 433.1 501C414.3 482.2 414.3 451.9 433.1 433.1C451.9 414.3 482.2 414.3 501 433.1z" />
    );
  }
  if (icon === "stack") {
    element = (
      <g transform="matrix(1,0,0,1,0,0)">
        <path d="M22.91,6.953,12.7,1.672a1.543,1.543,0,0,0-1.416,0L1.076,6.953a.615.615,0,0,0,0,1.094l10.209,5.281a1.543,1.543,0,0,0,1.416,0L22.91,8.047a.616.616,0,0,0,0-1.094Z"></path>
        <path d="M.758,12.75l10.527,5.078a1.543,1.543,0,0,0,1.416,0L23.258,12.75"></path>
        <path d="M.758,17.25l10.527,5.078a1.543,1.543,0,0,0,1.416,0L23.258,17.25"></path>
      </g>
    );
  }
  if (icon === "sun") {
    element = (
      <g>
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </g>
    );
  }
  if (icon === "tag") {
    element = (
      <g>
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
        <line x1="7" y1="7" x2="7" y2="7"></line>
      </g>
    );
  }
  if (icon === "world") {
    element = (
      <g>
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </g>
    );
  }

  return (
    <svg className={className} viewBox={viewBox} style={style}>
      {element}
    </svg>
  );
}

export default CustomSVG;
