/* jshint strict: false, -W117 */
define(['utils/cssLoader',
        'utils/error-404',
        'utils/no-internet',
        'utils/pages'],
       function(cssLoader,error404,noInternet,pages){
    return {
        name:'ajax',
        initialize:function(s){
            cssLoader.initialize();
            error404.initialize();
            noInternet.initialize();
            
        },
        ajaxType:function(){
            console.log(this.name+':ajaxType:=get "use { ajaxType: value } to override"');
            return 'get';
        },
        ajaxURL:function(){
            console.log(this.name+':ajaxURL:REQUIRED { url: value }');
            return '';
        },
        ajaxDataType:function(){
            console.log(this.name+':ajaxDataType:=html "use { datatype: value } to override"');
            return 'html';
        },
        ajaxSuccess:function(data,status,xhr){
            console.log(this.name+':ajaxSuccess:usage { ajaxSuccess: function(data,status,xhr) }');
            alert('success');
            return false;
        },
        ajaxError: function(xhr, status, error){
            console.log(this.name+':ajaxError:usage { ajaxError: function(xhr, status, error) }');
            alert('error');
            return false;
        },
        load:function(_this,options){
            console.log(this.name+':load(options)');
            console.log(this.name+':count:'+options.count);
            var _seed = Math.floor((Math.random()*1000000)+1);        
            pages.show('cssLoader');
            console.log(this.name+':$.ajax');
                $.ajax({
                    type: options.ajaxType || this.ajaxType(),
                    ifModified: true, // added to prevent isp caching
                    url: options.ajaxURL || this.ajaxURL(),
                    dataType: options.ajaxDataType || this.ajaxDataType(),
                    para: _seed,
                    cache: false,
                    options:options,
                    _this:_this,
                    success: options.ajaxSuccess || this.ajaxSuccess,
                    error: options.ajaxError || this.ajaxError,
                });
        },
    };
});