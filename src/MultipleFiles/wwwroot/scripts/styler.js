var Styler = /** @class */ (function () {
    function Styler() {
    }
    Styler.prototype.styleDiv = function (div, fontSize, fontFamily) {
        div.style.fontSize = fontSize.toString() + "px";
        div.style.font = fontFamily;
    };
    return Styler;
}());
//# sourceMappingURL=styler.js.map