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

/*  FUNCTIONS   */
var nameImprover = function(name, adj) {
    return 'Col ' + name + ' Mc' + adj + ' pants.';
};

var add = function(a, b){
    return a + b;
};

add(3, 4, 5); //returns 7, the function ignores the extra parameter

var add = function(a, b){
    console.log(arguments); //log [3, 4, 5], arguments is an object with all arguments pass to function
    //it has a lenght properties
    return a + b;
};

add(3, 4, 5); //13

var add = function(a,b){
    arguments.slice(0, 1); //error, arguments dont have slice prop
    return a + b;
}

/*    Constructors    */
/* Constructor is a function thats return a n object*/
var AnimalMaker = function(name) {
    return {
        speak: function() {
            console.log("My name is ", name);
        },
        name: name,
        owner: 'cerm'
    };
};

var myAnimal = AnimalMaker('Laika');
myAnimal.speak(); //'My name is Laika'
myAnimal['speak'](); //'My name is Laika'

var animalNames = ['Sheep', 'Liger', 'Big Bird'];

var farm = [];

for(var i = 0; i < animalNames.length; i++){
    farm[i] = AnimalMaker(animalNames[i]);
	farm[i].speak();
}
/* 'My name is Sheep'
   'My name is Liger'
   'My name is Big Bird'*/

/*    NESTING    */
box = {};
box['innerBox'] = {};
box['innerBox']['full'] = true;
box['innerBox']['babyBox'] = {};
var bb = box['innerBox']['babyBox'];
box['innerBox'].babyBox.says = 'whats up';
bb; // {'says': 'whats up'}, fi the value store in the variable is an object it points to its values.


/*    SCOPE    */
var box = {} //this variable is store in the main scope, its is call wondow to
var exampleFunc = function() {
    var boxOpener = [];//this is a local variable, its scope is inside the function
    boxSealer = 'this is an example varialbe'; //this variable is in the window, it doesn't have the var
    //declaration so is a global variable (watch out those var's)
}


var g = 'global';

function blender(fruit) {
    var b = fruit;//variable inside blender() scope
    var y = 'yogurt';

    function bs() {
        //bs() is inside of the blender() scope
        var x = 'sugar';//variable inside bs() scope
        alert(b + ' and '+ y + ' makes ' + b + ' swirl'); 
    }
    bs()
}

blender('blueberry');

var g = 'global';
function go() {
    var l = 'local';
    var g = 'in here!';
    alert(g + " inside go"); //g will store the value nearest the actual scope overriding the
    //value of the outside scope
}

go();
alert(g +" outside go"); //g its again the variable from that scope

/* ------------------*/
var inBlock = false;

for(var i=0; i < 5; i++){
    var inBlock = true;
}

if(inBlock){
    console.log('Is there block scope? ' + !inBlock);//watch out ! negates the value of inBlock
}
