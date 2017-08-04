//Use this file to implement Part One of your project

var animal = {};
animal.username = 'Poyito';
animal["tagline"] = 'The sky is falling';
var noises = [];
animal["noises"] = noises;

var cont = 0;
for(var key in animal){
    cont++;
    if(key === "username"){
        console.log("Hey my name is: " + animal[key]);
    } else if(key === "tagline"){
        console.log("I like to say: " + animal[key]);
    }
}
