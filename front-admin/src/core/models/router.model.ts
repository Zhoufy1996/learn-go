/** @format */

import { LazyExoticComponent } from 'react';

interface SimpleComponent {
    (): JSX.Element;
}

export interface routerModel {
    path: string;
    component?: LazyExoticComponent<any> | SimpleComponent;
    children?: routerModel[];
    name: string;
    redirect?: {
        from: string;
        to: string;
    };
    showInSiderbar: boolean;
}
