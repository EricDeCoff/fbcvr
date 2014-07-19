/* jshint strict: false, -W117 */
define(['utils/mapType'],function(mapType){    
    return {
        name:'directions',
        get:function(){
            console.log(this.name+':get');
            var ref = null;
            var _geo = mapType.get();
            console.log(this.name+":_geo:="+_geo);
//            setTimeout(function(){
                if (_geo.substr(0,4) === 'geo:'){
                    window.location.href = _geo;
                }else{
                    
                    ref = window.open(encodeURI(_geo),"_blank",'location=no,EnableViewPortScale=yes');
                }
//            },500);
        }
    };
});