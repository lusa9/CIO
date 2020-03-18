import React from "react";
import resources from "../../assets/resources.jpg";

import PoliticallyDrivenMarkets from "./CIO Weekly - Politically Driven Markets.pdf";
import QTtoQE from "./CIO Weekly - QT to QE.pdf";
import TakingNothingForGranted from "./CIO Weekly - Taking Nothing for Granted.pdf";
import TradeWarStrategies from "./CIO weekly - Trade War Strategies.pdf";
import JeNeRegretRien from "./CIO Weekly - Je ne regret rien.pdf";
import LessonsForTheEurozoneFromArgentina from "./CIO Weekly - The Lessons for the eurozone from Argentina.pdf";
import { Helmet } from "react-helmet";

const newsletters = [
  {
    name: "Fear On",
    date: "2nd March 2020",
    file: "CIO Office Weekly - Fear On"
  },
  {
    name: "Complacency Finally Challenged",
    date: "24th February 2020",
    file: "CIO Office Weekly - Complacency Finally Challenged"
  },
  {
    name: "Be Prepared",
    date: "17th February 2020",
    file: "CIO Office Weekly - Be Prepared"
  },
  {
    name: "Viral Complacency",
    date: "10th February 2020",
    file: "The Global CIO Office Weekly - Viral Complacency"
  },
  {
    name: "Virus Watch",
    date: "3rd February 2020",
    file: "CIO Office Weekly - Virus Watch"
  },
  {
    name: "The World has its Challenges",
    date: "27th January 2020",
    file: "CIO Office Weekly -  The World has its Challenges"
  },
  {
    name: "Global Warming comes to Davos",
    date: "27th January 2020",
    file: "The Global CIO Office Weekly - Global Warming in Davos"
  },
  {
    name: "Dodging the Wars",
    date: "13th January 2020",
    file: "CIO Weekly - Dodging the Wars"
  },
  {
    name: "The Global CIO Office Q4 Weekly Newsletters",
    file: "The Global CIO Office Q4 2019 Newsletters"
  },
  {
    name: "Politically Driven Markets",
    date: "30th September 2019",
    file: "CIO Weekly - Politically Driven Markets"
  },
  {
    name: "QT to QE",
    date: "23rd September 2019",
    file: "CIO Weekly - QT to QE"
  },
  {
    name: "Taking Nothing for Granted",
    date: "16th September 2019",
    file: "CIO Weekly - Taking Nothing for Granted"
  },
  {
    name: "Trade War Strategies",
    date: "9th September 2019",
    file: "CIO weekly - Trade War Strategies"
  },
  {
    name: "Je ne regret rien",
    date: "26th August 2019",
    file: "CIO Weekly - Je ne regret rien"
  },
  {
    name: "The Lessons for the eurozone from Argentina",
    date: "19th August 2019",
    file: "CIO Weekly - The Lessons for the eurozone from Argentina"
  }
];

export const Resources = () => (
  <React.Fragment>
    <Helmet title="Resources" />
    <div className="d-flex flex-1 flex-direction-column">
      <div style={{ height: 260, width: "100%" }}>
        <img
          height="100%"
          width="100%"
          src={resources}
          style={{ objectFit: "cover", overflow: "hidden" }}
          alt="bookshelf"
        />
      </div>
      <div className="content-container margin-bottom-200">
        <div className="content flex-1 flex-direction-column">
          <h2 className="item-margin-top">Newsletters</h2>
          {newsletters.map(Newsletter)}

          <h2 className="item-margin-top ">Articles</h2>
          <h4 className="description-margin-top">
            <Bullet />
            <a
              href={
                "https://www.businesstimes.com.sg/investing-wealth/purple-asset-management-launches-ocio-services-for-asia-family-offices-wealth"
              }
            >
              Purple Asset Management launches OCIO services for Asia family
              offices, wealth managers
            </a>{" "}
            - The Business Times
          </h4>
          <h4>
            <Bullet />
            <a
              href={
                "https://asianprivatebanker.com/industry/family-office-iam/purple-am-launches-third-party-cio-office-for-singapore-iams-wms"
              }
            >
              Purple AM launches third-party CIO office for Singapore IAMs, WMs
            </a>{" "}
            - Asian Private Banker
          </h4>
          <h4>
            <Bullet />
            <a
              href={
                "https://citywireasia.com/news/new-outsourced-cio-service-for-asia-middle-east-wealth-managers/a1272898?ref=international-asia-latest-news-list"
              }
            >
              New outsourced CIO service for Asia, Middle East wealth managers
            </a>{" "}
            - Citywire Asia
          </h4>
          <h4>
            <Bullet />
            <a
              href={
                "https://www.finews.asia/finance/29747-purple-am-launches-outsourced-chief-investment-officer-services-global-cio-office-gary-dugan-johan-jooste"
              }
            >
              Outsourced CIO Services Launched in Singapore
            </a>{" "}
            - Finews.asia
          </h4>
        </div>
      </div>
    </div>
  </React.Fragment>
);

const Bullet = () => <span className="bold margin-right-10">•</span>;

const Newsletter = ({ file, name, date }, index) => (
  <h4 className={index === 0 && "description-margin-top"}>
    <Bullet />
    <a href={require(`./${file}.pdf`)} className="resources-link">
      {name}
    </a>
    {date && ` - ${date}`}
  </h4>
);
