"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestClass = /** @class */ (function () {
    function TestClass() {
    }
    Object.defineProperty(TestClass.prototype, "Property", {
        get: function () {
            return "This string literal was a result of a property getter of Property 'Property' in class 'TestClass'";
        },
        enumerable: true,
        configurable: true
    });
    TestClass.prototype.method = function () {
        return "This string literal was a result of a method call TestClass.method()";
    };
    return TestClass;
}());
exports.TestClass = TestClass;
//# sourceMappingURL=testclass.js.map