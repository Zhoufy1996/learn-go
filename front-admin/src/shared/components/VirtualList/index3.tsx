/** @format */

import React, {
    useRef,
    useCallback,
    useMemo,
    useState,
    useEffect,
} from 'react';
import CustomProfiler from '../CustomProfiler';

interface Props<T> {
    height: number;
    data: T[];
    rowHeight: number;
    render?: (row: T) => JSX.Element;
}

interface NodeRect {
    height: number; // 高度
    top: number; // 距离定点的距离
    bottom: number; // height + top
    isMeasure: boolean; // 是否已被测量
    index: number;
}

type NodeProps<T> = T & { rect: NodeRect };

const rowKey = 'row-key';

/**
 * 1. 传入data,rowHeight, height,render
 * 2. 当data长度为0，返回null
 * 3. 给每一个data添加预设高度rowHeight
 * 4. 渲染data
 * 5. 渲染data之后获取data的高度保存
 * 6. 滚动,根据scrollTop和data的高度，计算需要渲染的data, topHeight, totalHeight, bottomHeight
 * 7. 4-6循环
 *
 */
const VirtualList = <T,>({
    height,
    data,
    rowHeight,
    render = (row) => {
        return <>{row}</>;
    },
}: Props<T>) => {
    const [dataSource, setDataSource] = useState<NodeProps<T>[]>([]);

    const [visibleData, setVisibleData] = useState<NodeProps<T>[]>([]);
    const [topHeight, setTopHeight] = useState<number>(0);
    const [bottomHeight, setBottomHeight] = useState<number>(0);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setDataSource(
            data.map((row, index) => {
                return {
                    ...row,
                    rect: {
                        height: rowHeight,
                        top: rowHeight * index,
                        bottom: (rowHeight + 1) * index,
                        isMeasure: false,
                        index,
                    },
                };
            })
        );
    }, [data, rowHeight]);

    const calculateVisibelData = (scrollTop: number = 0) => {
        let firstData: T & { rect: NodeRect };
        if (scrollTop === 0) {
            [firstData] = dataSource;
        } else {
            firstData =
                dataSource.find((row, index) => {
                    if (index === 0 && scrollTop <= row.rect.height) {
                        return true;
                    }
                    if (
                        row.rect.top >= scrollTop &&
                        dataSource[index - 1].rect.top <= scrollTop
                    ) {
                        return true;
                    }
                    return false;
                }) || dataSource[dataSource.length - 1];
        }
        const endData =
            dataSource.find((item, index) => {
                if (item.rect.bottom - firstData.rect.top > height) {
                    return true;
                }
                return false;
            }) || dataSource[dataSource.length - 1];
        const result = dataSource.slice(
            firstData.rect.index,
            endData.rect.index
        );
        setTopHeight(firstData.rect.top);

        setBottomHeight(
            dataSource
                .filter((row) => row.rect.index > endData.rect.index)
                .reduce((acc, cur) => {
                    return acc + cur.rect.height;
                }, 0)
        );
        setVisibleData(result);
    };

    const VisibleNodes = useMemo(() => {
        return visibleData.map((row) => {
            return <div>{render(row)}</div>;
        });
    }, [visibleData, render]);

    const updateNodeRect = (nodes: Element[]) => {
        if (containerRef.current) {
            const { offsetTop } = containerRef.current;
            const result: NodeRect[] = [];
            let firstIndex: number;
            let lastIndex: number;
            nodes.forEach((node, index) => {
                const key = Number(node.getAttribute(rowKey) as string);
                const rect = node.getBoundingClientRect();
                result[key] = {
                    height: rect.height,
                    top: rect.top - offsetTop,
                    bottom: rect.bottom - offsetTop,
                    isMeasure: true,
                    index: key,
                };
                if (index === 0) {
                    firstIndex = key;
                }

                if (index === nodes.length - 1) {
                    lastIndex = key;
                }
            });
            // const lastRect = result[result.length - 1];
            setDataSource((pre) => {
                const positionResult = [...pre];
                pre.forEach((row, index) => {
                    if (row.rect.isMeasure) {
                        return;
                    }
                    if (index >= firstIndex && index < lastIndex) {
                        positionResult[index] = {
                            ...row,
                            rect: result[index],
                        };
                    }
                    if (index < firstIndex) {
                        return;
                    }
                    positionResult[index] = {
                        ...row,
                        rect: {
                            ...row.rect,
                            top: positionResult[index - 1].rect.bottom,
                            bottom:
                                positionResult[index - 1].rect.bottom +
                                row.rect.height,
                        },
                    };
                });
                return positionResult;
            });
        }
    };
    const handleScroll = () => {};
    return (
        <div
            ref={containerRef}
            style={{ height, overflow: 'hidden' }}
            onScroll={handleScroll}
        >
            <div style={{ height: topHeight }} />
            {VisibleNodes}
            <div style={{ height: bottomHeight }} />
        </div>
    );
};

export default VirtualList;
