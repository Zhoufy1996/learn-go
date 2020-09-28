/** @format */

import React, { useState, useEffect } from 'react';

const Tick = () => {
    const [time, setTime] = useState<string>(new Date().toLocaleTimeString());
    useEffect(() => {
        const id = setInterval(() => {
            const now = new Date().toLocaleTimeString();
            setTime(now);
        }, 1000);
        return () => {
            window.console.log('clear');
            clearInterval(id);
        };
    }, []);
    return (
        <div>
            <h1>Hello World</h1>
            <h2>
                It is
                {time}
            </h2>
        </div>
    );
};

export default Tick;
