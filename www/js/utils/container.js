/* jshint strict: false, -W117 */
define(['utils/divExists'],function(divExists){
    return {
        name:"container",
        url:"./pages/cssLoader.html",
        initialize: function(){
            console.log(this.name+':initialize');
            if (divExists.check(this.name) !== true){
                this.createDiv();
            }
//            this.populateDiv('#'+this.name);
        },
        createDiv: function(){
            console.log(this.name+':createDiv');
            var div = document.createElement('div');
            
            div.className = this.name;
            
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
        }
    };
});