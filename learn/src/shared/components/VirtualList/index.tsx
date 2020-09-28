/** @format */
import React, {
    useState,
    useMemo,
    useCallback,
    useRef,
    useEffect,
} from 'react';
import CustomProfiler from '../CustomProfiler';

interface Props<T> {
    data: T[];
    render?: (data: T, height: number | string, index: number) => JSX.Element;
    height: number;
    rowHeight: number;
}

const offset = 3;

// interface HeightObj {
//     [key: number]: {
//         height: number;
//         top: number;
//     };
// }

interface NodeRect {
    height: number | 'min-content';
    top: number;
}

const handleNodeRects = <T,>(data: T[], rowHeight: number): NodeRect[] => {
    return data.map((_, index) => {
        return {
            height: 'min-content',
            top: rowHeight * index,
        };
    });
};

const VirtualList = <T,>({
    data,
    render = (row, index) => {
        return <div key={index}>{row}</div>;
    },
    height,
    rowHeight,
}: Props<T>) => {
    const [scrollTop, setScrollTop] = useState<number>(0);

    const nodeRectsRef = useRef<NodeRect[]>([]);

    const memoFn: void = useMemo(() => {
        const result = handleNodeRects(data, rowHeight);
        nodeRectsRef.current = result;
    }, [data, rowHeight]);

    const totalHeight = useMemo(() => {
        return data.length * rowHeight;
    }, [data, rowHeight]);

    const displayCount = useMemo(() => {
        return Math.ceil(height / rowHeight) + offset * 2;
    }, [height, rowHeight]);

    const startIndex = useMemo(() => {
        const min = 0;
        const max = data.length - displayCount;
        const beginIndex = Math.ceil(
            (scrollTop - offset * rowHeight) / rowHeight
        );
        if (beginIndex < min) {
            return min;
        }
        if (beginIndex > max) {
            return max;
        }
        return beginIndex;
    }, [data, displayCount, scrollTop, rowHeight]);

    const ShowNode = useMemo(() => {
        const dataShow = data
            .slice(startIndex, displayCount + startIndex)
            .map((item, index) => {
                const currentNodeRect =
                    nodeRectsRef.current[startIndex + index];
                return render(item, currentNodeRect.height, index + startIndex);
            });
        return dataShow;
    }, [startIndex, displayCount, data, render]);

    const topHeight = useMemo(() => {
        return startIndex * rowHeight;
    }, [startIndex, rowHeight]);

    const bottomHeight = useMemo(() => {
        return totalHeight - topHeight - displayCount * rowHeight;
    }, [totalHeight, topHeight, rowHeight, displayCount]);

    const handleScroll = useCallback(
        (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
            const offsetTop: number = Math.min(
                (e.target as any).scrollTop as number,
                totalHeight
            );
            setScrollTop(offsetTop);
        },
        [totalHeight]
    );

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            Array.from(containerRef.current.childNodes)
                .slice(1, containerRef.current.childNodes.length - 1)
                .forEach((node, index) => {
                    const currentIndex = index + startIndex;
                    const nodeHeight = (node as HTMLElement).getBoundingClientRect()
                        .height;
                    const top =
                        currentIndex === 0
                            ? 0
                            : nodeRectsRef.current[currentIndex - 1].top +
                              nodeHeight;
                    nodeRectsRef.current[currentIndex] = {
                        height: nodeHeight,
                        top,
                    };
                });
        }
    }, [startIndex, ShowNode]);
    return (
        <CustomProfiler id="virtualList">
            <div
                style={{ height, overflow: 'auto' }}
                onScroll={handleScroll}
                ref={containerRef}
            >
                <div style={{ height: topHeight }} />
                {ShowNode}
                <div style={{ height: bottomHeight }} />
            </div>
        </CustomProfiler>
    );
};

export default VirtualList;
