/** @format */
import React from 'react';
import { useDrop } from 'react-dnd';
import Square from './Square';

interface BoradSquareProps {
    x: number;
    y: number;
    children: JSX.Element | null;
    onDrop: () => void;
}

const BoradSquare = ({ x, y, children, onDrop }: BoradSquareProps) => {
    const black = (x + y) % 2 === 0;
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: 'knight',
        drop: () => onDrop(),
        canDrop: () => true,
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    });
    return (
        <div
            ref={drop}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
            }}
        >
            <Square black={black}>{children}</Square>
            {isOver && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        zIndex: 1,
                        opacity: 0.5,
                        backgroundColor: 'yellow',
                    }}
                />
            )}
        </div>
    );
};

export default BoradSquare;
