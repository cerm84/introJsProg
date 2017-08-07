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
animals.push(doggie, dragon);
//console.log(animals);

var friendList = [];
var friends = [];

friends.push(animals[0]['username']);
friends.push(animals[1]['username']);

var relationships = {};
relationships.friends = friends;

var matches = [];
relationships.matches = matches;
relationships.matches.push(animals[2]['username']);

for (var i = 0; i < animals.length; i++){
    animals[i].relationships = relationships;
};

console.log(animals);

//resives a username and return and return an objectwith taht name and with an array if there are more tahn one argument
var animalTestUser = function(uname) {
    var unameObject = {};
    unameObject.uname = uname;
    var otherArgs = [];
    if (arguments.length > 0) {
        for (var i = 1; i < arguments.length; i++) {
            otherArgs.push(arguments[i]);
        }
    }
    unameObject.otherArgs = otherArgs;
    return unameObject;
}


// creates an object with "animals" properties
var AnimalCreator = function(username, species, tagline, noises) {
    return {
        username: username,
        species: species,
        tagline: tagline,
        noises: noises,
        friends: []
    };
};

//fill the objects.friends propertie array with the name propertie of another "animal"
var addFriend = function(user, friend) {
    user['friends'].push(friend.username);
}

//
var myFarm = [
    cow= AnimalCreator('Lechera', 'cow', 'No soy una vaca cualquiera', ['moohhh', 'moo', 'meuh', 'ammuh']),
    horse = AnimalCreator('Silver', 'horse', 'Hi Yo', ['Neig', 'Vrinsk', 'I-Haa', 'ihhh']),
    cat = AnimalCreator('Felix', 'cat', 'Hello officer', ['meow', 'miau', 'purr', 'miao']),
    dog = AnimalCreator('Laika', 'dog', 'Im a space dog', ['guau', 'woof', 'wong', 'barf']),
    duck = AnimalCreator('Daffie', 'duck', 'adgau', ['cuack', 'rap', 'mack', 'vak'])
];

for (var i =0; i < myFarm.length; i++) {
    for (var j =0; j < myFarm.length; j++) {
        if (i !== j) {
            addFriend(myFarm[i], myFarm[j]);
        }
    }
}

var addMatchesArray = function(farmArray) {
    for (var i =0; i < farmArray.length; i++) {
        farmArray[i].matches = [];
    }
}

addMatchesArray(myFarm);

//populate the matches propertie randomly
var giveMatches = function(farmCollection){
    for (var i = 0; i < farmCollection.length; i++){
        var index = Math.floor(Math.random()*(farmCollection[i]['friends'].length -0)+0);//canonical form of rendom range of numbers
        //console.log(index);
        farmCollection[i].matches.push(farmCollection[i].friends[index]);
    }
} 

giveMatches(myFarm);
