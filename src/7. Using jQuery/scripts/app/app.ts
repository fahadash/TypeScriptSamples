

class App {
    Run() {
        $("#title").html("Using jQuery sample")
            .css({
                "font-family": "Trebuchet MS",
                "font-size": "36px"
            }); 

        $("#dialog").dialog();
    }
}