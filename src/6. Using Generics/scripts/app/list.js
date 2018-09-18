"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var List = /** @class */ (function () {
    function List() {
        this.items = new Array();
    }
    List.prototype.add = function (element) {
        this.items.push(element);
    };
    List.prototype.toString = function () {
        var str = "";
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var element = _a[_i];
            str = str + element.toString() + "<br />";
        }
        return str;
    };
    return List;
}());
exports.List = List;
//# sourceMappingURL=list.js.map