/** @format */

import { useRef, useState, useCallback } from 'react';
import { Position } from './model';

const useMove = (onMove: (offsetX: number, offsetY: number) => void) => {
    const [isMoving, setIsMoving] = useState<boolean>(false);

    const [currentPosition, setCurrentPostion] = useState<Position>({
        x: 0,
        y: 0,
    });
    const startMove = useCallback((e: React.MouseEvent) => {
        setIsMoving(true);
        setCurrentPostion({
            x: e.clientX,
            y: e.clientY,
        });
    }, []);
    const move = useCallback(
        (e: React.MouseEvent) => {
            if (isMoving) {
                if (onMove) {
                    onMove(
                        e.clientX - currentPosition.x,
                        e.clientY - currentPosition.y
                    );
                }
                setCurrentPostion({
                    x: e.clientX,
                    y: e.clientY,
                });
            }
        },
        [isMoving, onMove, currentPosition]
    );

    const endMove = useCallback(() => {
        setIsMoving(false);
    }, []);

    return { startMove, move, endMove, currentPosition };
};

export default useMove;
