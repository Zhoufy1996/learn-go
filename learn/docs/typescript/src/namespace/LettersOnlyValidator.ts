/** @format */
/// <reference path="Validation.ts" />

namespace Validation {
    const lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        // eslint-disable-next-line class-methods-use-this
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}
