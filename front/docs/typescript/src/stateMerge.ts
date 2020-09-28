/** @format */

/**
 * 合并接口
 */

interface Box {
    height: number;
}

interface Box {
    width: number;
}

const box: Box = {
    height: 1,
    width: 1,
};

interface Cloner {
    clone(n: number): number;
}

interface Cloner {
    clone(n: any): any;
}

const cloner: Cloner = {
    clone: (a: number) => a,
};

namespace Animals {
    const haveMuscles = true;
    export function animalsHaveMuscles() {
        return haveMuscles;
    }
}

// eslint-disable-next-line no-redeclare
namespace Animals {
    export function doAnimalsHaveMuscles() {
        // haveMuscles export之后能访问
        return haveMuscles;
    }
}

function buildLabel(name: string): string {
    return buildLabel.prefix + name + buildLabel.suffix;
}

// eslint-disable-next-line no-redeclare
namespace buildLabel {
    export const suffix = '';
    export const prefix = 'Hello, ';
}

console.log(buildLabel('Sam Smith'));
enum Color {
    red = 1,
    green = 2,
    blue = 4,
}

// eslint-disable-next-line no-redeclare
namespace Color {
    // eslint-disable-next-line consistent-return
    export function mixColor(colorName: string) {
        if (colorName === 'yellow') {
            return Color.red + Color.green;
            // eslint-disable-next-line no-else-return
        } else if (colorName === 'white') {
            return Color.red + Color.green + Color.blue;
        } else if (colorName === 'magenta') {
            return Color.red + Color.blue;
        } else if (colorName === 'cyan') {
            return Color.green + Color.blue;
        }
    }
}
