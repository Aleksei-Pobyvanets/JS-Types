var Ar=[3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2,-3,-1];
var Ar1=[1,NaN,3,5,-3];
var Ar2=[1,7,3];
var Ar3=[1,undefined,3,5,-3];
var Ar4=[-1,null,-8,'quesd',-2];
function calculate(Array){
var sum=null
var min=null
var max=null
for (var i=0; Array.length> i; i++) {
if(!isNaN(Array[i])&& typeof(Array[i]==="number")){
sum+=Array[i]};
if(max<Array[i]||max===null)max=Array[i];
if(min>Array[i]||min===null)min=Array[i];
}
return{sum: sum,min: min,max: max}
}
var Res=calculate(Ar);
var Res1=calculate(Ar1);
var Res2=calculate(Ar2);
var Res3=calculate(Ar3);
var Res4=calculate(Ar4);
var resalt=(JSON.stringify(Res))+Res1+Res2+Res3+Res4;
console.log(Res);
console.log(Res1);
console.log(Res2);
console.log(Res3);
console.log(Res4);
console.log(resalt);


// myForEach
var items=[3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2,-3,-1]
var newItems=[]
for (var i=0; items.length>i;i++) {
newItems.push(items[i])
}
console.log(newItems)


// myMap
/*var myMap = new Map();

/*var keyString = 'строка',
    keyObj = {},
    keyFunc = function() {};

myMap.set(key, "значение");
myMap.get(key);    
console.log (myMap)*/

var mass={
    "one": 11,
    "two": "hello",
    "three": true,
}
var newMass={}
for(var key in mass){
    alert += key + mass[key];
}
console.log(mass)

// mySort
var Numbers=[3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2, -3, -1]