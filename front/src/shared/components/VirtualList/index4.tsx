/** @format */
import React, { useRef, useState, useMemo } from 'react';
import Item from '../Item';

interface RenderFunc<T> {
    (row: T, index: number): JSX.Element;
}

interface GetKey<T> {
    (item: T): React.Key;
}

interface VirtualListProps<T> {
    data: T[];
    height: number;
    rowHeight: number;
    render?: RenderFunc<T>;
    rowKey: GetKey<T>;
}

class CacheMap<v> {
    private cache: { [key: string]: v };

    constructor() {
        this.cache = {};
    }

    set(k: string, v: v) {
        this.cache[k] = v;
    }

    get(k: string): v | undefined {
        return this.cache[k];
    }
}

/**
 * 1. 节点信息初始化
 * 2. 计算需要展示的数据
 * 3. 渲染
 * 4. 渲染data之后获取data的高度并保存
 * 5. 滚动,根据scrollTop和data的高度，计算需要渲染的data, topHeight, totalHeight, bottomHeight
 * 6. 3-5循环
 */
const VirtualList = <T,>({
    data,
    height,
    rowHeight,
    render = (row) => {
        return <>{row}</>;
    },
    rowKey,
}: VirtualListProps<T>): JSX.Element => {
    const [scrollTop, setScrollTop] = useState<number>(0);
    const cacheRef = useRef(new CacheMap<number>());
    const dataSource = useMemo(() => {
        return data;
    }, [data]);

    const { start, end, topHeight, bottomHeight, totalHeight } = useMemo(() => {
        let startIndex: number = -1;
        let endIndex: number = -1;
        let offsetTop = 0;
        let savedoffsetTop = 0;
        let offsetBottom = 0;
        let sumHeight = 0;
        dataSource.forEach((row, index) => {
            const key = rowKey(row) as string;
            const cacheHeight = cacheRef.current.get(key);
            const currentHeight =
                cacheHeight === undefined ? rowHeight : cacheHeight;
            const currentRowBottom = savedoffsetTop + currentHeight;
            sumHeight += currentHeight;
            if (currentRowBottom >= scrollTop && startIndex === -1) {
                startIndex = index;
                offsetTop = savedoffsetTop;
            }

            if (currentRowBottom > scrollTop + height && endIndex === -1) {
                endIndex = index + 1;
            }

            if (endIndex !== -1) {
                offsetBottom += currentHeight;
            }

            savedoffsetTop = currentRowBottom;
        });

        if (startIndex === -1) {
            startIndex = 0;
        }

        if (endIndex === -1) {
            endIndex = dataSource.length - 1;
        }

        const result = {
            start: startIndex,
            end: endIndex,
            topHeight: offsetTop,
            bottomHeight: offsetBottom,
            totalHeight: sumHeight,
        };
        return result;
    }, [scrollTop, rowKey, dataSource, rowHeight, height]);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const { scrollTop: newScrollTop } = e.currentTarget;
        const maxScrollTop = totalHeight - height;
        if (scrollTop !== newScrollTop && newScrollTop < totalHeight - height) {
            const result = Math.min(newScrollTop, maxScrollTop);
            window.console.log(result, newScrollTop, maxScrollTop);
            setScrollTop(result);
        }
    };

    const childList = useMemo(() => {
        const setInterface = (item: T, node: HTMLElement) => {
            if (node != null) {
                const rect = node.getBoundingClientRect();
                const key = rowKey(item) as string;
                cacheRef.current.set(key, rect.height);
            }
        };
        return dataSource.slice(start, end).map((item, index) => {
            const key = rowKey(item);
            return (
                <Item key={key} setNode={(node) => setInterface(item, node)}>
                    {render(item, start + index)}
                </Item>
            );
        });
    }, [start, end, render, dataSource, rowKey]);

    return (
        <div style={{ height, overflow: 'auto' }} onScroll={handleScroll}>
            <div style={{ height: topHeight }} />
            {childList}
            <div style={{ height: bottomHeight }} />
        </div>
    );
};

export default VirtualList;
