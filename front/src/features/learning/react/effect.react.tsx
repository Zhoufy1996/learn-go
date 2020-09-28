/** @format */

import React, { useEffect, useState } from 'react';

/**
 * 1. effect何时清除
 *
 */
const EffectDemo = () => {
    const [count, setCount] = useState<number>(0);
    useEffect(() => {
        return () => {
            window.console.log('clear');
        };
    });
    return (
        <div>
            <div>{count}</div>
            <button
                type="button"
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                +
            </button>
        </div>
    );
};

export default EffectDemo;
