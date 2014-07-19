/* jshint strict: false, -W117 */
define(function(){
    return {
        name:"pages",
        show: function(page){
                console.log('showPage('+page+')');
                $('div[data-page]').hide();

                switch(page){
                    case 'info':
                          app.setDeviceInfo();
                        break;
                    case 'no-internet':
                        break;
                }
                $('div[data-page="'+page+'"]').show();
            }
    };
});
