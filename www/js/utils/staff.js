define(["utils/pages","utils/ajaxStaff"],function(a,i){var t={name:"staff",initialize:function(){console.log(this.name+":initialize"),$("#staff").load("./pages/staff.html",function(){$(this).trigger("create")}),this.load()},load:function(){console.log(this.name+":load"),i.load()}};return t});