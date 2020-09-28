/** @format */

import React, { Profiler } from 'react';
import { customDebounce } from '../utils/debounce';

interface SchedulerInteraction {
    id: number;
    name: string;
    timestamp: number;
}

export interface profilerData {
    profilerName: string;
    phase: 'mount' | 'update';
    actualDuration: number;
    baseDuration: number;
    startTime: number;
    commitTime: number;
    interactions: Set<SchedulerInteraction>;
}

/**
 * 如果使用context，callback导致value变化，又会触发新一轮的render，不断循环，导致卡死
 */

const createContainer = () => {
    let profilerData: profilerData[] = [];
    const customConsole = customDebounce(() => {
        window.console.log(
            profilerData.sort((l, r) => {
                return l.startTime - r.startTime;
            })
        );
    });
    const push = (data: profilerData) => {
        profilerData.push(data);
    };
    const clear = () => {
        profilerData = [];
    };

    return {
        push,
        clear,
        get data() {
            return profilerData;
        },
        console: () => {},
        customConsole,
    };
};

const profilerContainer = createContainer();

const CustomProfiler = (props: {
    children: JSX.Element;
    id: string | false;
}) => {
    const { children, id } = props;
    const profilerId: string = id || `${children.type.name}${children.key}`;

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
        profilerName: string,
        phase: 'mount' | 'update',
        actualDuration: number,
        baseDuration: number,
        startTime: number,
        commitTime: number,
        interactions: Set<SchedulerInteraction>
    ) => {
        // setProfilerData([
        //     ...profilerData,
        //     {
        //         profilerName,
        //         phase,
        //         actualDuration,
        //         baseDuration,
        //         startTime,
        //         commitTime,
        //         interactions,
        //     },
        // ]);
        profilerContainer.push({
            profilerName,
            phase,
            actualDuration,
            baseDuration,
            startTime,
            commitTime,
            interactions,
        });
        profilerContainer.customConsole();
    };
    return (
        <Profiler id={profilerId} onRender={callback}>
            {children}
        </Profiler>
    );
};

export default CustomProfiler;
