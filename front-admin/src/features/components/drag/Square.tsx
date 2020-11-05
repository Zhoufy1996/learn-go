/** @format */
import React from 'react';

interface SquareProps {
    black: boolean;
    children: JSX.Element | null;
}

const Square = ({ black, children }: SquareProps) => {
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';

    return (
        <div
            style={{
                background: fill,
                color: stroke,
                width: '100%',
                height: '100%',
            }}
        >
            {children}
        </div>
    );
};

export default Square;
