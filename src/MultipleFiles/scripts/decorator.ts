class Decorator {
    Apply(title: HTMLDivElement, body: HTMLDivElement) {
        title.innerHTML = "Welcome to Multiple Files Sample";
        body.innerHTML = "This sample demostrates how multiple typescript files work together to make up an application";

        let styler = new Styler();
        styler.styleDiv(title, 35, "Verdana");
        styler.styleDiv(body, 16, "Trebuchet MS");
    }
}   