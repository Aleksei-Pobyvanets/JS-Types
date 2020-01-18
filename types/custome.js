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

                Array.prototype.myforEach = function (callback, thisArg) {
                    var T, k;
                    if (this == null) {
                    throw new TypeError(' this is null or not defined');
                    }
                    // 1. Положим O равным результату вызова ToObject passing the |this| value as the argument.
                    var O = Object(this);
                    // 2. Положим lenValue равным результату вызова внутреннего метода Get объекта O с аргументом "length".
                    // 3. Положим len равным ToUint32(lenValue).
                    var len = O.length >>> 0;
                    // 4. Если IsCallable(callback) равен false, выкинем исключение TypeError.
                    // Смотрите: http://es5.github.com/#x9.11
                    if (typeof callback !== 'function') {
                        throw new TypeError(callback + ' is not a function');
                    }
                    // 5. Если thisArg присутствует, положим T равным thisArg; иначе положим T равным undefined.
                    if (arguments.length > 1) {
                    T = thisArg;
                    }
                    // 6. Положим k равным 0
                    k = 0;
                    // 7. Пока k < len, будем повторять
                    while (k < len) {
                    var kValue;
                    // a. Положим Pk равным ToString(k).
                    //   Это неявное преобразование для левостороннего операнда в операторе in
                    // b. Положим kPresent равным результату вызова внутреннего метода HasProperty объекта O с аргументом Pk.
                    //   Этот шаг может быть объединён с шагом c
                    // c. Если kPresent равен true, то
                    if (k in O) {
                        // i. Положим kValue равным результату вызова внутреннего метода Get объекта O с аргументом Pk.
                        kValue = O[k];
                        // ii. Вызовем внутренний метод Call функции callback с объектом T в качестве значения this и
                        // списком аргументов, содержащим kValue, k и O.
                        callback.call(T, kValue, k, O);
                    }
                    // d. Увеличим k на 1.
                    k++;
                    }
                    // 8. Вернём undefined.
                };
                


// myMap
// Функціональні кроки ECMA-262, версія 5, 15.4.4.19
// Довідка: http://es5.github.io/#x15.4.4.19
if (!Array.prototype.map) {

Array.prototype.map = function(callback, thisArg) {

    var T, A, k;

    if (this == null) {
    throw new TypeError(' this is null or not defined');
    }

    // 1. Нехай O дорівнює результату виклику ToObject з |this| 
    //    в якості аргументу.
    var O = Object(this);

    // 2. Нехай lenValue дорівнює результату виклику внутрішнього методу O
    //    Get з аргументом "length".
    // 3. Нехай len дорівнює ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. Якщо IsCallable(callback) дорівнює false, викинути виняток TypeError.
    // Див.: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
    }

    // 5. Якщо надано thisArg, нехай T дорівнює thisArg; інакше нехай T дорівнює undefined.
    if (arguments.length > 1) {
    T = thisArg;
    }

    // 6. Нехай A дорівнює новому масиву, створеному виразом new Array(len), 
    //    де Array - це стандартний вбудований конструктор з таким ім'ям, 
    //    а len дорівнює значенню len.
    A = new Array(len);

    // 7. Нехай k дорівнює 0
    k = 0;

    // 8. Повторювати, доки k < len
    while (k < len) {

    var kValue, mappedValue;

    // а. Нехай Pk дорівнює ToString(k).
    //   Цей метод неявно застосовується до лівого операнда оператора in
    // б. Нехай kPresent дорівнює результату виклику внутрішнього методу O
    //    HasProperty з аргументом Pk.
    //   Цей крок можна об'єднати з в
    // в. Якщо kPresent дорівнює true, тоді
    if (k in O) {

        // і. Нехай kValue дорівнює результату виклику внутрішнього методу O
        //    Get з аргументом Pk.
        kValue = O[k];

        // ii. Нехай mappedValue дорівнює результату виклику внутрішнього
        //     методу callback Call з T у якості значення this та списком 
        //     аргументів, що містить kValue, k та O.
        mappedValue = callback.call(T, kValue, k, O);

        // iii. Викликати внутрішній метод A DefineOwnProperty з аргументами
        // Pk, Property Descriptor
        // { Value: mappedValue,
        //   Writable: true,
        //   Enumerable: true,
        //   Configurable: true },
        // та false.

        // У переглядачах, що підтримують Object.defineProperty, використовуйте:
        // Object.defineProperty(A, k, {
        //   value: mappedValue,
        //   writable: true,
        //   enumerable: true,
        //   configurable: true
        // });

        // Для найкращої підтримки переглядачів, використовуйте:
        A[k] = mappedValue;
    }
    // г. Збільшити k на 1.
    k++;
    }

    // 9. повернути A
    return A;
};
}

var mass={
    "one": 11,
    "two": "hello",
    "three": true,
}
var newMass={}
for(var key in mass){
    key + mass[key];
}
console.log(mass)

// mySort
var Number=[3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2, -3, -1, 3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2, -3, -1]
var qsort = (Number) =>{
    if(Number.length < 2){
        return Number;
    }else {
        var pivot = [Math.floor(Math.random() * Number.length)]
        var less = Number.filter(value => value < pivot)
        var geater = Number.filter(value => value > pivot)
        return [...qsort(less), pivot, ...Number(geater)]
    }
} 
console.log(qsort(Number))


const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    distanceToPump=a;
    mpg=b;
    fuelLeft=c;
    const assert = require("zeroFuel").assert;
        function zeroFill(a, b, c){
        if(c>0){
        return true; 
        }else if(c<=0){
        return false; 
        };
        function SampleTests(a, b, c){
          if((a/b)<c){
          return true;
          };
        function otherTest(){
          if(zeroFill===true,SampleTests===true){
            return this.zeroFuel + true;
          };
        };
        };
      };
    assert.equal(zeroFuel(50, 25, 2),);
    assert.equal(zeroFuel(100, 50, 1),);
    };
    