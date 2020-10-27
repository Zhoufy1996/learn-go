/** @format */
import React, { useEffect, useMemo, ElementType } from 'react';
import { useDrag } from 'react-dnd';
import { DragItemProps } from './model';

const DragItem = <T,>({
    data,
    dragType,
    component = 'div',
    children = null,
    getStyle = () => ({}),
    getClassName = () => '',
    isDraggingEffect = () => {},
}: DragItemProps<T>) => {
    const [{ isDragging }, drag] = useDrag({
        item: { type: dragType },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });
    useEffect(() => {
        isDraggingEffect(data, isDragging);
    }, [isDragging, isDraggingEffect, data]);

    const ElementTag: ElementType<any> = useMemo(() => {
        return component;
    }, [component]);

    const style: React.CSSProperties = useMemo(() => {
        return { cursor: 'move', ...getStyle({ isDragging }) };
    }, [getStyle, isDragging]);

    const className: string = useMemo(() => {
        return getClassName({ isDragging });
    }, [getClassName, isDragging]);

    return (
        <ElementTag ref={drag} style={style} className={className}>
            {children}
        </ElementTag>
    );
};

export default DragItem;
