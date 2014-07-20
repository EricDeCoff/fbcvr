/* jshint strict: false, -W117 */
/* jshint multistr: true */
define(['utils/pages','utils/ajaxStaff'],
       function(pages,ajaxStaff){
           
    var staff = {
        name:'staff',
        initialize:function(){
            console.log(this.name+':initialize');
            $('#staff').load('./pages/staff.html',function(){
                $(this).trigger('create'); 
            });
            this.load();
        },
        load:function(){
            console.log(this.name+":load");

            ajaxStaff.load();
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
        