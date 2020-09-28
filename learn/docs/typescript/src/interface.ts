/**
 * /* eslint-disable lines-between-class-members
 *
 * @format
 */

/** @format */

/**
 * 接口初探
 */
// eslint-disable-next-line max-classes-per-file
interface LabelValue {
    label: string;
}

const printLabel = (labelledObj: LabelValue) => {
    console.log(labelledObj.label);
};

const myObj = { size: 10, label: 'size 10 Object' };

printLabel(myObj);

/**
 * 可选属性
 */
interface SquareConfig {
    color?: string;
    width?: number;
}

interface Square {
    color: string;
    area: number;
}

const createSquare = (config: SquareConfig): Square => {
    const newSquare: Square = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }

    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
};

// refactor
const refactorCreateSquare = ({
    color = 'white',
    width = 10,
}: SquareConfig): Square => {
    return {
        color,
        area: width * width,
    };
};

/**
 * 只读属性
 */

interface Point {
    readonly x: number;
    readonly y: number;
}

const p1: Point = { x: 10, y: 20 };
p1.x = 1;

let a: number[] = [1, 2, 3];
const ro: ReadonlyArray<number> = a;
ro[0] = 12;
ro.push(5);
ro.length = 100;
a = ro;

const yourSquare = createSquare({
    width: 100,
    color: 'white',
    colour: 'white',
});

// 属性签名
interface SquareConfigOther extends SquareConfig {
    [propName: string]: any;
}

/**
 * 函数类型
 */
interface SearchFunc {
    (source: string, subString: string): boolean;
}

const mySearch: SearchFunc = (source, subString) => {
    return source.search(subString) > -1;
};

interface StringArray {
    [index: number]: string;
}

/**
 * 可索引的类型
 */
const myArray: StringArray = ['str', 'x'];

const myStr: string = myArray[0];

interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}

interface Okay {
    [x: string]: Animal;
    [x: number]: Dog;
}

const animal: Animal = {
    name: 'cat',
};

const dog: Dog = {
    breed: 'haha',
    name: 'dog',
};

const ok: Okay = {
    1: dog,
};

interface NumberDictionary {
    length: number;
    name: string;
    [index: string]: number;
}

/**
 * 类类型
 */
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

interface ClockConstructor {
    new (hour: number, minute: number): any;
}

/**
 * 静态部分不进行检查
 */
class Clock implements ClockConstructor {
    currentTime: Date = new Date();

    h: number;

    m: number;

    constructor(h: number, m: number) {
        this.h = h;
        this.m = m;
    }

    setTime(d: Date) {
        this.currentTime = d;
    }
}

/**
 *
 */

interface ClockInterface2 {
    tick(): void;
}

interface ClockConstructor {
    new (hour: number, minite: number): ClockInterface2;
}

const createClock = (
    Ctor: ClockConstructor,
    hour: number,
    minite: number
): ClockInterface2 => {
    return new Ctor(hour, minite);
};

class DigitalClock implements ClockInterface2 {
    // eslint-disable-next-line
    constructor(hour: number) {}

    // eslint-disable-next-line
    tick() {
        // eslint-disable-next-line
        console.log('a');
    }
}

/**
 * 没有检查构造函数
 */
const digitalClock = createClock(DigitalClock, 1, 2);

/**
 * 混合类型
 */
interface Count {
    (getStart: number): void;
    start: number;
    tick: () => void;
}

const getCount = () => {
    const count2: Count = (start: number) => {};
    count2.tick = () => {};
    count2.start = 100;
    return count2;
};

const handleCount = getCount();
handleCount(2);
handleCount.tick();

/**
 * 接口继承类
 * 1. 继承类型，不继承实现
 */

class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    // eslint-disable-next-line class-methods-use-this
    select() {
        //
    }
}

class TextBox extends Control {
    // eslint-disable-next-line class-methods-use-this
    select() {
        //
    }
}

class Image2 implements SelectableControl {
    state: any;
    // eslint-disable-next-line class-methods-use-this
    select() {}
}

/**
 * 类继承接口
 * 1. 实例化类型
 * 2. 构造函数前面怎么检查
 */
