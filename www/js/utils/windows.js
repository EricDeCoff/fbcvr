/* jshint strict: false, -W117 */
/* jshint multistr: true */
define(['utils/cssLoader'],
       function(cssLoader){
           
    var windows = {
        name:'facebook',
        selector:'#navbarFacebook',
        load:function(btn,href){
            console.log(this.name+':initialize');
            /*
            var $btn = $(btn);
            var $html = $btn.html();
            
            $btn.html("<i class='fa fa-spinner fa-3x fa-spin'></i><br/>Loading");
            */
            var $href = href;
            var ref = null;
            
            cssLoader.initialize();
            cssLoader.show();
            
            setTimeout(function(){
//                $btn.html($html);
                // require inAppBrowser pluggin 
                setTimeout(function(){
                    ref =window.open($href,"_blank",'location=no,EnableViewPortScale=yes');           
                    ref.addEventListener('exit',function(e){
                        $('div[data-page]').hide();
                        $('div[data-page="home"]').show();
                    });
//                window.open($href, '_blank', 'location=yes');
//                window.location.href = $href;
                },500);
            },100);        
        },
        spinner:function(name,delay,fn){
            var $btn = $('#'+name);
            var $html = $btn.html();
            var $fn = fn;
            
            $btn.html("<i class='fa fa-spinner fa-3x fa-spin'></i><br/>Loading");
            setTimeout(function(){
                $btn.html($html);
                $('button[data-toggle]').click();                 
                $fn();
            },delay);
            
        }
    };
        
           
    return windows;
});
           
/*        
$.when(app.staffLoaded).then(function(){
    console.log("StaffLoaded_Deferred");
    staff.loadInnerPages();
});
*/
        