/** @format */
import React, { useState } from 'react';

class ErrorBoundary extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError() {
        // 更新 state 使下一次渲染能够显示降级后的 UI
        // eslint-disable-next-line no-console
        console.log('error');
        return { hasError: true };
    }

    componentDidCatch() {
        // eslint-disable-next-line no-console
        console.log('error');
    }

    render() {
        const { hasError } = this.state;
        // eslint-disable-next-line no-console
        console.log(hasError);
        // eslint-disable-next-line react/prop-types
        const { children } = this.props;
        if (hasError) {
            // 你可以自定义降级后的 UI 并渲染
            return <h1>Something went wrong.</h1>;
        }

        return children;
    }
}

const ErrorDemo = () => {
    const [count, setCount] = useState(0);
    const onChange = () => {
        const { a } = count as any;
        // console.log(a);
    };
    return (
        <ErrorBoundary>
            <div>
                <button type="button" onClick={onChange}>
                    change
                </button>
            </div>
        </ErrorBoundary>
    );
};

export default ErrorDemo;
