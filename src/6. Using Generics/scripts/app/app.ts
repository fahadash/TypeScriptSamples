import { Product } from "./product";
import { List } from "./list";

export class App {

    listOfProducts : List<Product>
    constructor() {
        this.listOfProducts = new List<Product>();

        this.listOfProducts.add(new Product("Bean Bag", 13.99));
        this.listOfProducts.add(new Product("Juno Selfie Stick", 3.49));
        this.listOfProducts.add(new Product("Gloninum Premium Novelty Football with air pump", 24.99));
        this.listOfProducts.add(new Product("Bosch 3-minute Ironing board", 8.79));
        this.listOfProducts.add(new Product("Yaletsky FreshAir Breathable insole", 2.99));
    }

    run() {
        let pageTitle = <HTMLDivElement>document.getElementById("title");
        let description = <HTMLDivElement>document.getElementById("description");
        let typeDiv = <HTMLDivElement>document.getElementById("type");
        let listDiv = <HTMLDivElement>document.getElementById("list");

        pageTitle.innerHTML = "Welcome to Using Generics sample";
        description.innerHTML = "In this sample we are going to explore the use of generics. A List<T> object is created with type Product as generic argument."

        this.format(pageTitle, "Verdana", 36);
        this.format(description, "Trebuchet MS", 16);

        this.format(typeDiv, "Comic Sans Serif", 20);
        typeDiv.innerHTML = "The type of our generic object is : List&lt;Product&gt;";

        listDiv.innerHTML = "The contents of the generic List are : <br /> " + this.listOfProducts.toString();

        this.format(listDiv, "Trebuchet MS", 20);
    }

    private format(div: HTMLDivElement, font: string, size: number) {
        div.style.fontFamily = font;
        div.style.fontSize = size.toString() + "px";
    }

}