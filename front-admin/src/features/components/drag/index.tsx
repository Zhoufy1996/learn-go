/** @format */
import React, { useEffect, useState } from 'react';
import Board from './Board';

const DragDemo = () => {
    const [kngihtPosition, setKnightPosition] = useState<[number, number]>([
        0,
        0,
    ]);
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setKnightPosition([random(0, 8.1), random(0, 8.1)]);
    //     }, 500);
    //     return () => {
    //         clearInterval(timer);
    //     };
    // }, []);
    return (
        <div style={{ height: '100%' }}>
            <Board
                knightPosition={kngihtPosition}
                setKnightPosition={setKnightPosition}
            />
        </div>
    );
};

export default DragDemo;
