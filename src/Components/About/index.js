import React from 'react';
import { SectionHeader } from '../Section Header';
import video from './video.mp4'
import logo from '../../assets/logo.svg'

export const About = () => (
    <div className="d-flex flex-1 flex-direction-column">
        <SectionHeader name="About"/>
        <div className="content-container margin-bottom-200">
            <div className="content flex-1 flex-direction-column">
                <video className="margin-top-120" width="100%" controls >
                    <source src={video} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <h3 className="bold margin-top-120">The Global CIO Office</h3>
                <h4 className="margin-top-40 text-justify">We are a truly independent provider of outsourced Chief Investment Officer (CIO) services for single and multi-family offices, and wealth management businesses. We have brought together a team of seasoned investment experts from various parts of the world to build out a business proposition suitable for Asia and the Middle East in the OCIO space. Our office is in Singapore operating under the umbrella of Purple Asset Management. Purple Asset Management (Purple) is a Singapore registered company regulated by the Monetary Authority of Singapore (MAS) having attained a Capital Markets Services (CMS) License.</h4>
                <div className="line margin-top-60"></div>
                <h3 className="bold margin-top-120">Our team of experts are globally recognised for their credibility, strong track record and extensive experience</h3>
                <h4 className="margin-top-40 text-justify">Our founding members Gary Dugan and Johannes Jooste are well known across the industry for their considerable experience and deep knowledge of investment platforms and investment processes.<br/><br/>Our team is also comprised of industry experts such as CIO’s, strategists, economists, due diligence and asset class experts with a strong track record. They possess deep experience of asset markets and wealth industry needs. We leverage their experience to help clients navigate concerns around risk management, ongoing regulatory changes and volatile market conditions, and offer vastly more cost-effective investment alternative.<br/><br/>While we are an outsourced partner to our clients, our team of experts function as an extension of our clients’ investment team offering tailored services to fit their needs and objectives. We will provide the benefit of having a hub of experts which our clients can easily call upon for any time period required. This significantly reduces the cost of a CIO function for clients in the wealth management industry.</h4>
                <div className="line margin-top-60"></div>
                <h3 className="bold margin-top-120">Our independent advice and research are a key differentiator that sets us apart from other investment advisory firms</h3>
                <h4 className="margin-top-40 text-justify">We are fully independent from product providers and hold no motivation for placing in-house products with our clients. Hence, clients can be assured that they are receiving unvarnished investment advice based on views gathered from our independent research.<br/><br/>By possessing the required resources and expertise to conduct our own research, we can provide an unwavering and external opinion regarding what is most suitable for a client depending on their individual needs. We also provide periodic and thematic research services on behalf of our clients that can be white labelled.<br/><br/>Our independent advice, research capabilities and breadth of experience enable us to further support clients in generating revenue. We provide the required resources, material and advice to help with their sales meetings and the overall positioning of products.</h4>
                <div className="line margin-top-60"></div>
                <h3 className="bold margin-top-120">A broad platform of support of your investment offering</h3>
                <h4 className="margin-top-40 text-justify">We support our clients’ investment process by providing valuable inputs around strategic and tactical asset allocation, multi asset and single asset class portfolios, fund selection, private debt, commercial and residential real estate search, ESG portfolio management and product portfolio management. We also provide access to private equity and venture capital opportunities.<br/><br/>Our flexible approach helps clients get access to a broader range of products and services and investment capabilities. This in turn helps keep overall management fees lower, allowing our clients to reprioritise their resources in other critical areas.</h4>
                <div className="line margin-top-60"></div>
            </div>
        </div>
    </div>
)
