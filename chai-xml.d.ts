declare namespace Chai {
    interface Assertion {
        xml : string;
        valid(obj: Object): Assertion;
    }
}

declare module "chai-xml" {
    function chaiXml(chai: any, utils: any): void;
    export = chaiXml;
}