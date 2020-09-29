/** @format */

type dataType = 'string' | 'number' | 'boolean' | 'object';

const useLocalStorage = <T>(key: string, type: dataType = 'string') => {
    const shouldTransform = type === 'object';
    const get = (): T => {
        const str = window.localStorage.getItem(key) || '';
        return shouldTransform ? JSON.parse(str) : str;
    };

    const update = (value: T) => {
        return window.localStorage.setItem(
            key,
            shouldTransform
                ? JSON.stringify(value)
                : ((value as unknown) as string)
        );
    };
    const clear = () => {
        return window.localStorage.removeItem(key);
    };

    return { get, update, clear };
};

export default useLocalStorage;
