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
    $('.sharedHeader').load('header.html',function(){$(this).trigger('create')});
    $('.sharedFooter').load('footer.html',function(){$(this).trigger('create')});
});

/**
    * General initialization.
*/
$.when(jqmReady, pgReady).then(function() {
    //Initialization code here
    if(app.callback) {
        console.log('app.callback');
        app.callback();
    }

    console.log("Frameworks ready.");
/*
    //Google maps API initialisation
    var element = document.getElementById("map");

    var FBCVR = new google.maps.LatLng(33.7334754, -84.9582768);

    //Define the properties of the OSM map to be displayed
    var map = new google.maps.Map(element, {
        center: FBCVR,
        zoom: 14,
//        mapTypeId: "OSM",
        mapTypeControl: false,
        streetViewControl: false
    });

    var mFBCVR = new google.maps.Marker({
        position: FBCVR,
        map: map
    });
*/
 });
