var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.Run = function () {
        $("#title").html("Using jQuery sample")
            .css({
            "font-family": "Trebuchet MS",
            "font-size": "36px"
        });
        $("#dialog").dialog();
    };
    return App;
}());
//# sourceMappingURL=app.js.map