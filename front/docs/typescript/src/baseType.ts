/** @format */

// 1. boolean
const isDone: boolean = false;

// 2. number
const height: number = 12;

// 3. string
const lastName: string = 'bob';

// 4. array
const list: number[] = [1, 2, 3];

// 5. tuple
const x: [string, number] = ['hello', 10];

// 6. enum

enum Color {
    Red = 1,
    Green,
    Blue,
}

// 7. any
let anyThing: any = false;
anyThing = 'name';
anyThing = 1;

// 8. void
// void不能赋值给null
function warnUser(): void {
    // eslint-disable-next-line no-console
    console.log('this is my warning message');
}

const unusable: void = undefined;

// 9. undefined & null
const u: undefined = undefined;
const n: null = null;

// 9. never
// 抛出异常,没有返回值
const error = (): never => {
    throw new Error();
};

const failure = () => {
    return error();
};

const infiniteLoop = (): never => {
    while (true) {
        //
    }
};

// 10. object
const create = (o: object | null): void => {};

create({ o: 1 });
create(null);

// 11. 类型断言
const someValue: any = 'this is a string';
const strLength: number = (someValue as string).length;
