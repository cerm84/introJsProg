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

noises.unshift('pio');
noises.push('kikiriki');

noises[noises.length] = 'cock-a-doodle-doo';
console.log(noises.length);
animal["noises"] = noises;
console.log(animal);

animals = [];

animals.push(animal);

var quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] };
animals[animals.length] = quackers;

var doggie = {username: 'Laika', tagline: "I'm a space dog", noises: ['guau', 'goof', 'bark']};
var dragon = {username: 'Valerion', tagline: 'I conquer the 7 kingdoms', noises: ['wooshh', 'whaarrr', 'want hobbit for dinner']}
animals.push(doggie);
animals.push(dragon);
console.log(animals);

