import React from 'react';
import { SectionHeader } from '../Section Header';
import { Title } from '../Title';

export const Services = () => (
    <div className="d-flex flex-1 flex-direction-column">
        <SectionHeader name="Services"/>
        <div className="content-container margin-top-120 margin-bottom-200">
            <div className="content flex-1 flex-direction-column">
                <Title text="The Global CIO Office"/>
                <h4 className="margin-top-40 text-justify">We provide outsourced Chief Investment Officer services and advisory services for External Asset Managers and Wealth Management businesses. High-quality investment advice and product platforms can be expensive to assemble, but your clients would expect nothing less. Much of what a wealth business needs are generic to the whole industry. Each business typically wants investment proposals, regular reports to share with clients, research on investment themes, quality strategic asset allocation and inputs on tactical asset allocation, no matter the scale of the business. Equally, you want to share the very best advice on product selection from mutual funds to structured products through to alternatives such as real estate. The crucial difference between The Global CIO Office and other investment advisory firms is that we give independent investment advice and we are not motivated by placing the in-house product with you. Our approach is to be genuinely independent of product providers.</h4>
                <Title className="margin-top-120" text="Strategic Asset Allocation"/>
                <h4 className="margin-top-40 text-justify">The strategic asset allocation (SAA) of a portfolio is the most important decision that an investor will take. Setting the right mix of assets is crucial to minimising the amount of risk an investor will willingly take to achieve their desired return. The world of SAA has changed significantly in the last 15 years with a broader range of approaches and asset classes available to investors. We take a pragmatic approach to SAA with a good measure of common sense mixed with the help of quantitative techniques. The accurate risk profiling of the investor requires a detailed questionnaire that thoroughly assesses both the risk appetite of the investor the long-term liquidity and asset growth needs of the client. Strategic asset allocation needs to be re-assessed once a year to check for the impact that any significant changes to the risk/return profile of asset classes, or changes to the long-term risk appetite or income needs of the investor. For a wealth business, we can build and maintain appropriate model portfolios either to match a set of risk profiles across the client segments or to hit specific characteristics such as income targeted or long-term capital gain.</h4>
                <Title className="margin-top-120" text="Tactical Asset Allocation"/>
                <h4 className="margin-top-40 text-justify">Over and above the return from the strategic asset allocation, investors can enhance their portfolio returns through judicious tactical trades. We always advocate that tactical asset allocation overlay should make marginal changes to the asset allocation of a portfolio rather than materially changing the riskiness of the portfolio. The TAA service from The Global CIO Office can either be embedded in your investment committee, or we can be used as a special advisor to the committee. While the client may have their own approach to TAA, the Global CIO Office has a preference for a good mix of quantitative signals and the qualitative views of human beings.</h4>
                <Title className="margin-top-120" text="Wealth Management Product Platform Design and Maintenance"/>
                <h4 className="margin-top-40 text-justify">Wealth management businesses need a comprehensive, yet user-friendly investment product platform to meet the needs of their clients. The platform also has to be compliant with local regulations concerning the promotion and sale of investment products. The Global CIO Office has significant experience in building/redesigning wealth management platforms. The team will be able to recommend a blend of asset classes and best in class product that is compliant with local regulations. We can provide guidance on how to source products. We also advise on how the wealth management business should support the product platform with appropriate research and educational materials for clients. Also, we can provide bespoke video clips to help with the sales pitch and positioning of products with clients.</h4>
                <Title className="margin-top-120" text="Research and Communication with Wealth Management Clients"/>
                <h4 className="margin-top-40 text-justify">The backbone of the relationship with end clients is clear communication on global macro and geopolitical events and financial markets and investment opportunities. Clients like opinionated and well-argued communications that are readable and offer refreshing, honest views. The Global CIO Office will produce regular publications that can be used with clients that educate and inform. With the era of email, YouTube, WhatsApp and podcasts, communication can take many forms. Indeed, we offer client communication in any way that they believe is most effective with the target audience or client base.</h4>
            </div>
        </div>
    </div>
)
