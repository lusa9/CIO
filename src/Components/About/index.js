import React from 'react';
import home from '../../assets/home.jpg'
import logo from '../../assets/logo.svg'
import { SectionHeader } from '../Section Header';

export const About = () => (
    <div className="d-flex flex-1 flex-direction-column">
        <SectionHeader name="About Us"/>
        <div className="content-container margin-bottom-200">
            <div className="content flex-1 flex-direction-column">
                <h4 className="margin-top-120 text-justify">‘’The Global CIO Office’’ is part of Purple Asset Management, a CMS Licensed Company regulated by the Monetary Authority of Singapore.</h4>
                <div className="line margin-top-60"></div>
                <h4 className="margin-top-60 text-justify">Purple Asset Management is a joint venture company 50% owned by the UK based Independent Strategic Group, which owns a range of investment businesses that embrace technology, transparency and partnership, in working to deliver outcome based investment solutions.</h4>
                <div className="line margin-top-60"></div>
                <h4 className="margin-top-60 text-justify">The Group has an eight year track record of technology and asset management delivery and currently runs circa USD 5 billion in assets under discretion and advice (as at December 2018)</h4>
            </div>
        </div>
    </div>
)
