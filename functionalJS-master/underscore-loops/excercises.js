var arrayOfNames = ['Carlos', 'Alba', 'Eduardo', 'Laura'];

_.each(arrayOfNames, function(name, index, list){
    console.log(name, index);
});


var helloArr = ['Hello', 'Hola', 'Bonjour'];

var checkValue = function(arr, value){
    var flag = false;
    _.each(arr, function(val, index, list){
        if(val === value){
            flag = true;
        };
    });
    return flag;
};
var isItHola = checkValue(helloArr, 'Hola');


var numObject = {two: 2, four: 4, three: 3, twelve: 12};

var numArr = _.map(numObject, function(value, key, list){
    return value;
})

var numList = [9,8,7,6,5,2];
var evens = _.filter(numList, function(num){ return num % 2 == 0; });

var mult = _.reduce([1, 2, 2], function(memo, val){ return memo * val },1);

var concArr = _.reduce(['x', 'y', 'z'], function(memo, val){ return memo + val }, "");


var nameArr = ['Carlos', 'Alba', 'Lenin', 'Daniel'];
var congFunc = function (names) {
    var list = names;
    var congrats = _.reduce(list, function(memo, val){ return memo + ' ' + val + ',' },"");
    congrats =  congrats.slice(0, -1);
    return 'Congratulations' + congrats + '!';
};
var con = congFunc(nameArr);

var stringArr = ['Hola', 'japon', 'zorro', 'simio', 'zapato'];

var startZ = _.filter(stringArr, function(str){ return str[0] === 'z'; });

var animal = [{speak: function(){console.log('My name is ' + name);}, name: "Tiger", space: 7},  
 		{speak: function(){console.log('My name is ' + name);}, name: "Tiger2", space: 1},  
 		{speak: function(){console.log('My name is ' + name);}, name: "Tiger3", space: 3},  
         {speak: function(){console.log('My name is ' + name);}, name: "Tiger4", space: 3}];

var space3 = _.where(animal, {space: 3});
