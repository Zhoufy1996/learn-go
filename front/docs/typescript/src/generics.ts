/** @format */
/* eslint-disable max-classes-per-file */

/**
 * hello world
 */
// function identity<T>(arg: T): T {
//     return arg;
// }

const identity = <T>(arg: T) => {
    return arg;
};

const b = identity<number>(1);

/**
 * T[]
 */

/**
 * 泛型类型
 */

const myIdentity: <T>(arg: T) => T = identity;
const myIdentity2: { <T>(arg: T): T } = identity;

/**
 * 泛型接口
 */
interface GenericIdentityFn {
    <T>(arg: T): T;
}

const myIdentity3: GenericIdentityFn = identity;

/**
 * 生成接口的接口(高阶函数的定义)
 */
interface IdentityFn<T> {
    (arg: T): T;
}

const myIdentity4: IdentityFn<number> = identity;

/**
 * 泛型类
 */

/**
 * 泛型约束
 */
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    return arg;
}

loggingIdentity(3);
loggingIdentity([]);
loggingIdentity({ length: 10, value: 3 });

/**
 * 在泛型约束中使用类型参数
 */
function geProperty<T, K>(obj: T, key: K) {
    return obj[key];
}

const xx = { a: 1, b: 2 };
getProperty(xx, 'a');

/**
 * 在泛型里使用类类型
 */
function createA<T extends Animal2>(C: { new (): T }): T {
    return new C();
}

class Animal2 {
    numLegs: number;

    constructor(numLegs: number) {
        this.numLegs = numLegs;
    }
}

class BeeKeeper extends Animal2 {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super(4);
    }
}

const mask = createA(BeeKeeper);

const createFn = <T>(number: T) => {
    const change = () => {
        return number;
    };
    return {
        change,
    };
};
