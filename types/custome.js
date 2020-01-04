var Ar=[3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2,-3,-1]
var Ar1=[1,NaN,3,5,-3]
var Ar2=[1,7,3]
var Ar3=[1,undefined,3,5,-3]
var Ar4=[-1,null,-8,'quesd',-2]
function calculate(Array){
var sum=0
var min=0
var max=0
var array=parseInt(Array)
for (var i=0; Array.length> i; i++) {
if(!isNaN(Array[i]))sum+=Array[i]
}

for (var i=0; Array.length> i; i++) {
    if(!isNaN(Array[i]))min+=Array[i]
}

for (var i=0; Array.length> i; i++) {
    if(!isNaN(Array[i]))max+=Array[i]
}

return{sum: sum,min: min,max: max}
}
var Res=calculate(Ar)
var Res1=calculate(Ar1)
var Res2=calculate(Ar2)
var Res3=calculate(Ar3)
var Res4=calculate(Ar4)
var resalt=Res+Res1+Res2+Res3+Res4
console.log(Res) 
console.log(Res1)
console.log(Res2)
console.log(Res3)
console.log(Res4)
console.log(resalt)