/** @format */
import { ElementType } from 'react';

interface DragEventProps {
    isDragging?: boolean;
}

export interface BaseDragItemProps<T> {
    children?: JSX.Element | JSX.Element[] | null;
    component?: ElementType<any>;
    getStyle?: (props: DragEventProps) => React.CSSProperties;
    getClassName?: (props: DragEventProps) => string;
    isDraggingEffect?: (data: T, isDragging: boolean) => void;
}

export interface DropEventProps {
    isOver: boolean;
    canDrop: boolean;
    index: number;
}

export interface BaseDropContainerProps<T> {
    children?: JSX.Element | JSX.Element[] | null;
    component?: ElementType<any>;
    getStyle?: (props: DropEventProps) => React.CSSProperties;
    getClassName?: (props: DropEventProps) => string;
    onDrop?: (data: T) => void;
    onCanDrop?: (data: T) => boolean;
    index: number;
}

export interface DragItemProps<T> extends BaseDragItemProps<T> {
    dragType: string;
    data: T;
}

export interface DropContainerProps<T> extends BaseDropContainerProps<T> {
    accept: string;
    data: T;
}

export interface KeySortNoMap {
    [k: string]: number;
}

export interface DragGridProps<T> {
    dataSource: T[];
    type: string;
    sortKeys?: string[];
    defaultKeys?: string[];
    rowCount?: number;
    paddingRatio?: number;
    getKey: (data: T) => number;
    render: (
        data: T,
        isDragging: boolean
    ) => JSX.Element | JSX.Element[] | null;
    onChange?: (keys: string[]) => any;
}
