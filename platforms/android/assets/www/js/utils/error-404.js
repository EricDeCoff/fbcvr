/* jshint strict: false, -W117 */
define(['utils/divExists'],function(divExists){
    return {
        name:"error-404",
        url:"./pages/error-404.html",
        initialize: function(){
            console.log(this.name+':initialize');
            if (divExists.check(this.name) !== true){
                this.createDiv();
            }
            this.populateDiv('#'+this.name);
        },
        createDiv: function(){
            console.log(this.name+':createDiv');
            var div = document.createElement('div');
            
            div.id = this.name;
            div.setAttribute('data-page',this.name);
            div.style.display = 'none';
            
            this.insertDiv(div);
        },
        insertDiv: function(div){
            console.log(this.name+':insertDiv');            
            if(document.body.firstChild){
                document.body.appendChild(div);
            }else{
                document.body.insertBefore(div, document.body.firstChild);                
            }
        },
        populateDiv: function(id){
            console.log(this.name+':populateDiv');            
            $('#'+this.name).load(this.url,function(){$(this).trigger('create');  });
        },
        show: function(){
            $('#'+this.name).show();
        },
        hide: function(){
            $('#'+this.name).hide();
        }        
    };
});