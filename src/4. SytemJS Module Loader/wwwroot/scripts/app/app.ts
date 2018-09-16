import { Decorator } from "./decorator";


export function app() {
    let title = <HTMLDivElement>document.getElementById("title");
    let body = <HTMLDivElement>document.getElementById("body");

    let decorator = new Decorator();

    decorator.Apply(title, body); 
}