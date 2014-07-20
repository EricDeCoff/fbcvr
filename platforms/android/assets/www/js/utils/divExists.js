/* jshint strict: false, -W117 */
define(function(){
    return {
        name:'divExists',
        exists:null,
        check:function($id){ 
            this.exists = document.getElementById($id);
            
            if (this.exists === null) return false;
            
            return true;
        }
    };
});