/** @format */

/**
 * withxx , 增强组件
 */
import React from 'react';

interface FunctionComponent {
    <T>(props: T): JSX.Element;
}
interface CreateFunctionComponent<T> {
    (props: T): JSX.Element;
}
type HOCDemoComponent = CreateFunctionComponent<{
    dataSource: number[];
    count: number;
}>;

const DataSource: HOCDemoComponent = ({
    dataSource,
    count,
}: {
    dataSource: number[];
    count: number;
}) => {
    // eslint-disable-next-line no-console
    return (
        <div>
            <div>{count}</div>
            {dataSource.map((item) => {
                return <div key={item}>{item}</div>;
            })}
        </div>
    );
};
function getDisplayName(WrappedComponent: any) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const widthSubscription = (
    WrappedComponent: HOCDemoComponent
): HOCDemoComponent => {
    const dataSource = [123];
    const WithSubscription = (props: any) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <WrappedComponent dataSource={dataSource} {...props} />
    );
    WithSubscription.displayName = `WithSubscription(${getDisplayName(
        WrappedComponent
    )})`;
    // eslint-disable-next-line no-console
    return WithSubscription;
};

const DataSourceComponent = widthSubscription(DataSource);

const HOCDemo = () => {
    // eslint-disable-next-line no-console
    console.log(DataSourceComponent);
    return <DataSourceComponent count={5} dataSource={[]} />;
};

export default HOCDemo;
