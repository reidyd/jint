/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-5-b-150.js
 * @description Object.defineProperties - 'writable' property of 'descObj' is inherited accessor property without a get function (8.10.5 step 6.a)
 */


function testcase() {
        var obj = {};

        var proto = {};

        Object.defineProperty(proto, "writable", {
            set: function () { }
        });

        var Con = function () { };
        Con.prototype = proto;

        var descObj = new Con();

        Object.defineProperties(obj, {
            property: descObj
        });

        obj.property = "isWritable";

        return obj.hasOwnProperty("property") && typeof (obj.property) === "undefined";
    }
runTestCase(testcase);
