import React from 'react';
import { SectionHeader } from '../Section Header';
import { Title } from '../Title';

export const Why = () => (
    <div className="d-flex flex-1 flex-direction-column">
        <SectionHeader name="Why OCIO?"/>
        <div className="content-container margin-bottom-200">
            <div className="content flex-1 flex-direction-column margin-top-120">
                <Title text="Why choose The Global CIO Office for your OCIO?"/>
                <h4 className="margin-top-40 text-justify">Our OCIO teams extensive investment expertise, robust research platform, and advanced technology and analytics are aligned in one single goal: helping clients achieve their investment objectives.</h4>
                <br/>
                <h4 className="text-justify">We provide global institutional quality support to your investment office:</h4>
                <h4 className="text-justify">•  Institutional quality global asset management</h4>
                <h4 className="text-justify">•  Fiduciary services</h4>
                <h4 className="text-justify">•  Unwavering objectivity</h4>
                <br/>
                <h4 className="text-justify">We sit on your side of the table.</h4>
                <Title className="margin-top-100" text="A US phenomena now going global"/>
                <h4 className="margin-top-40 text-justify">“The OCIO market is booming – and its influence is reverberating across the asset management industry.” Alicia McElhaney January 31, 2019 (Institutional Investor)</h4>
            </div>
        </div>
    </div>
)
