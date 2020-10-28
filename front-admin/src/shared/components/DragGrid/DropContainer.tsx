/** @format */
import React, { ElementType, useMemo } from 'react';
import { useDrop } from 'react-dnd';
import { DropContainerProps } from './model';

const DropContainer = <T,>({
    data,
    accept,
    component = 'div',
    children = null,
    getStyle = () => ({}),
    getClassName = () => '',
    onDrop = () => {},
    onCanDrop = () => true,
    index,
}: DropContainerProps<T>) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept,
        drop: () => onDrop(data),
        canDrop: () => onCanDrop(data),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    });
    const ElementTag: ElementType<any> = useMemo(() => {
        return component;
    }, [component]);

    const style: React.CSSProperties = useMemo(() => {
        return getStyle({ isOver, canDrop, index });
    }, [getStyle, isOver, canDrop, index]);

    const className: string = useMemo(() => {
        return getClassName({ isOver, canDrop, index });
    }, [getClassName, isOver, canDrop, index]);

    return (
        <ElementTag ref={drop} style={style} className={className}>
            {children}
        </ElementTag>
    );
};

export default DropContainer;
