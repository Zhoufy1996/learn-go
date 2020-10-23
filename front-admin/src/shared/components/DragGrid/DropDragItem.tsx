/** @format */
import React from 'react';
import DragItem from './DragItem';
import DropContainer from './DropContainer';
import { DropDragItemProps } from './model';

const DropDragItem = <T,>({
    type,
    data,
    children,
    dragProps = {},
    dropProps = {},
}: DropDragItemProps<T>) => {
    return (
        <DragItem {...dragProps} data={data} dragType={type}>
            <DropContainer {...dropProps} data={data} accept={type}>
                {children}
            </DropContainer>
        </DragItem>
    );
};

export default DropDragItem;
