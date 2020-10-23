/** @format */
import { ElementType } from 'react';

interface DragEventProps {
    isDragging?: boolean;
}

interface BaseDragItemProps<T> {
    children?: JSX.Element | JSX.Element[] | null;
    component?: ElementType<any>;
    getStyle?: (props: DragEventProps) => React.CSSProperties;
    getClassName?: (props: DragEventProps) => string;
    isDraggingEffect?: (data: T, isDragging?: boolean) => void;
}

interface DropEventProps {
    isOver?: boolean;
    canDrop?: boolean;
}

interface BaseDropContainerProps<T> {
    children?: JSX.Element | JSX.Element[] | null;
    component?: ElementType<any>;
    getStyle?: (props: DropEventProps) => React.CSSProperties;
    getClassName?: (props: DropEventProps) => string;
    onDrop?: (data: T) => void;
    onCanDrop?: (data: T) => boolean;
}

export interface DropDragItemProps<T> {
    data: T;
    type: string;
    children?: JSX.Element | JSX.Element[] | null;
    dragProps?: BaseDragItemProps<T>;
    dropProps?: BaseDropContainerProps<T>;
}

export interface DragItemProps<T> extends BaseDragItemProps<T> {
    dragType: string;
    data: T;
}

export interface DropContainerProps<T> extends BaseDropContainerProps<T> {
    accept: string;
    data: T;
}

export interface SortMap {
    [k: string]: number;
}

export interface DragGridProps<T> {
    dataSource: T[];
    type: string;
    key: string;
    sortKeys: number[];
    getKey: (data: T) => number;
    render: (data: T) => JSX.Element | JSX.Element[] | null;
    dropDragItemProps: DropDragItemProps<T>;
}
