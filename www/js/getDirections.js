/**
 * Created by Eric R DeCoff on 1/2/14.
 */
function getDirections(address){
    intel.xdk.device.launchExternal("http://maps.google.com/maps?q=1483 Hwy 78 W, Villa Rica, GA");
    /*
    window.plugins.webintent.startActivity({
            action: WebIntent.ACTION_VIEW,
            url: 'geo:0,0?q=' + address},
        function() {},
        function(e) {alert('Failed to open URL via Android Intent');}
    );
    */
};
