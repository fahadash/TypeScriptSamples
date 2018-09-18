export class Product {
    price: number;
    title: string;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }

    toString() {
        return this.title + " - only $" + this.price;
    }
}