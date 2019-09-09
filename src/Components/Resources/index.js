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
        <img src={resources} style={{objectFit: "cover"}}/>
        <div className="content-container margin-top-120 margin-bottom-200">
            <div className="content d-flex flex-1 flex-direction-column">
                <a className="margin-top-10 accent" href={TradeWarStrategies} download="CIO weekly - Trade War Strategies.pdf">CIO weekly - Trade War Strategies</a>
                <a className="margin-top-10 accent" href={LessonsForTheEurozoneFromArgentina} download="CIO Weekly - Lessons for the eurozone from Argentina.pdf">CIO Weekly - Lessons for the eurozone from Argentina</a>
                <a className="margin-top-10 accent" href={JeNeRegretRien} download="CIO Weekly - Je ne regret rien.pdf">CIO Weekly - Je ne regret rien</a>
                <a className="margin-top-10 accent" href={ItIsLookingMoreLikeJapan} download="CIO Weekly - It is Looking More Like Japan.pdf">CIO Weekly - It is Looking More Like Japan</a>
            </div>
        </div>
    </div>
)
