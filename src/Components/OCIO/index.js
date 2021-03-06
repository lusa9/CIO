import React from 'react';
import { SectionHeader } from '../Section Header';
import { Helmet } from 'react-helmet';

export const OCIO = () => (
    <React.Fragment>
        <Helmet title="OCIO"/>
        <div className="d-flex flex-1 flex-direction-column">
            <SectionHeader name="OCIO"/>
            <div className="content-container margin-bottom-200">
                <div className="content flex-1 flex-direction-column">
                    <h2>Why choose The Global CIO Office for your OCIO?</h2>
                    <h4 className="description-margin-top">
                        Our OCIO teams extensive investment expertise, robust research platform, and advanced technology and analytics are aligned in one single goal: helping clients achieve their investment objectives.<br/>
                        <br/>
                        We provide global institutional quality support to your investment office:<br/>
                        • Institutional quality global asset management<br/>
                        • Fiduciary services<br/>
                        • Unwavering objectivity<br/>
                        <br/>
                        We sit on your side of the table.
                    </h4>
                    <h2 className="item-margin-top">A US phenomena now going global</h2>
                    <h4 className="description-margin-top">“The OCIO market is booming – and its influence is reverberating across the asset management industry.” Alicia McElhaney January 31, 2019 (Institutional Investor)</h4>
                </div>
            </div>
        </div>
    </React.Fragment>
)
