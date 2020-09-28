/** @format */
import React, { useState, useCallback, useMemo } from 'react';

// const add = window.addEventListener;

// window.addEventListener = (...args: any[]) => {
//     // eslint-disable-next-line no-console
//     console.log('add', args);
//     // return add(...args);
// };

const Button = ({
    onClick = (): void => {},
    title = '',
}: {
    onClick: () => void;
    title: string;
}) => {
    // eslint-disable-next-line no-console
    // console.log(title, 'update');
    // const ref = useRef(onClick);
    // eslint-disable-next-line no-console
    // console.log(title, 'update');
    // useEffect(() => {
    //     // eslint-disable-next-line no-console
    //     console.log(title, 'update');
    // }, [onClick]);
    const Component = useMemo(() => {
        // eslint-disable-next-line no-console
        console.log('update', title);
        return (
            <div>
                <h2>{title}</h2>
                <button type="button" onClick={onClick}>
                    对比
                </button>
            </div>
        );
    }, [onClick, title]);
    return Component;
};

const RepeatUpdate = () => {
    // 如果直接声明，在count变化时onChange会重新声明
    const onChange = useCallback(() => {}, []);
    const [count, setCount] = useState<number>(0);
    return (
        <div>
            <button
                type="button"
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                change
            </button>
            <Button key="normal" onClick={onChange} title="传入普通函数" />
            <Button key="repeat" onClick={() => {}} title="传入箭头函数" />
        </div>
    );
};

export default RepeatUpdate;
