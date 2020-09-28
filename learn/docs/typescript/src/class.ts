/** @format */
/* eslint-disable no-useless-constructor */

/**
 * 参数属性
 */
// eslint-disable-next-line max-classes-per-file
class Outopus {
    // eslint-disable-next-line no-useless-constructor
    constructor(readonly name: string) {
        //
    }
}

const outputs = new Outopus('hello');
outputs.name = 1;

class Animal {
    constructor(public name: string) {
        //
    }
}

const cat = new Animal('cat');
cat.name = 'new cat';

class Grid {
    static origin = { x: 0, y: 0 };
}

console.log(Grid.origin);

abstract class Aninal {
    constructor(private name: string) {
        //
    }

    printName(): void {
        console.log(this.name);
    }

    abstract cry(): void;
}

class Mouse extends Animal {
    constructor() {
        super('mouse');
    }

    // eslint-disable-next-line class-methods-use-this
    cry() {
        console.log('zhi zhi');
    }
}

const mouse = new Mouse();
mouse.cry();
mouse.name;
