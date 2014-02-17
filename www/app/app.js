/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*jshint -W117 */
var jqmReady = null;
var pgReady = null;

jqmReady = $.Deferred();
pgReady = $.Deferred();

var _name = "First Baptist Church of Villa Rica";
var _address = "1483 Hwy 78 W, Villa Rica, GA";
var _web = "http://www.fbcvr.com";
var _cHeight = 0;
var c_Width = 0;

var app = {
    //Callback for when the app is ready
    callback: null,
    // Application Constructor
    initialize: function(callback) {
        console.log('initialize');
        this.callback = callback;
        $('#navbar-top').load('./pages/navbar-top.html',function(){$(this).trigger('create');});
        $('#home').load('./pages/home.html',function(){$(this).trigger('create');});
        $('#about').load('./pages/about.html',function(){$(this).trigger('create');});
        $('#about').hide();
        
        var browser = document.URL.match(/^https?:/);
        if(browser) {
            console.log("Is web.");
            //In case of web we ignore PG but resolve the Deferred Object to trigger initialization
            pgReady.resolve();
        } else {
            console.log("Is not web.");
            this.bindEvents();
        }
    },
    name: function(){
        return _name;
    },
    address: function(){
        return _address;
    },
    web:function(){
        return _web;
    },
    geo: function(){
        return "geo:0,0?q='"+app.address+"'";
    },
    btnLoading: function($id,$href){
        var $btn = $($id);
        var $html = $btn.html();
        $btn.html("<i class='fa fa-spinner fa-3x'></i><br/>Loading");

        setTimeout(function(){
            window.location.href = $href;
        },1000);
        
        setTimeout(function($btn,$html){
            $btn.html($html);
        },3000);
        
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('pause',function(){ navigator.app.exitApp();});
    },
    onDeviceReady: function() {
        // The scope of 'this' is the event, hence we need to use app.
        app.receivedEvent('deviceready');
    },
    setDeviceInfo: function(){
        var content = '';
        $('#table-info tbody').html(content);
        
        if (typeof(device) !== 'undefined'){
            
        console.log('setDeviceInfo.typeof(device): '+typeof(device));

        if (device.platform){
            content += '<tr><th><h2>Platform</h2></th></tr>';
            content += '<tr><th>'+device.platform+'</th></tr>';
        }
        if (device.version){
            content += '<tr><th><h2>Version</h2></th></tr>';
            content += '<tr><tail.comh>'+device.version+'</th></tr>';
        }
        
        if (device.uuid){
            content += '<tr><th><h2>UUID</h2></th></tr>';
            content += '<tr><th>'+device.uuid+'</th></tr>';
        }
        
        if (device.model){
            content += '<tr><th><h2>Model</h2></th></tr>';
            content += '<tr><th>'+device.model+'</th></tr>';
        }
        if (screen.width && screen.height){
            content += '<tr><th><h2>Width x Height</h2></th></tr>';
            content += '<tr><th>'+screen.width+' X '+screen.height+'</th></tr>';
        }
        
        content += "<tr><td>&nbsp;<td></tr>";
        content += "<tr><td>&nbsp;<td></tr>";
        content += "<tr><td>&nbsp;<td></tr>";
        }
        $('#table-info tbody').html(content);
    },
    getDeviceType:function(){
    var deviceType = (navigator.userAgent.match(/iPad/i))  == "iPad" ? "iPad" : 
                     (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : 
                     (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : 
                     (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" :
                     (navigator.userAgent.match(/Window/i)) == "Window" ? "Window" : 
                     "null";
    return deviceType;
    },
/*    
    showGoogleMaps:function(){
        console.log('showGoogleMaps');
        var lat = 33.7335534;
        var lng = -84.9583969;

       
        var header = $("div[data-role='header']").outerHeight();
        var footer = $("div[data-role='footer']").outerHeight();
        
        var cHeight = 400;
        switch(window.orientation){
                case 90:
                case -90:
                    cHeight = screen.height;
                    break;
                default:
                    cHeight = screen.height;
                    break;
        }

        var _cHeight = cHeight - header - footer - 30;
        
//        $('#myStreetView').css('top', "0px");
        $('#content-directions').css('height',_cHeight+"px");
        
        var msv = document.getElementById('content-directions');
        
        var panorama = new google.maps.StreetViewPanorama(msv);
        var sv = new google.maps.StreetViewService();
        sv.getPanoramaByLocation(
            new google.maps.LatLng(lat,lng), 
            50, 
            function (data, status) {
                if (status == google.maps.StreetViewStatus.OK) {
                    panorama.setPano(data.location.pano);
                    panorama.setPov({ heading: 360, pitch: 5, zoom: 2 });
                    panorama.setVisible(true);
                }
            }
        );        
        app.showPage('directions');
    },
*/    
    getDirections:function($id){
        console.log('app.getDirections');

        var _geo = app.getMapPage(app.getDeviceType());
        setTimeout(window.open(encodeURI(_geo),"_blank",'location=no,EnableViewPortScale=yes'),2000);        
//        setTimeout(showMap(_geo),3000);
    },
    getMapPage:function(_type){
        switch(_type){
                case "Android":
                    return "geo:0,0?q='"+app.address()+"'";
                default:
                    return 'https://maps.google.com/maps?q='+app.address();
        }
    },
    showMap: function(_geo){
        var ref = app.window.open(encodeURI(_geo),"_blank",'location=no,EnableViewPortScale=yes');        
    },
/*    
    addGeoListeners:function(ref){
        ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
        ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
        ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
        ref.addEventListener('exit', function(event,ref) { alert(event.type); app.removeGeoListeners(ref); });
    },
    removeGeoListeners:function(ref){
        ref.removeEventListener('loadstart');
        ref.removeEventListener('loadstop');
        ref.removeEventListener('loaderror');
        ref.removeEventListener('exit');
    },
*/    
    showPage: function(page){
        console.log('showPage('+page+')');
        $('div[data-page]').hide();

        switch(page){
            case 'info':
                  app.setDeviceInfo();
                break;
        }
        $('div[data-page="'+page+'"]').show();
/*        
        var viewPortHeight = $(window).height();
        var header = $("div[data-role='header']").height();
        var footer = $("div[data-role='footer']").height();
//        var content = $("div[data-role='content']:visible:visible");
*/        
//        $('#content-'+page).css("top", (header+20)+"px");
    },
    tellSomeone: function (subject,body){
        console.log('tellSomeone');
        var index = 0;
        switch($('#content-share input[type=radio]:checked').val()){
            case 'text':
                var _sms = 'sms:?body='+subject+"%0A"+body;
                var refText = window.open(_sms,"_blank",false);
//                window.location('sms:?body='+subject+"%0A"+body);
//                navigator.app.appExit();
                break;
            case 'email':
                var _email = 'mailto:?subject='+subject+'&body='+body;
                var refEmail = window.open(_email,"_blank",false);
//                navigator.app.appExit();
                break;
        }
    /*
    var extras = {};
    extras[WebIntent.EXTRA_SUBJECT] = subject;
    extras[WebIntent.EXTRA_TEXT] = body;
    window.plugins.webintent.startActivity({
            action: WebIntent.ACTION_SEND,
            type: 'text/plain',
            extras: extras
        },
        function() {},
        function() {
            alert('Failed to send email via Android Intent');
        }
    );
    */
    },
    getRealContentHeight: function() {
        var header = $.mobile.activePage.find("div[data-role='header']");
        var footer = $.mobile.activePage.find("div[data-role='footer']");
        var content = $.mobile.activePage.find("div[data-role='content']:visible:visible");
        
        app._cHeight = window.outerHeight();
        app._cWidth = window.outerWidth();
        
        var viewport_height = app._cHeight;

        var content_height = viewport_height - header.outerHeight() - footer.outerHeight();
        if((content.outerHeight() - header.outerHeight() - footer.outerHeight()) <= viewport_height) {
            content_height -= (content.outerHeight() - content.height());
        } 
        return content_height;
    },
    receivedEvent: function(event) {
        switch(event) {
            case 'deviceready':
                console.log('deviceready');
                pgReady.resolve();
            break;
         }
    },
    intro: function(){
        var tl = new TimelineLite(),
            iFirst = $('#introFirst'),
            iBaptist = $('#introBaptist'),
            iChurch = $('#introChurch');
            iOf = $('#introOf');
            iCity = $('#introCity');
        TweenLite.set([iFirst,iBaptist,iChurch,iOf,iCity], {autoAlpha:0, scale: 0});
        $('#content-intro').show();
        tl.fromTo([iFirst,iBaptist,iChurch,iOf,iCity], 3, 
            {
                autoAlpha:1, 
                scale: 0.1, 
                y:"0", 
                z:0.1
            },
            {
                scale: 1.0, 
                ease:SlowMo.ease.config(0.5, 0.4)
            }, 0.3
        );
        tl.eventCallback("onComplete", function() {
            TweenLite.set([iFirst,iBaptist,iChurch,iOf,iCity], {autoAlpha:0});
            var header = $("div[data-role='header']");
            var footer = $("div[data-role='footer']");
            var spinner = $("div[data-page='spinner']");
            header.show();
            footer.show();
            spinner.hide();
            app.showPage('about');
        });        
    }
};

/**
    * General initialization.
*/
$.when(pgReady).then(function() {
    console.log("Frameworks ready.");
    
    //Initialization code here
    if(app.callback) {
        console.log('app.callback');
        app.callback();
    }
    
    
//    alert(app.getDeviceType());

//    navigator.splashscreen.hide();
//
//    Bad idea initialize this in the html and show on create
//    
//    console.log('hide [data-page]');
//    $('div[data-page]').hide();
//    console.log('show [data-page="home"]');
//    $('div[data-page="home"]').show();
//    app.intro();
    /*
    setTimeout(function () {
        var header = $("div[data-role='header']");
        var footer = $("div[data-role='footer']");
        var spinner = $("div[data-page='spinner']");
        header.show();
        footer.show();
        spinner.hide();
        app.showPage('home');
    }, 1000);
    */    
});