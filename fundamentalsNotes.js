var box = {};
box.material = "cardboard";
box.material; //returns "cardboard", access notation

box["size"] = "big"; // brackets notation, the same as dot notation

var key = "material";
box[key]; //"cardboard"

var func = function() {
    return "material";
};

box[func()]; /*"cardboard", you can put a function inside de bracket notation
thats a pro of bracket notation*/

box["size"] = {
    "height": 2,
    "width": 80
};
//objects can contain other objects

box.area = function() {
    return box.size.height * box.size.width;
};
//objects can contain functions

for(var key in box){
    console.log(key); //returns the keys of the object
    console.log(box[key]) //return the values of the object
}

/*      ARRAYS      */
var box = [];
box[0] = true;
box[1] = 'meow';
box.push({'hello':'goodbay'});

var i = 0;

box[i]; // true;
box[1]; // 'meow'
box.pop(); //{'hello': 'goodbay'} returns the last item of the array and delete it
console.log(box); // [true, 'meow']

box['size'] = 9;
box['0'] = 'meow';

box['size']; //9, in JS an array is an object that we can add atributes (properties) even string index
box[0]; //meow
box.size; //9

for(var k in box){
    console.log(k); //0 1 size
}

for(var k in box){
    console.log(box[k]); //meow meow 9.. console.log(box.k) box.k doesnt work
}

box.push('Whohoo!');

for(var i = 0; i < box.length; i++){
    console.log(i); //0 1 2
}

box.push('Whohoo!');

for(var i = 0; i < box.length; i++){
    console.log(box[i]); //meow meow whohoo!
}

box[10] = 'lets see'; // box.lenght is 11, lenght looks for the highes index
//all values in betwenn without anything in them are undefined
