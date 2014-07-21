#!/usr/bin/env node

//
// This hook copies various resource files from our version control system directories into the appropriate platform specific location
//


// configure all the files to copy.  Key of object is the source file, value is the destination location.  It's fine to put all platforms' icons and splash screen files here, even if we don't build for all platforms on each developer's box.
var filestocopy = [{
    "project/platform/android/res/drawable/appicon.png": "platforms/android/res/drawable/icon.png"
}, {
    "project/platform/android/res/drawable-hdpi/appicon.png": "platforms/android/res/drawable-hdpi/icon.png"
}, {
    "project/platform/android/res/drawable-ldpi/appicon.png": "platforms/android/res/drawable-ldpi/icon.png"
}, {
    "project/platform/android/res/drawable-mdpi/appicon.png": "platforms/android/res/drawable-mdpi/icon.png"
}, {
    "project/platform/android/res/drawable-xhdpi/appicon.png": "platforms/android/res/drawable-xhdpi/icon.png"
}/* ,{
    "project/platform/android/res/drawable/splash.png": "platforms/android/res/drawable/splash.png"
}, {
    "project/platform/android/res/drawable-hdpi/splash.png": "platforms/android/res/drawable-hdpi/splash.png"
}, {
    "project/platform/android/res/drawable-ldpi/splash.png": "platforms/android/res/drawable-ldpi/splash.png"
}, {
    "project/platform/android/res/drawable-mdpi/splash.png": "platforms/android/res/drawable-mdpi/splash.png"
}, {
    "project/platform/android/res/drawable-xhdpi/splash.png": "platforms/android/res/drawable-xhdpi/splash.png"
}, {
    "project/platform/ios/Resources/icons/icon-72.png": "platforms/ios/YourAppName/Resources/icons/icon-72.png"
}, {
    "project/platform/ios/Resources/icons/icon.png": "platforms/ios/YourAppName/Resources/icons/icon.png"
}, {
    "project/platform/ios/Resources/icons/icon@2x.png": "platforms/ios/YourAppName/Resources/icons/icon@2x.png"
}, {
    "project/platform/ios/Resources/icons/icon-72@2x.png": "platforms/ios/YourAppName/Resources/icons/icon-72@2x.png"
}, {
    "project/platform/ios/Resources/splash/Default@2x~iphone.png": "platforms/ios/YourAppName/Resources/splash/Default@2x~iphone.png"
}, {
    "project/platform/ios/Resources/splash/Default-568h@2x~iphone.png": "platforms/ios/YourAppName/Resources/splash/Default-568h@2x~iphone.png"
}, {
    "project/platform/ios/Resources/splash/Default~iphone.png": "platforms/ios/YourAppName/Resources/splash/Default~iphone.png"
}, {
    "project/platform/ios/Resources/splash/Default-Portrait~ipad.png": "platforms/ios/YourAppName/Resources/splash/Default-Portrait~ipad.png"
}, {
    "project/platform/ios/Resources/splash/Default-Portrait@2x~ipad.png": "platforms/ios/YourAppName/Resources/splash/Default-Portrait@2x~ipad.png"
}, */
];

var fs = require('fs');
var path = require('path');

// no need to configure below
var rootdir = process.argv[2];

filestocopy.forEach(function(obj) {
    Object.keys(obj).forEach(function(key) {
        var val = obj[key];
        var srcfile = path.join(rootdir, key);
        var destfile = path.join(rootdir, val);
        //console.log("copying "+srcfile+" to "+destfile);
        var destdir = path.dirname(destfile);
        if (fs.existsSync(srcfile) && fs.existsSync(destdir)) {
            fs.createReadStream(srcfile).pipe(fs.createWriteStream(destfile));
        }
    });
});
