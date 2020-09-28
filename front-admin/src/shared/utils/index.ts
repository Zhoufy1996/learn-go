/** @format */

const sum = (...args: number[]): number => {
    return args.reduce((acc, cur) => acc + cur, 0);
};

export default {
    sum,
};
