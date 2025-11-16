import {JSX} from "react";

function CustomSVG({icon,viewBox,style}): JSX.Element {
    let element = null;

    if (icon === 'account') {
        element = (
            <g>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </g>
        );
    }
    if(icon==='arrow-left'){
        element = (
            <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"/>
            </g>
        );
    }
    if(icon==='arrow-right'){
        element = (
            <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"/>
            </g>
        );
    }
    if (icon === 'lbc') {
        element = (
            <>
                <path
                    d="M1.03125 14.1562V9.84375L12 0L22.9688 9.84375V14.1562L12 24L1.03125 14.1562Z"></path>
                <path
                    d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z"></path>
                <path
                    d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z"></path>
                <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z"
                      fill="url(#paint0_linearc678bc17-6ce2-4a8b-a17c-0f18274dc1ff)"></path>
                <path
                    d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z"
                    fill="url(#paint1_linearc678bc17-6ce2-4a8b-a17c-0f18274dc1ff)"></path>
                <path d="M15.075 13.6313L20.0062 9.1876L16.2937 5.8501L11.3625 10.2938L15.075 13.6313Z"
                      fill="url(#paint2_linearc678bc17-6ce2-4a8b-a17c-0f18274dc1ff)"></path>
                <path
                    d="M15.075 13.6312L8.86875 19.2L12 22.0125L21.3937 13.575V10.425L20.0062 9.1875L15.075 13.6312Z"
                    fill="url(#paint3_linearc678bc17-6ce2-4a8b-a17c-0f18274dc1ff)"></path>
                <defs>
                    <linearGradient id="paint0_linearc678bc17-6ce2-4a8b-a17c-0f18274dc1ff" x1="3.7206"
                                    y1="14.2649" x2="15.1645" y2="14.2649" gradientUnits="userSpaceOnUse">
                        <stop offset="0.2464" stopColor="#E700FF"></stop>
                        <stop offset="0.3166" stopColor="#E804F9"></stop>
                        <stop offset="0.4108" stopColor="#E90EE8"></stop>
                        <stop offset="0.5188" stopColor="#EC1FCC"></stop>
                        <stop offset="0.637" stopColor="#F037A5"></stop>
                        <stop offset="0.7635" stopColor="#F45672"></stop>
                        <stop offset="0.8949" stopColor="#FA7A36"></stop>
                        <stop offset="1" stopColor="#FF9B00"></stop>
                    </linearGradient>
                    <linearGradient id="paint1_linearc678bc17-6ce2-4a8b-a17c-0f18274dc1ff" x1="2.60274"
                                    y1="8.40089" x2="15.14" y2="8.40089" gradientUnits="userSpaceOnUse">
                        <stop offset="0.4233" stopColor="#FABD09"></stop>
                        <stop offset="0.8292" stopColor="#FA6B00"></stop>
                    </linearGradient>
                    <linearGradient id="paint2_linearc678bc17-6ce2-4a8b-a17c-0f18274dc1ff" x1="6.8682"
                                    y1="14.1738" x2="25.405" y2="4.84055" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#BAFF8E"></stop>
                        <stop offset="0.6287" stopColor="#008EBB"></stop>
                    </linearGradient>
                    <linearGradient id="paint3_linearc678bc17-6ce2-4a8b-a17c-0f18274dc1ff" x1="25.2522"
                                    y1="6.08799" x2="3.87697" y2="27.836" gradientUnits="userSpaceOnUse">
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
    if(icon==='logo'){
        element = (
            <>
                <path
                    d="M296,85.9V100l-138.8,85.3L52.6,134l0.2-7.9l104,51.2L289,96.1v-5.8L164.2,30.1L25,116.2v38.5l131.8,65.2 l137.6-84.4l3.9,6l-141.1,86.4L18.1,159.1v-46.8l145.8-90.2C163.9,22.1,296,85.9,296,85.9z"></path>
                <path d="M294.3,150.9l2-12.6l-12.2-2.1l0.8-4.9l17.1,2.9l-2.8,17.5L294.3,150.9L294.3,150.9z"></path>
            </>
        );
    }
    if(icon==='menu'){
        element = (
            <g strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
            </g>
        );
    }
    if(icon==='publish'){
        element = (
            <g fill="none" fillRule="evenodd" strokeLinecap="round">
                <path
                    d="M8, 18 L5, 18 L5, 18 C2.790861, 18 1, 16.209139 1, 14 C1, 11.790861 2.790861, 10 5, 10 C5.35840468, 10 5.70579988, 10.0471371 6.03632437, 10.1355501 C6.01233106, 9.92702603 6, 9.71495305 6, 9.5 C6, 6.46243388 8.46243388, 4 11.5, 4 C14.0673313, 4 16.2238156, 5.7590449 16.8299648, 8.1376465 C17.2052921, 8.04765874 17.5970804, 8 18, 8 C20.7614237, 8 23, 10.2385763 23, 13 C23, 15.7614237 20.7614237, 18 18, 18 L16, 18"
                    strokeLinejoin="round"
                />
                <path d="M12, 13 L12, 21"/>
                <polyline
                    strokeLinejoin="round"
                    transform="translate(12.000000, 12.500000) scale(1, -1) translate(-12.000000, -12.500000)"
                    points="15 11 12 14 9 11"
                />
            </g>
        );
    }
    if (icon === 'search') {
        element = (
            <g>
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </g>
        );
    }
    if(icon==='settings'){
        element = (
            <g>
                <circle cx="12" cy="12" r="3"/>
                <path
                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </g>
        );
    }

    return (
        <svg viewBox={viewBox} style={style}>
            {element}
        </svg>
    );
}

export default CustomSVG;
