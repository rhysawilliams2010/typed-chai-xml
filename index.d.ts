import {Assertion} from '~chai/lib/Assertion';

declare module '~chai/lib/Assertion' {
    interface Assertion {
        xml: Assertion;
        valid(obj: Object): Assertion;
    }
}

declare function chaiXml(chai: any, utils: any): void;

export = chaiXml;
