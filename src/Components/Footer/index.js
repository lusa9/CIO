import React from 'react';

export const Footer = ({routeToPath}) => (
    <div className="h-60 content-container bg-accent">
        <div className="content d-flex justify-content-between align-items-center">
            <h6 className="white">© 2019 The Global CIO Office, Inc. All rights reserved.</h6>
            <div className="d-flex justify-content-center align-items-center button h-full" onClick={() => routeToPath("/legal")}>
                <h6 className="white ">Legal Notice</h6>
            </div>
        </div>
    </div>
)
