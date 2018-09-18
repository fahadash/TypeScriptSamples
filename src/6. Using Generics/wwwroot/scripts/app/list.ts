export class List<TElement> {
    private items: TElement[];

    constructor() {
        this.items = new Array<TElement>();
    }

    add(element : TElement) {
        this.items.push(element);
    }

    toString() {
        let str = "";

        for (let element of this.items) {
            str = str + element.toString() + "<br />";
        }

        return str;
    }
}