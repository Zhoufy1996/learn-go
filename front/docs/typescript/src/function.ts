/** @format */

/**
 * 函数重载
 * @param x
 */
function myAdd(x: number): number;
function myAdd(x: { x: number; y: number; z: number }): number;
function myAdd(x: any): any {
    if (typeof x === 'number') {
        return x;
    }
    return x.x + x.y + x.z;
}

const z = myAdd(1);
const sum = myAdd({ x: 1, y: 1, z: 1 });
