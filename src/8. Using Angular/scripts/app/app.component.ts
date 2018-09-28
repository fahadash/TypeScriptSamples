import { Component } from "@angular/core";

@Component({
    selector: 'my-component',
    template: '<div><h1>{{title}}</h1><p>{{description}}</p></div>'
})
export class AppComponent { 
    title: string;
    description: string;

    constructor() {
        this.title = "Angular Sample";
        this.description = "This sample demonstrates how you can use TypeScript to write Angular modules and their components";
    }
}  