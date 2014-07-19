require.config({
    // Nice not to inline/minify things for debugging
    optimize: "none",
        
    baseUrl: 'js',
        
    paths: {
        "domReady": "libs/domReady",        
        "jquery":"libs/jquery-2.1.1.min",
        "underscore":"libs/underscore.min",
        "fastclick":"libs/fastclick",
        "bootstrap":"libs/bootstrap.min"
    },
    shim: {
        "underscore": {
            deps: [],
            export: "_"
        },
        "jquery": {
            deps: [],
            export: "$"
        },
        "bootstrap": {
			deps: ['jquery'],
            export: "$.fn.popover"
        }
        
    }
});

require(["./app/app.js"]);
