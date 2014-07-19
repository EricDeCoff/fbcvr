/* jshint strict: false, -W117 */
define(['utils/pages','utils/divExists','utils/directions'],
       function(pages,divExists,directions){    
    return {
        id:'navbar-top',
        url:'./pages/navbar-top.html',
        name:'navbarTop',        
        initialize:function(){
            console.log(this.name+':initialize');
            if (divExists.check(this.id) !== true){
                this.createDiv();
            }
            this.populateDiv();
        },
        createDiv: function(){
            console.log(this.name+':createDiv');
            var div = document.createElement('div');
            
            div.id = this.id;
            
            this.insertDiv(div);
        },
        insertDiv: function(div){
            console.log(this.name+':insertDiv');
            document.body.insertBefore(div, document.body.firstChild);
        },
        populateDiv: function(){
            console.log(this.name+':populateDiv');
            $('#'+this.id).load(this.url,function(){
                $(this).trigger('create');  
            });
        },
        getDirections:function(){
            console.log(this.name+':directions');
            directions.get();
        },
        setPhone:function(number){
            console.log(this.name+':setPhone:number:='+number);
            $('#aPhone').attr('href','tel:'+number);
        },
        setTitle:function(title){
            console.log(this.name+':setTitle');
            $('#navbar-title').html(title);
            console.log(this.name+':setTitle:title:='+title);
        },
        show:function(value){
            console.log(this.name+':show');
            $('button[data-toggle]').click(); 
            pages.show(value);
        }
    };
}); 