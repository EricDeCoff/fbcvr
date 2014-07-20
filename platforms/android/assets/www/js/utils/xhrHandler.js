/* jshint strict: false, -W117 */
define(['utils/pages'],function(pages){    
    return {
        name:'xhrHandler',
        check:function(xhr,selector,options){
            console.log(this.name+":check");
            console.log('<===== XHR ===>');
            console.log(JSON.stringify(xhr));
            if (xhr.status === 0){
                pages.show('no-internet');
                return false;
            }
            if (xhr.responseText.match(/content=\"0;url=/g)){
                var cloned = $('#error-404 table').clone();
                $(selector).html(cloned.html());
                $(selector).find('#error-404').show();
                $(selector+' .span-404')
                    .html('HTTP 404 - <a href="'+options.ajaxURL+'">'+options.ajaxURL+'</a>');            
                pages.show('about');
                return false;
            } 
            return true;
        }
    };
});