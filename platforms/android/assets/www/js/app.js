define(function (require) {
    var app = {
 
        initialize: function() {
            console.log('Initailize');
            this.bindEvents();
        },
 
        bindEvents: function() {
            document.addEventListener('deviceready', this.onDeviceReady, false);
        },
 
        onDeviceReady: function() {
            app.receivedEvent('deviceready');
        },
 
        receivedEvent: function(id) {
            var parentElement = document.getElementById(id);
            var listeningElement = parentElement.querySelector('.listening');
            var receivedElement = parentElement.querySelector('.received');
 
            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');
 
            console.log('Received Event: ' + id);
        }
    };
    return app;
});
