/* jshint strict: false, -W117 */
/* jshint multistr: true */
define(['utils/pages', 'utils/ajax', 'utils/xhrHandler', 'utils/deviceType'], 
       function(pages, ajax, xhrHandler, deviceType){
    var count = 0;
    var results = null;
    return {
        name:"ajaxStaff",
        url:'http://www.ericdecoff.com',
        selector:'#ourStaff',
        options:{ 
            count: 0, 
            max: 3,
            ajaxURL:'http://fbcvr.com/litesite.cfm?id=2001',
            selector:'#ourStaff'
        },
        ajaxInitialize:function(){
            console.log(this.name+":ajaxInitialize");            
            // add success handler
            // add error handler
            this.options.ajaxSuccess = this.success;
            this.options.ajaxError = this.error;
            ajax.initialize(this.selector);
        },
        load:function(){
            console.log(this.name+":load");
            this.ajaxInitialize();
            console.log(this.name+':load:count:='+this.options.count);
            console.log(this.results);
            ajax.load(this,this.options);
            this.options.count = this.options.count+1;
        },
        xhrCheck:function(xhr,selector){
            console.log(this.name+":xhrCheck");
            console.log('<===== XHR ===>');
            console.log(JSON.stringify(xhr));
            
            return xhrHandler.check(xhr,selector);
        },
        
        processData:function(data){
            console.log('<===== RAW DATA ===>');
            console.log(data);

            var _data = $("#content",$(data));
            console.log('<===== ' + '#content'+ ' ===>');
            console.log(_data.html());

            $(this.selector).html(_data.html());
            
            this.hideData();
            
            this.fixImages(this.selector+' img');            

            $(this.selector).trigger('create');
            
            this.show();
        },
        show:function(){
            console.log(this.name+":show");
            pages.show('staff');
        },
        hideData:function(){
            $(this.selector + ' h2:contains("Download")').hide();            
            $(this.selector +' table[class="contentTable"]').hide();
            $(this.selector+ ' hr').hide();
        },
        fixImages:function(selector){
            console.log(this.name+'fixImages(selector)');
            $(selector).each(function(e){
//                $(this).removeAttr('style');
//                $(this).addClass('img-responsive');
                
                var src = $(this).attr('src');
                var re = new RegExp("(http|https)://","i");
                if (re.test(src) === false){
                    src = 'http://fbcvr.com/'+src;
                    $(this).attr('src',src);                    
                }
            });
        },
        hideElements:function(selector){
            $(selector).each(function(e){
                $(this).hide();
                
            });            
        },
        success:function(data,status,xhr){
            console.log('success');
            console.log(JSON.stringify(this._this.options));
            console.log('selector:='+this._this.options.selector);
            if (this._this.xhrCheck(xhr,this._this.options.selector) === true){
                console.log('data');
                console.log(data);
                console.log('status:');
                console.log(status);
                this._this.processData(data);
            }
        },
    
        error: function(xhr, status, error){
            console.log('ajax error handler');
            if (this._this.xhrCheck(xhr,this._this.options.selector) === true){
                console.log(JSON.stringify(this._this.options));
                this._this.load(this._this.options);
            }
        },
        maxCount:function(){
            alert('handle bad results');
        }
    };
});
