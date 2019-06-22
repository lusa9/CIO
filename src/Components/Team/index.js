import React from 'react';
import { SectionHeader } from '../Section Header';
import gary from '../../assets/gary.jpg'
import bill from '../../assets/bill.jpg'
import mark from '../../assets/mark.jpg'
import sam from '../../assets/sam.jpg'
import aaron from '../../assets/aaron.jpg'
import luka from '../../assets/luka.jpg'

const members = [
    {
        image: gary,
        title: "Gary Dugan - CIO",
        description: "Investment professional with 35+ years experience of buy and sell side of the banking businesses. I have managed numerous strongly performing investment and advisory teams in large banks in Europe and more recently in Asia and the Middle East. I have built businesses from scratch and successfully restructured businesses. I have had links with Asia and particularly Singapore since 1999 when I managed money for the GIC, Hong Kong Jockey Club and Brunei government. The core of my career was the 11 years at JPMorgan where I made Managing Director. On the buy side I have worked for asset management firms (e.g. JPMorgan) and private banks (Barclays, Merrill Lynch, Coutts, Emirates NBD and NBAD). I have a reputation for making bold calls on the markets. I made major bear calls on equity markets in 1987, at the top of the tech boom and the financial crisis in August 2007, and a bull call on equity markets on March 17th 2009. I have been a high profile with the media regularly appearing in the printed press and on TV. I often speak at conferences and provide industry thought leadership on a number of macro and investment topics.  In the past I made a presentation to the European Parliament on the outlook for asset markets after the introduction of the euro. I am highly regarded for my team leadership, the rigour and intellect I bring to the investment process, my attention to governance and ethics, and my affinity with clients in presentations and meetings. I was voted Private Banker of the year 2015 (MENA) from Wealth Briefing."
    },
    {
        image: bill,
        title: "Bill O'Neill - Consultant CIO",
        description: "Bill has over 30 years’ experience as an economist and strategist with some of the world’s leading investment firms. Bill held the role as the CIO for Merrill Lynch wealth management in London and Head of the UK Investment Office for UBS Wealth Management between 2013-16. Bill worked with Gary Dugan as a senior strategist at Barclays Wealth and JPMorgan between 2001 and 2007. From 1991 and 2001 Bill was an international strategist at James Capel Australia and HSBC Investments. Bill has an M.A. degree in Economics from the University of Dublin and an M.Sc. in Econometrics and Quantitative Economics from Birkbeck College, University of London."
    },
    {
        image: mark,
        title: "Mark McFarland - Consultant CIO",
        description: "Global economist with 20+ years of senior research and advisory experience in Asia, Europe and frontier markets. Team head for economics research and tactical asset allocation. Specialisation: G7 markets, all-Asia and frontier markets in the Middle East and Africa. Advisor to institutional, corporate and individual HNW clients. Keynote speaker at industry conferences and in the financial media. He was the Chief Economist at Coutts / UBP and led global economic research & the all-Asia investment strategy team. Also the former Chief Strategist / EXCO member at Emirates NBD - team head & chair of tactical asset allocation and Head of Investment Advisory. Marks clients primarily include Sovereigns, institutions, corporate treasuries & private investors. He received his MSc in Economics from Warwick University's prestigious graduate school, he is a Hong Kong SFC licence holder (1 & 4) & HK Permanent Resident, Member of the Hong Kong Institute of Directors and the Republic of Ireland & UK nationalities."
    },
    {
        image: sam,
        title: "Sam Picot, CFA – Fund Analyst",
        description: "Sam joined Purple Asset Management following a 6 year career at Russell Investments in Sydney & Auckland. At Russell, Sam worked initially as a risk analyst before spending 3 years in investment/fund research. Sam provides fund research to our Asian client base and is a key support to the London based fund research team. Sam has a Bcom (1st Class) degree in Finance and Economics, and is conversationally fluent in Mandarin."
    },
    {
        image: aaron,
        title: "Aaron Telfer, CFA - Investment Director",
        description: "Aaron has over 16 years’ experience, joining Royal Bank of Scotland from university in 2000, starting as a Trainee Portfolio Manager for NatWest Private Banking. Having joined Coutts and progressing to Senior Portfolio Manager, he spent over 10 years gaining experience across all asset classes, managing bespoke, globally diversified, multi-asset class investment portfolios for international high net and ultra-high net worth individuals. Aaron moved to Singapore in 2014 and prior to joining our Singapore office, was an investment specialist within a Singapore Advisory firm. Aaron’s depth of knowledge and experience in a multi-asset environment through various trading conditions adds significant expertise to the team, where he holds responsibility for Asian discretionary model portfolio solutions. Aaron has a degree in Russian Studies, including a year studying in St Petersburg and is a CFA charter holder. Over 16 years’ experience of managing bespoke, globally diversified, multi-asset portfolios for institutional and ultra-high net worth investors. Aaron worked at Coutts for ten years prior to moving to Singapore in 2014. Aaron has a degree in Russian Studies, including a year studying in St Petersburg and is a CFA charter holder."
    },
    {
        image: luka,
        title: "Luka Stimac - Consultant",
        description: "Luka started his financial career by co-founding a hedge fund in the Dubai International Financial Centre straight out of university, and ultimately became the company's Vice President. He worked several years on developing the company to become a recognised brand and a platform to serve all alternative fund types, from private equity, hedge and VC funds. He also co-founded the largest and most exclusive alternative investment conferences in the Middle East, and worked with the best fund managers as well as investors from around the world. After selling his shares and exiting he spent several years in various roles within the IT industry and held several advisory roles in Europe. Luka was also a member of AIMA's Middle East Executive Committee which worked closely with policy makers, legislators and regulators. He holds a B.A. degree in International Business Management from Franklin University Switzerland."
    },
]

export const Team = () => (
    <div className="d-flex flex-1 flex-direction-column">
        <SectionHeader name="The Team"/>
        <div className="content-container margin-top-20 margin-bottom-200">
            <div className="content flex-1 flex-direction-column">
                {
                    members.map(Member)
                }
            </div>
        </div>
    </div>
)

const Member = ({image, title, description}) => (
    <div className="d-flex align-items-start margin-top-120">
        <img src={image} />
        <div className="d-flex flex-direction-column margin-left-40">
            <h2>{title}</h2>
            <h4 className="margin-top-5 text-justify">{description}</h4>
        </div>
    </div>
)

