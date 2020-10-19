/** @format */
import React from 'react';
import { Container } from 'unstated-next';
import { BlogContainers } from '../../features/blog';
import AuthorityContainer from './authority';

interface StoreProps {
    containers: Container<any, any>[];
    children: JSX.Element | null;
}

export const Store = ({ containers, children }: StoreProps) => {
    return containers.reduce((child, ContainerAcc) => {
        return <ContainerAcc.Provider>{child}</ContainerAcc.Provider>;
    }, children);
};

export const containers = [AuthorityContainer, ...BlogContainers];
