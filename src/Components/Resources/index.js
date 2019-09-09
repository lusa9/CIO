import React from 'react';
import { SectionHeader } from '../Section Header';
import { Title } from '../Title';
import resources from '../../assets/resources.jpg'
import TradeWarStrategies from "./TradeWarStrategies.pdf"

export const Resources = () => (
    <div className="d-flex flex-1 flex-direction-column">
        <img src={resources} style={{objectFit: "cover"}}/>
        <div className="content-container margin-top-120 margin-bottom-200">
            <div className="content flex-1 flex-direction-column">
                <a href={TradeWarStrategies} download="CIO weekly - Trade War Strategies.pdf">CIO weekly - Trade War Strategies.pdf</a>
            </div>
        </div>
    </div>
)
