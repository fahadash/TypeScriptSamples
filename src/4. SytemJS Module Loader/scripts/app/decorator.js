"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styler_1 = require("./styler");
var Decorator = /** @class */ (function () {
    function Decorator() {
    }
    Decorator.prototype.Apply = function (title, body) {
        title.innerHTML = "Welcome to SystemJS Module Loader Sample";
        body.innerHTML = "This sample demostrates how multiple typescript files work together to make up an application and you don't need to include multiple files in your page, you use SystemJS to load the module.";
        var styler = new styler_1.Styler();
        styler.styleDiv(title, 35, "Verdana");
        styler.styleDiv(body, 16, "Trebuchet MS");
    };
    return Decorator;
}());
exports.Decorator = Decorator;
//# sourceMappingURL=decorator.js.map