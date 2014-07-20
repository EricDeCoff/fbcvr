/* jshint strict: false, -W117 */
/* jshint multistr: true */
define(['utils/pages','utils/ajaxMission','utils/ajaxDiscovery','utils/ajaxDevelopment','utils/deviceType'],
       function(pages,ajaxMission,ajaxDiscovery,ajaxDevelopment,deviceType){

//        var media = null;

        var about = {
            name:'about',
            delay:1000,
            initialize:function(){
                console.log(this.name+':initialize');
                $('#about').load('./pages/about.html',function(){
                    $(this).trigger('create'); 
                });
                this.load();
//                deviceType.setInfo();
            },
            load: function(){
                console.log(this.name+':load');

                ajaxMission.load();
                ajaxDiscovery.load();
                ajaxDevelopment.load();
                
            }
        };
    
    return about;
});