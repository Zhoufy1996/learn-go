/** @format */
import React from 'react';
import { Container } from 'unstated-next';

class Store {
    private data: Container<unknown, unknown>[];

    constructor() {
        this.data = [];
    }

    addState(dataArr: Container<any, any>[]) {
        this.data.push(...dataArr);
    }

    getStoreComponent() {
        return (props: { children: JSX.Element | null }) =>
            this.data.reduce(
                (children, ContainerAcc) => (
                    <ContainerAcc.Provider>{children}</ContainerAcc.Provider>
                ),
                props.children
            );
    }
}

export default Store;
