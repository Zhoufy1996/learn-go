/** @format */

const useLocalStorage = <T = string>(key: string) => {
    const get = (): T => {
        const str = window.localStorage.getItem(key) || '';
        return JSON.parse(str);
    };

    const update = (value: T) => {
        return window.localStorage.setItem(key, JSON.stringify(value));
    };
    const clear = () => {
        return window.localStorage.removeItem(key);
    };

    return { get, update, clear };
};

export default useLocalStorage;
