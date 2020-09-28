/** @format */

import React, { Profiler, useState } from 'react';
import CustomProfiler from '../../../shared/components/CustomProfiler';

interface SchedulerInteraction {
    id: number;
    name: string;
    timestamp: number;
}

const Count = () => {
    const [count, setCount] = useState(0);
    const increase = () => setCount((state) => state + 1);
    const decrease = () => setCount((state) => state - 1);
    return (
        <div>
            <div>{count}</div>
            <button type="button" onClick={increase}>
                +
            </button>
            <button type="button" onClick={decrease}>
                -
            </button>
        </div>
    );
};

const ProfilerDemo = () => {
    /**
     *
     * @param id 发生提交的 Profiler 树的 id
     * @param phase 判断是组件树的第一次装载引起的重渲染，还是由 props、state 或是 hooks 改变引起的重渲染。
     * @param actualDuration 本次更新在渲染 Profiler 和它的子代上花费的时间。
     * @param baseDuration 在 Profiler 树中最近一次每一个组件 render 的持续时间。
     * @param startTime 本次更新中 React 开始渲染的时间戳。
     * @param commitTime 本次更新中 React commit 阶段结束的时间戳。
     * @param interactions 更新被制定时，“interactions” 的集合会被追踪。
     */
    const callback = (
        id: string,
        phase: 'mount' | 'update',
        actualDuration: number,
        baseDuration: number,
        startTime: number,
        commitTime: number,
        interactions: Set<SchedulerInteraction>
    ) => {
        // eslint-disable-next-line no-console
        console.log({
            id,
            phase,
            actualDuration,
            baseDuration,
            startTime,
            commitTime,
            interactions,
            offset: commitTime - startTime,
        });
    };

    return (
        <Profiler id="demo" onRender={callback}>
            <CustomProfiler>
                <Count />
            </CustomProfiler>
            <Profiler id="count2" onRender={callback}>
                <Count />
            </Profiler>
        </Profiler>
    );
};

export default ProfilerDemo;
