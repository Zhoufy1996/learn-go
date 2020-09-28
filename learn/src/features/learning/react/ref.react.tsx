/** @format */
/**
 * 1. ref
 * 2. ref转发
 * 3. ref hook
 */
import React, { useRef, useState } from 'react';

interface FunctionComponent<T> {
    (props: T): JSX.Element;
}

type FancyButtonComponent = FunctionComponent<{
    initCount: number;
    farwardRef: React.MutableRefObject<HTMLDivElement> | null;
}>;

// eslint-disable-next-line react/require-default-props
const FancyButton: FancyButtonComponent = ({
    initCount = 0,
    farwardRef = null,
}: {
    initCount: number;
    farwardRef: React.MutableRefObject<HTMLDivElement> | null;
}) => {
    const [count, setCount] = useState<number>(initCount);
    const increase = () => setCount((pre) => pre + 1);
    const decrease = () => setCount((pre) => pre - 1);
    // eslint-disable-next-line no-console
    console.log(farwardRef);
    return (
        <div ref={farwardRef}>
            <div>{count}</div>
            <button type="button" onClick={increase}>
                +
            </button>
            <button type="button" onClick={decrease}>
                -
            </button>
        </div>
    );
};

interface ForwardRef {
    <T>(
        Component: FunctionComponent<
            T & { ref: React.MutableRefObject<HTMLDivElement> | null }
        >
    ): React.ForwardRefExoticComponent<
        T & { ref: React.MutableRefObject<HTMLDivElement> | null }
    >;
}

// ref转发 props传递 组件渲染
const forwardRef: ForwardRef = (Component) => {
    return React.forwardRef<any, any>((props, ref) => {
        // eslint-disable-next-line no-console
        console.log(props, ref);
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <Component {...props} farwardRef={ref} />;
    });
};

const ForwardButton = forwardRef(FancyButton);

const RefDemo = () => {
    const ref = useRef(null);
    // const forwardRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={ref}>
            <ForwardButton initCount={5} ref={ref} />
        </div>
    );
};

export default RefDemo;
