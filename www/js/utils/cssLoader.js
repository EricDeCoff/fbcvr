define(["utils/divExists"],function(e){return{name:"cssLoader",url:"./pages/cssLoader.html",initialize:function(){console.log(this.name+":initialize"),e.check(this.name)!==!0&&this.createDiv(),this.populateDiv("#"+this.name)},createDiv:function(){console.log(this.name+":createDiv");var e=document.createElement("div");e.id=this.name,e.setAttribute("data-page",this.name),e.style.display="none",this.insertDiv(e)},insertDiv:function(e){console.log(this.name+":insertDiv"),document.body.firstChild?document.body.appendChild(e):document.body.insertBefore(e,document.body.firstChild)},populateDiv:function(){console.log(this.name+":populateDiv"),$("#"+this.name).load(this.url,function(){$(this).trigger("create")})},show:function(){$("div[data-page]").hide(),$("#"+this.name).show()}}});