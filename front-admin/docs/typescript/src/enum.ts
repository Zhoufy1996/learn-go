/**
 * 数字枚举
 *
 * @format
 *
 */

// 1234
enum Direction {
    UP = 1,
    DOWN,
    LEFT,
    RIGHT,
}

// 0123
enum Direction2 {
    UP,
    DOW,
    LEFT,
    RIGHT,
}

const getSomeValue = () => {
    return 1;
};

enum E {
    A = getSomeValue(),
    B,
}

/**
 * 字符串枚举
 */
enum Direction3 {
    UP = 'UP',
    DOWN = 'DOWN',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
}

/**
 * 异构枚举
 * 不推荐
 */
enum BooleanLikeHeterogeneousEnum {
    NO = 0,
    YES = 'YES',
}

enum FileAccess {
    None,
    Read = 1,
    Write = 2,
    // 编译结果 ReadWrite 为3
    // eslint-disable-next-line no-bitwise
    ReadWrite = Read | Write,
    G = '123'.length,
}

enum I {
    X,
    Y,
    Z,
}

const f = (obj: { X: number }) => {
    return obj.X;
};

f(I);

enum Enum {
    A,
}

/**
 * 反向映射
 */
const ab = Enum.A;
const ba = Enum[ab];

/**
 * const枚举
 * 编译之后会被删除
 * 使用的地方会被内联进来
 */
const enum Directions {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}

const directions = [Directions.UP, Directions.DOWN];

/**
 * 跟interface一样，不会被编译成js
 *
 */
declare enum Enum4 {
    A = 1,
    B,
    C = 2,
}

const cd = Enum4.B;
const cf = Enum4.A;
