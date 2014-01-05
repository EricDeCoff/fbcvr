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

var jqmReady = $.Deferred();
var pgReady = $.Deferred();
var deviceInfo;

var app = {
    //Callback for when the app is ready
    callback: null,
    // Application Constructor
    initialize: function(callback) {
        this.callback = callback;
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
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        // The scope of 'this' is the event, hence we need to use app.
        app.receivedEvent('deviceready');
    },
	zoomScreen: function() {
		console.log('zoomScreen');
		var designHeight = 1280;
		var designWidth = 720;
		
		var docHeight=window.outerHeight;
		var docWidth=window.outerWidth;
		
		if (docWidth != designWidth){
			var scaleX = docWidth / designWidth;
			var scaleY = docHeight / designHeight;
			if (scaleX < scaleY) {
				$('body').css('zoom', scaleX);
				scaleChange = scaleX;
			} else {
				$('body').css('zoom', scaleY);
				scaleChange = scaleY;
			}			
		}
	},
    receivedEvent: function(event) {
        switch(event) {
            case 'deviceready':
                console.log('deviceready');
                pgReady.resolve();
            break;
         }
    }
};

$(document).on("pageinit", function(event, ui) {
    console.log('pageinit');
    jqmReady.resolve();
    $('.sharedHeader').load('header.html',function(){$(this).trigger('create');});
    $('.sharedFooter').load('footer.html',function(){$(this).trigger('create');});
});

/**
    * General initialization.
*/
$.when(jqmReady, pgReady).then(function() {
    console.log("Frameworks ready.");
    //Initialization code here
    if(app.callback) {
        console.log('app.callback');
        app.callback();
    }
    console.log('hide [data-page]');
    $('div[data-page]').hide();
    console.log('show [data-page="home"]');
    $('div[data-page="home"]').show();
    
    document.getElementById("dPlatform").innerHTML = device.platform;
    document.getElementById("dVersion").innerHTML = device.version;
    document.getElementById("dUUID").innerHTML = device.uuid;
    document.getElementById("dName").innerHTML = device.name;
    document.getElementById("dWidth").innerHTML = screen.width;
    document.getElementById("dHeight").innerHTML = screen.height;
    
	app.zoomScreen();
 });
