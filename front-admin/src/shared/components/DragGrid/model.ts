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
    isDraggingEffect?: (data: T, isDragging?: boolean) => void;
}

interface DropEventProps {
    isOver?: boolean;
    canDrop?: boolean;
}

export interface BaseDropContainerProps<T> {
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

export interface KeySortNoMap {
    [k: string]: number;
}

export interface SortNoKeyMap {
    [k: number]: string;
}

export interface DragGridProps<T> {
    dataSource: T[];
    type: string;
    dropDragItemProps?: DropDragItemProps<T>;
    sortKeys?: string[];
    defaultKeys?: string[];
    getKey: (data: T) => number;
    render: (
        data: T,
        isDragging: boolean
    ) => JSX.Element | JSX.Element[] | null;
    onChange?: (keys: string[]) => any;
}

type position = 'before' | 'after' | 'current';

export interface HandleDrop<T> {
    ({ dropData, position }: { dropData: T; position: position }): void;
}

export interface HandleDropProps<T> {
    dropData: T;
    draggingData: T | null;
    keySortNoMap: KeySortNoMap;
}
