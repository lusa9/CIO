import React from "react";
import { SectionHeader } from "../Section Header";
import gary from "../../assets/gary.jpg";
import johan from "../../assets/johan.jpg";
import rainer from "../../assets/rainer.jpg";
import bill from "../../assets/bill.jpg";
import mark from "../../assets/mark.jpg";
import sam from "../../assets/sam.jpg";
import luka from "../../assets/luka.jpg";
import javed from "../../assets/javed.jpg";
import placeholder from "../../assets/placeholder.jpg";
import { Helmet } from "react-helmet";

const members = [
  {
    image: gary,
    title: "Gary Dugan - CIO",
    description:
      "Investment professional with 35+ years experience of buy and sell side of the banking businesses. I have managed numerous strongly performing investment and advisory teams in large banks in Europe and more recently in Asia and the Middle East. I have built businesses from scratch and successfully restructured businesses. I have had links with Asia and particularly Singapore since 1999 when I managed money for the GIC, Hong Kong Jockey Club and Brunei government. The core of my career was the 11 years at JPMorgan where I made Managing Director. On the buy side I have worked for asset management firms (e.g. JPMorgan) and private banks (Barclays, Merrill Lynch, Coutts, Emirates NBD and NBAD). I have a reputation for making bold calls on the markets. I made major bear calls on equity markets in 1987, at the top of the tech boom and the financial crisis in August 2007, and a bull call on equity markets on March 17th 2009. I have been a high profile with the media regularly appearing in the printed press and on TV. I often speak at conferences and provide industry thought leadership on a number of macro and investment topics.  In the past I made a presentation to the European Parliament on the outlook for asset markets after the introduction of the euro. I am highly regarded for my team leadership, the rigour and intellect I bring to the investment process, my attention to governance and ethics, and my affinity with clients in presentations and meetings. I was voted Private Banker of the year 2015 (MENA) from Wealth Briefing."
  },
  {
    image: johan,
    title: "Johan Jooste - Managing Director",
    description:
      "Johan started his career in banking as a currency and interest rates analyst in Johannesburg in 1994. After stints trading currency and managing South African bond portfolio’s, he relocated to the UK in 2001, managing global fixed income portfolios for institutional clients before switching course and joining Merrill Lynch Private Wealth Management in 2008. In this role, which was subsumed into Julius Baer in 2014, Johan was successively entrusted with Fixed Income management (Merrill Lynch) and thereafter overall strategy as CIO: UK for the Julius Baer business. In 2016 Johan relocated to Singapore to take up the role of CIO at Bank of Singapore, before joining Purple Asset Management in 2019 as Managing Director."
  },
  {
    image: rainer,
    title: "Rainer Michael Preiss - Chief Investment Officer – Equity",
    description:
      "Previously Portfolio Strategist at a Family Office in Singapore and prior to that Chief Equity Strategist at Standard Chartered Bank, Mr. Preiss was a member of the bank’s Global Investment Council where he was responsible for the” house-view” on Equities. Mr. Preiss has 25 years experience in global financial markets have worked in London, Paris, Hong Kong, Middle East and Africa and Singapore in various investment and research functions. Mr. Preiss is a graduate of the European Business School with a major in Finance and international economics, having studied at the schools centers in London, Paris and Bologna, Italy in the respective local languages. In addition he studied in Japan, Korea, and China. Mr. Preiss has taught extensively on Finance and Wealth Management in Asia, Middle East and Africa. Mr. Preiss has also been invited to teach and has designed courses for The Graduate School of The People's Bank of China, China's Central Bank and is currently an Adjunct Researcher at Singapore’s  NTU – Nanyang Technology University Centre of African Studies.  The mandate of the NTU-SBF Centre for African Studies (CAS) is to develop awareness of Africa as an investment destination, and to develop thought leadership and capacity for doing business in Africa. Previously he was advisor and founding member of the Asian Bond Market Forum an initiative by the Thai Ministry of Finance.  Mr. Preiss is also a frequent contributor to International media like CNBC and Bloomberg TV and a Columnist for FORBES Magazine."
  },
  {
    image: bill,
    title: "Bill O'Neill - Consultant CIO",
    description:
      "Bill has over 30 years’ experience as an economist and strategist with some of the world’s leading investment firms. Bill held the role as the CIO for Merrill Lynch wealth management in London and Head of the UK Investment Office for UBS Wealth Management between 2013-16. Bill worked with Gary Dugan as a senior strategist at Barclays Wealth and JPMorgan between 2001 and 2007. From 1991 and 2001 Bill was an international strategist at James Capel Australia and HSBC Investments. Bill has an M.A. degree in Economics from the University of Dublin and an M.Sc. in Econometrics and Quantitative Economics from Birkbeck College, University of London."
  },
  {
    image: mark,
    title: "Mark McFarland - Consultant CIO",
    description:
      "Global economist with 20+ years of senior research and advisory experience in Asia, Europe and frontier markets. Team head for economics research and tactical asset allocation. Specialisation: G7 markets, all-Asia and frontier markets in the Middle East and Africa. Advisor to institutional, corporate and individual HNW clients. Keynote speaker at industry conferences and in the financial media. He was the Chief Economist at Coutts / UBP and led global economic research & the all-Asia investment strategy team. Also the former Chief Strategist / EXCO member at Emirates NBD - team head & chair of tactical asset allocation and Head of Investment Advisory. Marks clients primarily include Sovereigns, institutions, corporate treasuries & private investors. He received his MSc in Economics from Warwick University's prestigious graduate school, he is a Hong Kong SFC licence holder (1 & 4) & HK Permanent Resident, Member of the Hong Kong Institute of Directors and the Republic of Ireland & UK nationalities."
  },
  {
    image: placeholder,
    title: "Christopher Grune, CFA, PRM, CQF, PRM, FIA - CIO Consultant",
    description:
      "He is an experienced finance professional with over twenty years’ experience in the markets and over ten years’ experience dealing with emerging and frontier markets. He is a practitioner in derivatives and quant strategies and has applied these in regions where these skills and capabilities tend to be very thin or nearly non-existent. He spearheaded State Street Global Advisor’s (SSgA) first investments into Sub-Saharan (ex-South Africa) Africa more than 10 years ago, managing about $1 billion in emerging market assets with more than half allocated to Africa. He has experience trading and investing in over 50 countries worldwide. He has published articles, appeared on national television and spoken at numerous investment conferences. He built equity risk models at Citi in both Japan and the US. He also sits on a governance committee for the Nairobi Securities Exchange, is on the board of directors for the CFA Society of East Africa and is president of the Columbia Alumni Association of Kenya. He obtained his MBA from Columbia Business School in New York, is a CFA Charterholder, has completed Fitch Learning/Paul Wilmott’s Certificate in Quantitative Finance course, has the Professional Risk Manager (PRM) designation and is certified as a SIIA Financial Information Associate (FIA)."
  },
  {
    image: sam,
    title: "Sam Picot, CFA - Fund Analyst",
    description:
      "Sam joined Purple Asset Management following a 6 year career at Russell Investments in Sydney & Auckland. At Russell, Sam worked initially as a risk analyst before spending 3 years in investment/fund research. Sam provides fund research to our Asian client base and is a key support to the London based fund research team. Sam has a Bcom (1st Class) degree in Finance and Economics, and is conversationally fluent in Mandarin."
  },
  {
    image: luka,
    title: "Luka Stimac - General Business Consultant",
    description:
      "Luka started his financial career by co-founding a hedge fund in the Dubai International Financial Centre straight out of university, and ultimately became the company's Vice President. He worked several years on developing the company to become a recognised brand and a platform to serve all alternative fund types, from private equity, hedge and VC funds. He also co-founded the largest and most exclusive alternative investment conferences in the Middle East, and worked with the best fund managers as well as investors from around the world. After selling his shares and exiting he spent several years in various roles within the IT industry and held several advisory roles in Europe. Luka was also a member of AIMA's Middle East Executive Committee which worked closely with policy makers, legislators and regulators. He holds a B.A. degree in International Business Management from Franklin University Switzerland."
  },
  {
    image: javed,
    title: "Javed Hussain - Adviser",
    description:
      "Javed is a senior banker with a strong risk management background. Javed has over 30 years’ experience in the financial industry. He brings a unique skill set of risk management, cross-asset principal investing/trading (including private equity), investment banking and private capital markets, with a strong emerging markets focus. He started his career at the Bank of England before moving to Nomura where he worked for 19 years, initially in London as a senior credit risk manager and then portfolio manager in the bank’s de facto internal hedge fund. He has been in the Middle East since 2007, where he co-led the establishment of the firm’s Saudi operation as the initial CEO in 2009, before moving to a senior regional cross-divisional role in Dubai. He returned to Riyadh for a second stint as CEO of Nomura Saudi Arabia (2014 – 2017). Since leaving Nomura in 2017, he has been working with family offices and UHNWIs in the private capital markets space. He is currently based in Dubai."
  }
];

export const Team = () => (
  <React.Fragment>
    <Helmet title="Team" />
    <div className="d-flex flex-1 flex-direction-column">
      <SectionHeader name="Team" />
      <div
        className="content-container margin-bottom-200"
        style={{ marginTop: -110 }}
      >
        <div className="content flex-1 flex-direction-column">
          {members.map(Member)}
        </div>
      </div>
    </div>
  </React.Fragment>
);

const Member = ({ image, title, description }) => (
  <div className="d-flex align-items-start item-margin-top member-image-title-description-container">
    <img src={image} alt={title} />
    <div className="d-flex flex-direction-column member-title-description-container">
      <h2>{title}</h2>
      <h4 className="margin-top-10">{description}</h4>
    </div>
  </div>
);
