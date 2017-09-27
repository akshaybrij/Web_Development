function Stacks(){

}
Stacks.prototype.arrange=function(n){
  var m=document.getElementsByClassName(n);
  var l=m.length;
  var h=[];
  var w=[];
  var sqr={};
  var rect={};
  var c=0;
  for(var i=0;i<l;i++){
    h[i]=document.getElementsByClassName(n)[i].clientHeight;
    w[i]=document.getElementsByClassName(n)[i].clientWidth;
  }
   var max=Math.max.apply(null,h);
   var hmax=h.indexOf(max);
   var min=Math.min.apply(null,h);
   var hmin=h.indexOf(min);
   function isSquare(w,h,j){
        console.log(w+""+h);
     if(w==h){
       sqr[j]=h;
     }
   }
   for(var j=0;j<l;j++){
     isSquare(w[j],h[j],j);
     document.getElementsByClassName(n)[j].style.display="none";
   }
   var minsq;
   function sort(sqr){
     for(var k=0;k<sqr.length;k++){
       for(var l=0;l<sqr.length;l++){
         if(sqr[k]>sqr[l]){
           temp=sqr[k];
           sqr[k]=sqr[l];
           sqr[l]=temp;
         }
       }
     }
   }
   function layout(){
     if(sqr.length!=0){
        if(sqr.length==1){
          minsq=sq[0]
        }
        else{
            sort(sqr);
            for(var o=0;o<sqr.length;o++){
            sqr[o]
            }
        }
     }
     else{

     }
   }

}
var stack=new Stacks();
stack.arrange('stack');
