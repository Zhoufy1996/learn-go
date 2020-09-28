/** @format */

import React, { useState } from 'react';

const XSSDemo = () => {
    const [value, setValue] = useState('');
    // javascript:alert("xss href")
    return (
        <div>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <a href={value}>xss</a>
        </div>
    );
};

export default XSSDemo;
