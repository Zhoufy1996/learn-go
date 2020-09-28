/** @format */

import React from 'react';
import ReactDOM from 'react-dom';

const modelRoot =
    document.getElementById('model-root') || document.querySelector('body');

const PortalComponent = ({ children }: { children: JSX.Element }) => {
    return ReactDOM.createPortal(children, modelRoot as HTMLElement);
};

const PortalsDemo = () => {
    return (
        <PortalComponent>
            <div>123</div>
        </PortalComponent>
    );
};

export default PortalsDemo;
