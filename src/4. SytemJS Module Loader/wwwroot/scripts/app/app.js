"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var decorator_1 = require("./decorator");
function app() {
    var title = document.getElementById("title");
    var body = document.getElementById("body");
    var decorator = new decorator_1.Decorator();
    decorator.Apply(title, body);
}
exports.app = app;
//# sourceMappingURL=app.js.map