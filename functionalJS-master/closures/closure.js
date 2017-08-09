var nonSense = function (stringP) {
    var blab = function () {
        alert(stringP);
    };
    setTimeout(blab, 2000);
};
nonSense();


var nonSense = function (stringP) {
    var blab = function () {
        alert(stringP);
    };
    return blab;
};
blabLater = nonSense('Hola mundo');
blabAgainLater = nonSense('Adios mundo');

var nameConstructor = function (firstN) {
    var lastNameAdder = function (lastN) {
        return firstN + ' ' + lastN;
    };
    return lastNameAdder;
};

var cerm = nameConstructor('Carlos');
cerm('Romero');

var storyWriter = function () {
    var story = '';
    return {
        addWords: function (words)  {
            if (story === ''){
                story = words;
            } else {
                story = story + ' ' + words
            }
        },
        erase: function () {
            story = '';
        },
        print: function() {console.log(story)}
    };
};

var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'


var toaster = function (bread) {
    var heat = 1;
    return {
        setLightToast: function () {heat = 1;},
        setMediumToast: function () {heat = 2;},
        setHighToast: function () { heat = 3;},
        toast: function () {
            var message = '';
            if (heat=== 1) {
                message = 'You got a light ' + bread + ' toast';
            } else if (heat === 2) {
                message = 'Enjoy your ' + bread + 'toast';
            } else {
                message = 'You burn the ' + bread;
            };
            console.log(message);
        }
    };
};

popTartToast = toaster('Pop Tart');
popTartToast.setMediumToast();
popTartToast.toast();

var checkAttendanceFunc = function(nameArr){
    var resultArr = [];
    var name = ""
	for(var i = 0; i < nameArr.length; i++){
        name = nameArr[i]
		resultArr.push(function(){ console.log('Is', name, 'present?', i)})
	};
	return resultArr;
};
