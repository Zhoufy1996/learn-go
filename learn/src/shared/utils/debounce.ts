/** @format */

export const customDebounce = (fn: any): any => {
    let id: any = 0;
    const time = 500;
    return () => {
        if (id) {
            clearTimeout(id);
            id = setTimeout(() => {
                id = 0;
                fn();
            }, time);
        } else {
            id = setTimeout(() => {
                id = 0;
                fn();
            }, time);
        }
    };
};
