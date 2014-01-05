/**
 * Created by Eric R DeCoff on 1/2/14.
 */
function getDirections(address){
    console.log('getDirections');
    window.plugins.webintent.startActivity({
            action: WebIntent.ACTION_VIEW,
            url: 'geo:0,0?q=' + address},
        function() {},
        function(e) {alert('Failed to open URL via Android Intent');}
    );
};
