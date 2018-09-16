/// <reference path="app.d.ts" />

function app() {
    let body = <HTMLDivElement> document.getElementById("body");

    setText(body, "This text is being set by a external javascript method that is used by typescript without even seeing the shape ot it. This was only made possible through typings");
} 