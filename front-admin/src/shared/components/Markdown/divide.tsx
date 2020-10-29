/** @format */

import React, { useCallback, useRef, useState } from 'react';
import { CustomDivideProps, Position } from './model';

const CustomDivide = ({
    className = '',
    style = {},
    onMove,
}: CustomDivideProps) => {
    const [isMoving, setIsMoving] = useState<boolean>(false);
    const [lastPosition, setLastPostion] = useState<Position>({
        x: 0,
        y: 0,
    });
    const ref = useRef<HTMLDivElement>(null);
    const startMove = useCallback((e: React.MouseEvent) => {
        if (ref.current) {
            setIsMoving(true);
            setLastPostion({
                x: e.clientX,
                y: e.clientY,
            });
        }
    }, []);
    const move = useCallback(
        (e: React.MouseEvent) => {
            if (isMoving) {
                if (onMove) {
                    onMove(
                        e.clientX - lastPosition.x,
                        e.clientY - lastPosition.y
                    );
                }
                setLastPostion({
                    x: e.clientX,
                    y: e.clientY,
                });
            }
        },
        [isMoving, lastPosition, onMove]
    );

    const endMove = useCallback(() => {
        setIsMoving(false);
    }, []);
    return (
        <div
            ref={ref}
            onMouseDown={startMove}
            onMouseMove={move}
            onMouseUp={endMove}
            onMouseLeave={endMove}
            className={className}
            style={style}
        />
    );
};

export default CustomDivide;
