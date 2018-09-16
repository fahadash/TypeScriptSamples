class Styler {
    styleDiv(div: HTMLDivElement, fontSize: number, fontFamily: string) {
        div.style.fontSize = fontSize.toString() + "px";
        div.style.font = fontFamily;
    } 
}