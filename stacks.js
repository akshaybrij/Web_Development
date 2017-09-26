function Stacks(){

}
Stacks.prototype.arrange=function(n){
  var m=document.getElementsByClassName(n);
  var l=m.length;
  var h=[];
  var w=[];
  var sqr=[];
  var c=0;
  for(var i=0;i<l;i++){
    h[i]=document.getElementsByClassName(n)[i].clientHeight;
    w[i]=document.getElementsByClassName(n)[i].clientWidth;
  }
   var max=Math.max.apply(null,h);
   var hmax=h.indexOf(max);
   var min=Math.min.apply(null,h);
   var hmin=h.indexOf(min);
   function isSquare(w,h){
     if(w==h){
       sqr[c]=h;
     }
   }
}
var stack=new Stacks();
stack.arrange('stack');
