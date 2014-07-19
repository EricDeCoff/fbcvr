/* jshint strict: false, -W117 */
require(['require','bootstrap','jquery','underscore','fastclick','defaults',
         'utils/navbar-top','utils/container','utils/pages',
         'utils/home',
         'utils/about',
         'utils/staff',
         'utils/share',
         'utils/windows'],
        
        function(require,bootstrap,$,_,fastclick,defaults,
        navbarTop,container, pages, home, about, staff, share,
        windows
        ){
    //         
    // validate requirejs loading correctly
    //
    console.log('config.js');
    console.log('$: '+ typeof $);
    console.log('_: '+ typeof _);
    console.log('require: ' + typeof require);

    var app = {
        name:"app",
        initialize: function(){
            console.log(this.name+":initialize");
            fastclick.attach(document.body);
            
            navbarTop.initialize();
/*            
            console.log(this.name+':initialize:load:about:page');
            $('#about').load('./pages/about.html',function(){$(this).trigger('create');  });
*/            
            
            home.initialize();
            share.initialize();
            
//            about.initialize();
//            staff.initialize();
                        
        },
        show:function(value){
            pages.show(value);
        }
    };

    // added for phonegap
    document.addEventListener("deviceready",onDeviceReady,false);
    
    function onDeviceReady(){
        app.initialize();
        
        console.log('domReady Section');
        require(['domReady!'],function(){
            console.log('domReady');
            navbarTop.setPhone(defaults.phone());
            navbarTop.setTitle(defaults.title());
            
            $('#navbarMap').on('click',function(e){
                e.preventDefault();
                windows.spinner(e.currentTarget.id,2000,navbarTop.getDirections);                
            });
            
            $('#navbarHome').on('click',function(e){
                e.preventDefault();
                $('button[data-toggle]').click(); 
                navbarTop.show('home');
            });
            
            $('#navbarAbout').on('click',function(e){
                e.preventDefault();
                $('button[data-toggle]').click(); 
                about.initialize();
            });
            
            $('#navbarStaff').on('click',function(e){
                e.preventDefault();
                $('button[data-toggle]').click(); 
                staff.initialize();
            });
            
            $('#navbarShare').on('click',function(e){
                e.preventDefault();
                $('button[data-toggle]').click();
                share.show();
            });
            
            $('#btnVimeo').on('click',function(e){
                e.preventDefault();
                windows.load(e.currentTarget,
                'http://vimeo.com/fbcvr/videos');
            });

            $('#btnFacebook').on('click',function(e){
                e.preventDefault();
                windows.load(e.currentTarget,
                'https://www.facebook.com/pages/First-Baptist-Church-of-Villa-Rica/133522260025002');
            });
            
            $('#btnWilliams1010').on('click',function(e){
                e.preventDefault();
                windows.load(e.currentTarget,
                'http://www.twitter.com/williams1010');
            });
            
            $('#btnAustinWilliamsC').on('click',function(e){
                e.preventDefault();
                windows.load(e.currentTarget,
                'https://www.twitter.com/austinwilliamsc');
            });
            
        });  
    }
});
