/** @format */

import React, { useState, useEffect, useRef } from 'react';
import useClientRect from '../../../shared/hooks/useClientRect';

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

const CustomHook = () => {
    return <MeasureDemo />;
};

const MeasureDemo = () => {
    const [text, setText] = useState<string>('hello world');
    const [rect, ref] = useClientRect({ deps: [text] });
    return (
        <>
            <span ref={ref}>{text}</span>
            <br />
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <h2>{JSON.stringify(rect)}</h2>
        </>
    );
};

const Count = () => {
    const [count, setCount] = useState<number>(0);
    useInterval(() => {
        setCount(count + 1);
    }, 1000);
    return <div>{count}</div>;
};

export default CustomHook;
