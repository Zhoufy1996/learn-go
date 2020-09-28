/** @format */

import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import demoState from './demo/demo.state';

const RecoilDemo = () => {
    const demo = useRecoilValue(demoState);
    const setDemo = useSetRecoilState(demoState);
    return (
        <div>
            {demo}
            <div>
                <button
                    type="button"
                    onClick={() => setDemo((oldDemo) => oldDemo + 1)}
                >
                    +
                </button>
                <button
                    type="button"
                    onClick={() => setDemo((oldDemo) => oldDemo - 1)}
                >
                    -
                </button>
            </div>
        </div>
    );
};

export default RecoilDemo;
