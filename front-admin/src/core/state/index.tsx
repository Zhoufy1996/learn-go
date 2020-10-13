/** @format */
import React from 'react';
import { Container } from 'unstated-next';
import AuthorityContainer from './authority';
import TagContainer from './tag';

interface StoreProps {
    containers: Container<any, any>[];
    children: JSX.Element | null;
}

export const Store = ({ containers, children }: StoreProps) => {
    return containers.reduce((child, ContainerAcc) => {
        return <ContainerAcc.Provider>{child}</ContainerAcc.Provider>;
    }, children);
};

export const containers = [AuthorityContainer, TagContainer];
