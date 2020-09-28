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
    render?: (data: T, height: number | string, index: number) => JSX.Element;
}

interface NodeRect {
    height: number; // 高度
    top: number; // 距离定点的距离
    bottom: number; // height + top
    isMeasure: boolean; // 是否已被测量
    index: number;
}

const offset = 2;

/**
 * 1. 传入data,rowHeight, height,render
 * 2. 当data长度为0，返回null
 * 3. 给每一个data添加预设高度rowHeight
 * 4. 渲染data
 * 5. 渲染data之后获取data的高度保存
 * 6. 滚动,根据scrollTop和data的高度，计算需要渲染的data
 * 7. 4-6循环
 *
 */
const VirtualList = <T,>({
    height,
    data,
    rowHeight,
    render = (row, h, index) => {
        return (
            <div key={index} style={{ height: h }}>
                {row}
            </div>
        );
    },
}: Props<T>) => {
    const [scrollTop, setScrollTop] = useState<number>(0);
    const [dataPositions, setDataPositions] = useState<NodeRect[]>([]);

    const containerRef = useRef<HTMLDivElement>(null);

    const totalHeight = useMemo(() => {
        if (dataPositions.length === 0) {
            return 0;
        }

        return dataPositions[dataPositions.length - 1].bottom;
    }, [dataPositions]);

    const visibleCount = useMemo(() => {
        return Math.ceil(height / rowHeight) + offset * 2;
    }, [height, rowHeight]);

    const startIndex = useMemo(() => {
        const min = 0;
        const max = data.length - visibleCount;
        if (dataPositions.length === 0) return 0;
        const firstData = dataPositions.reduce((acc, cur) => {
            if (acc.top <= scrollTop && cur.top >= scrollTop) {
                return cur;
            }
            return acc;
        });
        const beginIndex = (firstData && firstData.index) || 0;
        let result: number = beginIndex;
        if (beginIndex < min) {
            result = min;
        }
        if (beginIndex > max) {
            result = max;
        }
        return result;
    }, [data, visibleCount, scrollTop, dataPositions]);

    const endIndex = useMemo(() => {
        return startIndex + visibleCount;
    }, [startIndex, visibleCount]);

    const visibleData = useMemo(() => {
        const result = data.slice(startIndex, endIndex).map((item, index) => {
            // window.console.log(dataPositions[startIndex + index]);
            return {
                data: item,
                seq: startIndex + index,
                height:
                    dataPositions[startIndex + index] &&
                    dataPositions[startIndex + index].isMeasure
                        ? dataPositions[startIndex + index].height
                        : 'min-height',
            };
        });
        return result;
    }, [startIndex, endIndex, data, dataPositions]);

    const VisibleNode = useMemo(() => {
        const result = visibleData.map((row) => {
            return render(row.data, row.height, row.seq);
        });
        return result;
    }, [visibleData, render]);
    const visibleHeight = useMemo(() => {
        return visibleData.reduce(
            (acc, cur) =>
                acc + (typeof cur.height === 'number' ? cur.height : rowHeight),
            0
        );
    }, [visibleData, rowHeight]);

    useEffect(() => {
        const result = data.map((row, index) => {
            return {
                height: rowHeight,
                top: index * rowHeight,
                bottom: rowHeight * (index + 1),
                isMeasure: false,
                index,
            };
        });
        // window.console.log(result);
        setDataPositions(result);
    }, [data, rowHeight]);

    useEffect(() => {
        if (containerRef.current) {
            const result: NodeRect[] = [];
            // window.console.log(dataPositions);
            const { offsetTop } = containerRef.current;
            Array.from(containerRef.current.childNodes)
                .slice(1, containerRef.current.childNodes.length - 1)
                .forEach((node, index) => {
                    const currentIndex = index + startIndex;
                    const rect = (node as HTMLElement).getBoundingClientRect();
                    if (currentIndex === 0) {
                        // window.console.log(node);
                        (window as any).nodef = node;
                    }
                    result[currentIndex] = {
                        height: rect.height,
                        top: rect.top - offsetTop,
                        bottom: rect.bottom - offsetTop,
                        isMeasure: true,
                        index: currentIndex,
                    };
                });
            const lastRect = result[result.length - 1];
            // window.console.log(result);
            setDataPositions((pre) => {
                const positionResult = pre.map((row, index) => {
                    if (row.isMeasure) {
                        return row;
                    }
                    if (index >= startIndex && index < endIndex) {
                        return result[index];
                    }
                    if (index < startIndex) {
                        return row;
                    }
                    return {
                        ...row,
                        top: lastRect.top + (index - endIndex) * rowHeight,
                        bottom:
                            lastRect.bottom + (index - endIndex) * rowHeight,
                    };
                });
                // window.console.log(positionResult);
                return positionResult;
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [startIndex, endIndex, rowHeight]);

    const topHeight = useMemo(() => {
        // window.console.log(dataPositions[startIndex], startIndex);
        return (
            (dataPositions[startIndex] && dataPositions[startIndex].top) || 0
        );
    }, [dataPositions, startIndex]);
    const bottomHeight = useMemo(() => {
        return totalHeight - topHeight - visibleHeight;
    }, [visibleHeight, totalHeight, topHeight]);

    const handleScroll = useCallback(
        (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
            const offsetTop: number = Math.min(
                (e.target as any).scrollTop as number,
                totalHeight
            );
            window.console.log(offsetTop);
            setScrollTop(offsetTop);
        },
        [totalHeight]
    );

    return (
        // <CustomProfiler id="virtualList2">
        <div
            ref={containerRef}
            style={{ height, overflow: 'auto' }}
            onScroll={handleScroll}
        >
            <div style={{ height: topHeight }} />
            {VisibleNode}
            <div style={{ height: bottomHeight }} />
        </div>
        // </CustomProfiler>
    );
};

export default VirtualList;
