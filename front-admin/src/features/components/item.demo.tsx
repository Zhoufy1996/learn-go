/** @format */
import React, { useCallback } from 'react';
import Item from '../../shared/components/Item';

const ItemDemo = () => {
    const callback = useCallback((node: HTMLElement) => {
        window.console.log(node);
    }, []);
    return (
        <Item setNode={callback}>
            <div>123</div>
        </Item>
    );
};

export default ItemDemo;
