var Decorator = /** @class */ (function () {
    function Decorator() {
    }
    Decorator.prototype.Apply = function (title, body) {
        title.innerHTML = "Welcome to Multiple Files Sample";
        body.innerHTML = "This sample demostrates how multiple typescript files work together to make up an application";
        var styler = new Styler();
        styler.styleDiv(title, 35, "Verdana");
        styler.styleDiv(body, 16, "Trebuchet MS");
    };
    return Decorator;
}());
//# sourceMappingURL=decorator.js.map