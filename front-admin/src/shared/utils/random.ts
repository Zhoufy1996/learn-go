/** @format */

// [start, end)
export const random = (min: number, max: number): number => {
    const realMin = Math.ceil(min);
    const realMax = Math.ceil(max);
    const n = Math.random(); // [0, 1)

    const result = Math.floor((realMax - realMin) * n) + realMin;
    return result;
};
