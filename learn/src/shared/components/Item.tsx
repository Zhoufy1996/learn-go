/** @format */

import React, { useRef, useCallback } from 'react';

interface ItemProps {
    children: React.ReactElement;
    setNode: (element: HTMLElement) => any;
}

const Item = ({ children, setNode }: ItemProps) => {
    const refFunc = useCallback(
        (node) => {
            setNode(node);
        },
        [setNode]
    );
    return React.cloneElement(children, {
        ref: refFunc,
    });
};

export default Item;
