/* jshint strict: false, -W117 */
define(function(){
    return {
        name:'device',
        get:function(){
            var deviceType = (navigator.userAgent.match(/iPad/i))  == "iPad" ? "iPad" : 
                             (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : 
                             (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : 
                             (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" :
                             (navigator.userAgent.match(/Window/i)) == "Window" ? "Window" : 
                             "null";
            
            console.log('deviceType: '+ deviceType);
            return deviceType;
        },
        setInfo:function(){
            console.log(this.name+":setInfo");
            var content = '';
            $('#table-info tbody').html(content);

            console.log(this.name+':setInfo:device:'+typeof(device));
            if (typeof(device) !== 'undefined'){

                console.log(this.name+':device:='+typeof(device));

                if (device.platform){
                    console.log(this.name+':device.platform:='+device.platform);
                    content += '<tr><th><h2>Platform</h2></th></tr>';
                    content += '<tr><th>'+device.platform+'</th></tr>';
                }
                if (device.version){
                    console.log(this.name+':device.version:='+device.version);
                    content += '<tr><th><h2>Version</h2></th></tr>';
                    content += '<tr><tail.comh>'+device.version+'</th></tr>';
                }

                if (device.uuid){
                    console.log(this.name+':device.uuid:='+device.uuid);
                    content += '<tr><th><h2>UUID</h2></th></tr>';
                    content += '<tr><th>'+device.uuid+'</th></tr>';
                }

                if (device.model){
                    console.log(this.name+':device.model:='+device.model);
                    content += '<tr><th><h2>Model</h2></th></tr>';
                    content += '<tr><th>'+device.model+'</th></tr>';
                }
                
                if (screen.width && screen.height){
                    console.log(this.name+':screen.width x screen.height(' + screen.width+' x '+screen.height+')');
                    content += '<tr><th><h2>Width x Height</h2></th></tr>';
                    content += '<tr><th>'+screen.width+' X '+screen.height+'</th></tr>';
                }

            content += "<tr><td>&nbsp;<td></tr>";
            content += "<tr><td>&nbsp;<td></tr>";
            content += "<tr><td>&nbsp;<td></tr>";
            }
            $('#table-info tbody').html(content);
        },
    };
});


