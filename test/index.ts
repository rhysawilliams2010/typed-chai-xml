/// <reference path="../typings/main.d.ts" />
/// <reference path="../bundle.d.ts/main.d.ts" />

import * as chai from "chai";
import {expect} from "chai";
import * as chaiXml from "chai-xml";

chai.use(chaiXml);

describe("chai xml test", function(){
    it("should compare xml strings as expected", function(){
        expect(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
                <Root>
                    <Node Attribute="hello"/>
                </Root>`).xml.to.deep.equal(`<Root><Node Attribute="hello"></Node></Root>`);
    });
});
