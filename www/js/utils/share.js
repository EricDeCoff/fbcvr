/* jshint strict: false, -W117 */
/* jshint multistr: true */
define(['utils/pages','utils/ajaxStaff'],
       function(pages,ajaxStaff){
           
    var staff = {
        name:'share',
        initialize:function(){
            console.log(this.name+':initialize');
            $('#share').load('./pages/share.html',function(){
                $(this).trigger('create'); 
            });
            
        },
        show:function(){
            pages.show('share');
        }
    };
           
    return staff;
});
           
/*        
$.when(app.staffLoaded).then(function(){
    console.log("StaffLoaded_Deferred");
    staff.loadInnerPages();
});
*/
        