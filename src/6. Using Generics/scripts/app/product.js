"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(title, price) {
        this.title = title;
        this.price = price;
    }
    Product.prototype.toString = function () {
        return this.title + " - only $" + this.price;
    };
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map