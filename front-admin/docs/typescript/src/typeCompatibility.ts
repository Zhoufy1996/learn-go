/** @format */
interface Named {
    name: string;
}

class Person {
    name: string = 'abc';
}

const p: Named = new Person();

/**
 * 函数
 */
let sum1 = (a: number, b: number): number => {
    return a + b;
};

let sum2 = (a: number, b: number, c: number): number => {
    return a + b + c;
};

sum2 = sum1;

sum1 = sum2;

let sum3 = (...args: number[]): number => {
    return args.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
};

sum3 = sum1;

sum1 = sum3;
