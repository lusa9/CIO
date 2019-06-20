import React from 'react'

export const Space = ({ height, width }) => <div style={{ minHeight: height, minWidth: width }} />;

export const withSpace = ({ width, height }) => (previous, current) => [
    previous,
    <Space width={width} height={height} key={`${previous}${current}`} />,
    current,
];

Array.prototype.withSpace = function({ width, height }) {
    return this.reduce(withSpace({ width, height }));
};