"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Styler = /** @class */ (function () {
    function Styler() {
    }
    Styler.prototype.styleDiv = function (div, fontSize, fontFamily) {
        div.style.fontSize = fontSize.toString() + "px";
        div.style.font = fontFamily;
    };
    return Styler;
}());
exports.Styler = Styler;
//# sourceMappingURL=styler.js.map