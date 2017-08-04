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
