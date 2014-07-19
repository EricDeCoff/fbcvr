/* jshint strict: false, -W117 */
define(['defaults','utils/deviceType'],function(defaults,deviceType){
    return {
        name:'mapType',
        get:function(){ 
            switch(deviceType.get()){
                    
                    case "Android":
                        console.log(this.name+': (Android)');
                        return "geo:0,0?q='"+defaults.address()+"'";
                    default:
                        console.log(this.name+': (default)');                    
                        return 'http://maps.google.com/maps?q='+defaults.address();
            }
        }
    };
});