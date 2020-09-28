/** @format */

import React, { useContext, createContext, ReactNode } from 'react';

// eslint-disable-next-line symbol-description
const EMPTY: unique symbol = Symbol();

interface UseHook<initState, Value> {
    (state: initState): Value;
}

interface ProviderProps<State = void> {
    initState: State;
    children: ReactNode;
}

interface Container<Value, State = void> {
    Provider: React.ComponentType<ProviderProps<State>>;
    useContainer: () => Value | typeof EMPTY;
}

/**
 * App
 *
 * const useCountHook = () => {
 *  const [count, setCount] = useState(0)
 *  return [
 *          count,
 *          setCount
 *      ]
 * }
 * const Count = createContainer(useCountHook)
 * <Count.Provider />
 *  const [count, setCount] = Count.useContainer()
 */
const createContainer = <initState, Value>(
    useHook: UseHook<initState, Value>
): Container<Value, initState> => {
    const Context = createContext<Value | typeof EMPTY>(EMPTY);
    const Provider = (props: ProviderProps<initState>) => {
        const { initState, children } = props;
        const value = useHook(initState);
        return <Context.Provider value={value}>{children}</Context.Provider>;
    };
    const useContainer = () => {
        const value = useContext(Context);
        return value;
    };
    return {
        Provider,
        useContainer,
    };
};

export default createContainer;
