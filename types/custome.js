var Ar=[3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2,-3,-1]
var Ar1=[1,NaN,3,5,-3]
var Ar2=[1,7,3]
function calculate(arrey){
var sum=0

for (var i=0; arrey.length> i; i++) {
if(!isNaN(arrey[i]))sum+=arrey[i]
}
return{sum: sum,min:null,max:null}
}
var Res=calculate(Ar)
var Res1=calculate(Ar1)
var Res2=calculate(Ar2)
console.log(Res) 
console.log(Res1)
console.log(Res2)