/** @format */
import { KeySortNoMap } from './model';

// 问题 map 与 两次 splite 性能比较
export const moveTo = <T>(
    beginIndex: number,
    endIndex: number,
    originArr: T[]
) => {
    if (beginIndex < endIndex) {
        return originArr.map((n, index) => {
            if (index < beginIndex) {
                return n;
            }

            if (index >= beginIndex && index < endIndex) {
                return originArr[index + 1];
            }

            if (index === endIndex) {
                return originArr[beginIndex];
            }

            return n;
        });
    }

    if (beginIndex > endIndex) {
        return originArr.map((n, index) => {
            if (index < endIndex) {
                return n;
            }

            if (index === endIndex) {
                return originArr[beginIndex];
            }

            if (index > endIndex && index <= beginIndex) {
                return originArr[index - 1];
            }
            return n;
        });
    }
    return originArr;
};

export const arrToMap = (keys: string[]): KeySortNoMap => {
    return Object.fromEntries(keys.map((key, index) => [key, index]));
};

export const mapToArr = (map: KeySortNoMap): string[] => {
    return Object.entries(map)
        .sort(([_1, lSortNo], [_2, rSortNo]) => lSortNo - rSortNo)
        .map(([key]) => key);
};
