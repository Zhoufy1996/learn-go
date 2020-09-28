/** @format */

// eslint-disable-next-line max-classes-per-file
function color(value: string) {
    // 这是一个装饰器工厂
    return function (target) {
        //  这是装饰器
        // do something with "target" and "value"...
    };
}

/**
 * f(): evaluated
 * g(): evaluated
 * g(): called
 * f(): called
 */
function f() {
    console.log('f(): evaluated');
    return function (
        target,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log('f(): called');
    };
}

function g() {
    console.log('g(): evaluated');
    return function (
        target,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log('g(): called');
    };
}

class C {
    @f()
    @g()
    method() {}
}

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return 'Hello, ' + this.greeting;
    }
}
