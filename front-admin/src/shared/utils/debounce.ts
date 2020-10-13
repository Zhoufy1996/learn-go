/** @format */

export const customDebounce = (fn: any): any => {
    let id: any = 0;
    const time = 500;
    const execute = () => {
        id = setTimeout(() => {
            id = 0;
            fn();
        }, time);
    };
    return () => {
        if (id) {
            clearTimeout(id);
        }
        execute();
    };
};
