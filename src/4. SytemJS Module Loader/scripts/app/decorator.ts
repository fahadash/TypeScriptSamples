import { Styler } from "./styler";

export class Decorator {
    Apply(title: HTMLDivElement, body: HTMLDivElement) {
        title.innerHTML = "Welcome to SystemJS Module Loader Sample";
        body.innerHTML = "This sample demostrates how multiple typescript files work together to make up an application and you don't need to include multiple files in your page, you use SystemJS to load the module.";

        let styler = new Styler();
        styler.styleDiv(title, 35, "Verdana");
        styler.styleDiv(body, 16, "Trebuchet MS");
    }
}   