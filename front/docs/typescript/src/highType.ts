/** @format */

interface Fish {
    fish: boolean;
}

interface Brid {
    brid: string;
}

function isFish(pet: Fish | Brid): pet is Fish {
    return (<Fish>pet).fish;
}

/**
 * 可辨识联合
 */
interface Square {
    kind: 'square';
    size: number;
}

interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
}

interface Circle {
    kind: 'circle';
    radius: number;
}

interface Triangle {
    kind: 'triangle';
    width: number;
}

type Shape = Square | Rectangle | Circle | Triangle;

function assertNever(x: never): never {
    throw new Error(`Unexpected Object${x}`);
}

const area = (s: Shape) => {
    switch (s.kind) {
        case 'square':
            return s.size * s.size;
        case 'rectangle':
            return s.width * s.height;
        case 'circle':
            return Math.PI * 2 * s.radius;
        case 'triangle':
            return s.width;
        default:
            return assertNever(s);
    }
};

/**
 * 索引类型
 */
const pluck = <T, K extends keyof T>(o: T, names: K[]): T[K][] => {
    return names.map((n) => o[n]);
};
interface Person {
    name: string;
    age: number;
}
const person: Person = {
    name: 'Jarid',
    age: 35,
};

const strings: (string | number)[] = pluck(person, ['name', 'age']);

type PersonKeys = keyof Person;

interface Map1<T> {
    [key: string]: T;
}
let keys: keyof Map1<number>;

let value: Map1<number>['foo'];
