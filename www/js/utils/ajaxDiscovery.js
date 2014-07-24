define(["utils/pages","utils/ajax","utils/xhrHandler","defaults"],function(o,s,t,e){return{name:"ajaxDiscovery",selector:"#ourDiscoveryClass",options:{count:0,max:3,ajaxURL:e.ourDiscovery(),selector:"#ourDiscoveryClass"},ajaxInitialize:function(){console.log(this.name+":ajaxInitialize"),this.options.ajaxSuccess=this.success,this.options.ajaxError=this.error,s.initialize(this.selector)},load:function(){console.log(this.name+":load"),this.ajaxInitialize(),console.log(this.name+":load:count:="+this.options.count),console.log(this.results),s.load(this,this.options),this.options.count=this.options.count+1},xhrCheck:function(o,s){return console.log(this.name+":xhrCheck"),console.log("<===== XHR ===>"),console.log(JSON.stringify(o)),t.check(o,s)},processData:function(o){console.log("<===== RAW DATA ===>"),console.log(o);var s=$("#content",$(o));console.log("<===== #content ===>"),console.log(s.html()),$(this.selector).html(s.html()),this.hideData(),this.fixImages(this.selector+" img"),$(this.selector).trigger("create")},show:function(){console.log(this.name+":show"),o.show("about")},hideData:function(){$(this.selector+' h2:contains("Download")').hide(),$(this.selector+' table[class="contentTable"]').hide(),$(this.selector+" hr").hide()},fixImages:function(o){console.log(this.name+"fixImages(selector)"),$(o).each(function(){$(this).removeAttr("style"),$(this).addClass("img-responsive");var o=$(this).attr("src"),s=new RegExp("(http|https)://","i");s.test(o)===!1&&(o="http://fbcvr.com/"+o,$(this).attr("src",o))})},hideElements:function(o){$(o).each(function(){$(this).hide()})},success:function(o,s,t){console.log("success"),console.log(JSON.stringify(this._this.options)),console.log("selector:="+this._this.options.selector),this._this.xhrCheck(t,this._this.options.selector)===!0&&(console.log("data"),console.log(o),console.log("status:"),console.log(s),this._this.processData(o))},error:function(o){console.log("ajax error handler"),this._this.xhrCheck(o,this._this.options.selector)===!0&&(console.log(JSON.stringify(this._this.options)),this._this.load(this._this.options))},maxCount:function(){alert("handle bad results")}}});