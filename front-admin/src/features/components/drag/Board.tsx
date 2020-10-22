/** @format */
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { range } from '../../../shared/utils/range';
import BoradSquare from './BordSquare';
import Knight from './Knight';
import Square from './Square';

interface BoardProps {
    knightPosition: [number, number];
    setKnightPosition: React.Dispatch<React.SetStateAction<[number, number]>>;
}

const renderPiece = (
    x: number,
    y: number,
    [knightX, knightY]: [number, number]
) => {
    const isKnightHere = x === knightX && y === knightY;
    const piece = isKnightHere ? <Knight /> : null;
    return piece;
};

const renderSquare = (
    x: number,
    y: number,
    [knightX, knightY]: [number, number],
    setKnightPosition: React.Dispatch<React.SetStateAction<[number, number]>>
) => {
    return (
        <div key={`${x}${y}`} style={{ width: '12.5%', height: '12.5%' }}>
            <BoradSquare x={x} y={y} onDrop={() => setKnightPosition([x, y])}>
                {renderPiece(x, y, [knightX, knightY])}
            </BoradSquare>
        </div>
    );
};

const Board = ({ knightPosition, setKnightPosition }: BoardProps) => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div style={{ height: '100%', display: 'flex', flexWrap: 'wrap' }}>
                {range(0, 8).map((y) => {
                    return range(0, 8).map((x) => {
                        return renderSquare(
                            x,
                            y,
                            knightPosition,
                            setKnightPosition
                        );
                    });
                })}
            </div>
        </DndProvider>
    );
};

export default Board;
