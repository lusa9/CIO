import React from 'react';
import { SectionHeader } from '../Section Header';

export const Contact = () => (
    <div className="d-flex flex-1 flex-direction-column">
        <SectionHeader name="Contact"/>
        <div className="content-container margin-top-100 margin-bottom-200">
            <div className="content d-flex layout-2-container">
                <iframe style={{backgroundColor: "#E5E3DF"}} width="100%" height={400} src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=Purple%20Asset%20Management%20PTE.%20LTD%208%20Eu%20Tong%20Sen%20Street%2C%20%2317-84%20The%20Central%20Singapore%20059818+(Title)&amp;ie=UTF8&amp;t=&amp;z=13&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                <div className="d-flex flex-direction-column layout-2-details" >
                    <div className="d-flex">
                        <div className="d-flex justify-content-center" style={{width: 23}}>
                            <LocationIcon />
                        </div>
                        <div className="margin-left-20">
                            <h4 style={{lineHeight: "20px", whiteSpace: "nowrap"}}>
                                Purple Asset Management PTE. LTD <br/>
                                8 Eu Tong Sen Street, #17-84 <br/>
                                The Central <br/>
                                Singapore 059818 <br/>
                            </h4>
                        </div>
                    </div>
                    <div className="d-flex margin-top-30">
                        <div className="d-flex justify-content-center" style={{width: 23}}>
                            <MailIcon />
                        </div>
                        <div className="margin-left-20">
                            <a href="mailto:info@theglobalciooffice.com" className="button">info@theglobalciooffice.com</a>
                        </div>
                    </div>
                    <div className="d-flex margin-top-30">
                        <div className="d-flex justify-content-center" style={{width: 23}}>
                            <PhoneIcon />
                        </div>
                        <div className="margin-left-20">
                            <a href="tel:+6591737270" className="contact-button">+65 91737270</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

const LocationIcon = () => (
    <svg width="17px" height="23px" viewBox="0 0 17 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="Contact" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Concact" transform="translate(-938.000000, -457.000000)" className="contact-icon-fill">
                <path d="M946.05,457 C941.5995,457 938,460.5995 938,465.05 C938,471.0875 946.05,480 946.05,480 C946.05,480 954.1,471.0875 954.1,465.05 C954.1,460.5995 950.5005,457 946.05,457 Z M946.05,467.925 C944.463,467.925 943.175,466.637 943.175,465.05 C943.175,463.463 944.463,462.175 946.05,462.175 C947.637,462.175 948.925,463.463 948.925,465.05 C948.925,466.637 947.637,467.925 946.05,467.925 Z" id="Shape"></path>
            </g>
        </g>
    </svg>
)

const MailIcon = () => (
    <svg width="23px" height="19px" viewBox="0 0 23 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
            <path d="M955.7,648 L937.3,648 C936.035,648 935.0115,649.035 935.0115,650.3 L935,664.1 C935,665.365 936.035,666.4 937.3,666.4 L955.7,666.4 C956.965,666.4 958,665.365 958,664.1 L958,650.3 C958,649.035 956.965,648 955.7,648 Z M955.7,652.6 L946.5,658.35 L937.3,652.6 L937.3,650.3 L946.5,656.05 L955.7,650.3 L955.7,652.6 Z" id="path-1"></path>
        </defs>
        <g id="Contact" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Concact" transform="translate(-935.000000, -648.000000)">
                <mask id="mask-2" fill="white">
                    <use xlinkHref="#path-1"></use>
                </mask>
                <use id="Shape" className="contact-icon-fill" xlinkHref="#path-1"></use>
            </g>
        </g>
    </svg>
)

const PhoneIcon = () => (
    <svg width="23px" height="23px" viewBox="0 0 23 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="Contact" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Concact" transform="translate(-935.000000, -581.000000)" className="contact-icon-fill" fill-rule="nonzero">
                <path d="M957.989037,599.151452 C958.037774,599.525078 957.923988,599.849937 957.648158,600.126026 L954.409808,603.342003 C954.263717,603.504432 954.073027,603.642616 953.837659,603.756197 C953.60229,603.869937 953.371019,603.94303 953.143846,603.975476 C953.127613,603.975476 953.078797,603.979657 952.997596,603.987778 C952.916553,603.99586 952.811043,604 952.681185,604 C952.372691,604 951.873507,603.947211 951.183633,603.841592 C950.493759,603.735973 949.649717,603.476047 948.651509,603.061932 C947.653061,602.647738 946.520896,602.026367 945.254814,601.198058 C943.988732,600.369789 942.641409,599.232706 941.212964,597.787047 C940.076701,596.666286 939.135226,595.594254 938.388539,594.570991 C937.641851,593.547648 937.041255,592.601498 936.58675,591.732503 C936.132205,590.863507 935.791326,590.075726 935.564073,589.369159 C935.336821,588.662593 935.182614,588.053484 935.101452,587.541832 C935.02029,587.03018 934.987826,586.628168 935.004058,586.335796 C935.02029,586.043423 935.028407,585.880994 935.028407,585.848509 C935.060871,585.621108 935.133917,585.389646 935.247543,585.154124 C935.361169,584.918602 935.499144,584.727748 935.661467,584.581562 L938.899817,581.341101 C939.12707,581.1137 939.386787,581 939.678969,581 C939.889989,581 940.076661,581.060911 940.238984,581.182733 C940.401308,581.304555 940.539283,581.454801 940.652909,581.633473 L943.258198,586.579439 C943.404289,586.839326 943.44487,587.123577 943.37994,587.432192 C943.315011,587.740808 943.177036,588.000694 942.966016,588.211852 L941.77294,589.405706 C941.740475,589.438192 941.712068,589.490981 941.68772,589.564074 C941.663371,589.637167 941.651197,589.698078 941.651197,589.746807 C941.716126,590.087908 941.862217,590.477738 942.08947,590.916296 C942.284258,591.306126 942.584556,591.781231 942.990364,592.341612 C943.396173,592.901992 943.97242,593.547608 944.719107,594.278539 C945.449562,595.025792 946.098856,595.606397 946.666987,596.020671 C947.234999,596.434706 947.709954,596.73938 948.091414,596.934294 C948.472874,597.129209 948.765055,597.24697 948.96792,597.287458 L949.272196,597.348409 C949.304661,597.348409 949.357535,597.336187 949.430501,597.311862 C949.503547,597.287458 949.556302,597.259073 949.588806,597.226547 L950.976631,595.813414 C951.268972,595.553568 951.609692,595.423624 951.999307,595.423624 C952.275337,595.423624 952.494354,595.472313 952.656677,595.56981 L952.680986,595.56981 L957.380205,598.347348 C957.721204,598.558665 957.924068,598.826593 957.989037,599.151452 Z" id="Path"></path>
            </g>
        </g>
    </svg>
)



