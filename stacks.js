function Stacks(){

}
Stacks.prototype.arrange=function(n){
  var m=document.getElementsByClassName(n);
  var l=m.length;
  var h=[];
  var w=[];
  var sqr={};
  var rect={};
  res=[];
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
   layout(sqr);
   var minsq;
   function sort(sqr){
     var k=0,sq;
     for(sq in sqr){
       if(sqr.hasOwnProperty(sq)){
        res.push(sq)
       }
     }
     var temp;
     for(var g=0;g<length(sqr);g++){
       for(var h=0;h<length(sqr);h++){
            if(sqr[res[g]]<sqr[res[h]]){
                 temp=parseInt(res[g]);
                 res[g]=res[h];
                 res[h]=parseInt(temp);
            }
       }
     }
   }
   function length(sqr){
     var s=0,key;
     for(key in sqr){
       if(sqr.hasOwnProperty(key)){
            s+=1;
       }
     }
     return s;
   }
   function layout(sqr){
     if(length(sqr)!=0){
        if(length(sqr)==1){
          minsq=sq[0]
        }
        else{
            sort(sqr);
            var z=23;
            for(var o=0;o<length(res);o++){
               document.getElementsByClassName(n)[o].style.display="block";
               document.getElementsByClassName(n)[o].style.position="absolute";
               document.getElementsByClassName(n)[o].style.top=Math.random()*h[o-1];
               document.getElementsByClassName(n)[o].style.left=Math.random()*w[o-1];
               document.getElementsByClassName(n)[o].style.zIndex=z;
               z-=1
            }
        }
     }
     else{
      sort(rect);
     }
   }

}
var stack=new Stacks();
stack.arrange('stack');
