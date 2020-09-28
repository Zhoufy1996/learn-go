/** @format */

const sym1 = Symbol('key');

const obj = {
    [sym1]: 'value',
};

const aaa = obj[sym1];

class C {
    // eslint-disable-next-line class-methods-use-this
    [sym1]() {
        return 'c';
    }
}

const c = new C();
const va = c[sym1]();
