/** @format */

import { useEffect, useRef } from 'react';

const useInterval = (callback: () => any, delay: number) => {
    const savedCallback = useRef<() => void>(() => {});
    useEffect(() => {
        savedCallback.current = callback;
    });
    useEffect(() => {
        const id = setInterval(() => {
            savedCallback.current();
        }, delay);
        return () => {
            clearInterval(id);
        };
    }, [delay]);
};

export default useInterval;
