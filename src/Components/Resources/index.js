import React from 'react';
import { SectionHeader } from '../Section Header';
import { Title } from '../Title';
import resources from '../../assets/resources.jpg'

import TradeWarStrategies from "./TradeWarStrategies.pdf"
import LessonsForTheEurozoneFromArgentina from "./LessonsForTheEurozoneFromArgentina.pdf"
import JeNeRegretRien from './JeNeRegretRien.pdf'
import ItIsLookingMoreLikeJapan from './ItIsLookingMoreLikeJapan.pdf'

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
