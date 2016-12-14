"use strict";
var HelloWorld = (function () {
    function HelloWorld() {
    }
    HelloWorld.prototype.sayHello = function () {
        console.log("HelloWorld");
    };
    return HelloWorld;
}());
exports.HelloWorld = HelloWorld;
;
