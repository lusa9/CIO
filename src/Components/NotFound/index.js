import React from 'react';
import { Helmet } from 'react-helmet';

export const NotFound = () => (
    <React.Fragment>
        <Helmet title="Not Found"/>
        <div className="d-flex flex-1 content-container">
            <div className="content margin-top-120">
                <h2 className="accent">Page Not Found</h2>
            </div>
        </div>
    </React.Fragment>
)
