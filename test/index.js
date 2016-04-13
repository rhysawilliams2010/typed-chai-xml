/// <reference path="../typings/main.d.ts" />
/// <reference path="../bundle.d.ts/main.d.ts" />
"use strict";
var chai = require("chai");
var chai_1 = require("chai");
var chaiXml = require("chai-xml");
chai.use(chaiXml);
describe("chai xml test", function () {
    it("should compare xml strings as expected", function () {
        chai_1.expect("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n                <Root>\n                    <Node Attribute=\"hello\"/>\n                </Root>").xml.to.deep.equal("<Root><Node Attribute=\"hello\"></Node></Root>");
    });
});
