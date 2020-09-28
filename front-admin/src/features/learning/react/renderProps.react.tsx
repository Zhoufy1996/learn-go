/** @format */

import React, { useState } from 'react';

const Mouse = ({
    children,
}: {
    children: (x: number, y: number) => JSX.Element;
}) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        setMousePosition({
            x: event.clientX,
            y: event.clientY,
        });
    };
    return (
        <div onMouseMove={handleMouseMove}>
            {children(mousePosition.x, mousePosition.y)}
        </div>
    );
};

const RenderPropsDemo = () => {
    return <Mouse>{(x, y) => <div>{`${x},${y}`}</div>}</Mouse>;
};

export default RenderPropsDemo;
