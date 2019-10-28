import React from 'react';
import resources from '../../assets/resources.jpg'

import PoliticallyDrivenMarkets from './CIO Weekly - Politically Driven Markets.pdf'
import QTtoQE from './CIO Weekly - QT to QE.pdf'
import TakingNothingForGranted from './CIO Weekly - Taking Nothing for Granted.pdf'
import TradeWarStrategies from "./CIO weekly - Trade War Strategies.pdf"
import JeNeRegretRien from './CIO Weekly - Je ne regret rien.pdf'
import LessonsForTheEurozoneFromArgentina from "./CIO Weekly - The Lessons for the eurozone from Argentina.pdf"

export const Resources = () => (
    <div className="d-flex flex-1 flex-direction-column">
        <div style={{height: 260, width: "100%"}}>
            <img height="100%" width="100%" src={resources} style={{objectFit: "cover", overflow: "hidden"}} alt="bookshelf"/>
        </div>
        <div className="content-container margin-bottom-200">
            <div className="content flex-1 flex-direction-column">
                <h2 className="margin-top-120">Newsletters</h2>
                <h4 className="margin-top-30"><Bullet/><a href={PoliticallyDrivenMarkets}>Politically Driven Markets</a> - 30th September 2019</h4>
                <h4><Bullet/><a href={QTtoQE}>QT to QE</a> - 23rd September 2019</h4>
                <h4><Bullet/><a href={TakingNothingForGranted}>Taking Nothing for Granted</a> - 16th September 2019</h4>
                <h4><Bullet/><a href={TradeWarStrategies}>Trade War Strategies</a> - 9th September 2019</h4>
                <h4><Bullet/><a href={JeNeRegretRien}>Je ne regret rien</a> - 26th August 2019</h4>
                <h4><Bullet/><a href={LessonsForTheEurozoneFromArgentina}>The Lessons for the eurozone from Argentina</a> - 19th August 2019</h4>
    
                <h2 className="margin-top-120">Articles</h2>
                <h4 className="margin-top-30"><Bullet/><a href={"https://www.businesstimes.com.sg/investing-wealth/purple-asset-management-launches-ocio-services-for-asia-family-offices-wealth"}>Purple Asset Management launches OCIO services for Asia family offices, wealth managers</a> - The Business Times</h4>
                <h4><Bullet/><a href={"https://asianprivatebanker.com/industry/family-office-iam/purple-am-launches-third-party-cio-office-for-singapore-iams-wms"}>Purple AM launches third-party CIO office for Singapore IAMs, WMs</a> - Asian Private Banker</h4>
                <h4><Bullet/><a href={"https://citywireasia.com/news/new-outsourced-cio-service-for-asia-middle-east-wealth-managers/a1272898?ref=international-asia-latest-news-list"}>New outsourced CIO service for Asia, Middle East wealth managers</a> - Citywire Asia</h4>
                <h4><Bullet/><a href={"https://www.finews.asia/finance/29747-purple-am-launches-outsourced-chief-investment-officer-services-global-cio-office-gary-dugan-johan-jooste"}>Outsourced CIO Services Launched in Singapore</a> - Finews.asia</h4>
            </div>
        </div>
    </div>
)

const Bullet = () => <span className="bold margin-right-10" >•</span>

