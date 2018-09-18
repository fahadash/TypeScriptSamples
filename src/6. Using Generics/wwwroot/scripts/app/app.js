"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("./product");
var list_1 = require("./list");
var App = /** @class */ (function () {
    function App() {
        this.listOfProducts = new list_1.List();
        this.listOfProducts.add(new product_1.Product("Bean Bag", 13.99));
        this.listOfProducts.add(new product_1.Product("Juno Selfie Stick", 3.49));
        this.listOfProducts.add(new product_1.Product("Gloninum Premium Novelty Football with air pump", 24.99));
        this.listOfProducts.add(new product_1.Product("Bosch 3-minute Ironing board", 8.79));
        this.listOfProducts.add(new product_1.Product("Yaletsky FreshAir Breathable insole", 2.99));
    }
    App.prototype.run = function () {
        var pageTitle = document.getElementById("title");
        var description = document.getElementById("description");
        var typeDiv = document.getElementById("type");
        var listDiv = document.getElementById("list");
        pageTitle.innerHTML = "Welcome to Using Generics sample";
        description.innerHTML = "In this sample we are going to explore the use of generics. A List<T> object is created with type Product as generic argument.";
        this.format(pageTitle, "Verdana", 36);
        this.format(description, "Trebuchet MS", 16);
        this.format(typeDiv, "Comic Sans Serif", 20);
        typeDiv.innerHTML = "The type of our generic object is : List&lt;Product&gt;";
        listDiv.innerHTML = "The contents of the generic List are : <br /> " + this.listOfProducts.toString();
        this.format(listDiv, "Trebuchet MS", 20);
    };
    App.prototype.format = function (div, font, size) {
        div.style.fontFamily = font;
        div.style.fontSize = size.toString() + "px";
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map