import React from 'react';
import { SectionHeader } from '../Section Header';
import { Title } from '../Title';
import resources from '../../assets/resources.jpg'

import TradeWarStrategies from "./CIO_weekly_trade_war_strategies.pdf"
import LessonsForTheEurozoneFromArgentina from "./CIO_weekly_lessons_for_the_eurozone_from_argentina.pdf"
import JeNeRegretRien from './CIO_weekly_je_ne_regret_rien.pdf'
import ItIsLookingMoreLikeJapan from './CIO_weekly_it_is_looking_more_like_japan.pdf'

export const Resources = () => (
    <div className="d-flex flex-1 flex-direction-column">
        <img height={260} src={resources} style={{objectFit: "cover"}}/>
        <div className="content-container margin-bottom-200">
            <div className="content flex-1 flex-direction-column">
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

