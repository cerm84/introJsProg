var funCaller = function (func, data) { return func(data); };

var backWord = function(word) {
    var drow = "";
    for(var i = 0; i < word.length; i++) {
        drow = drow + word[word.length - 1 - i];
    };
    return drow;
};
funCaller(backWord, 'Hello world');

var firstVal = function(func, arr) {
    func(arr[0], 0, arr);
}

firstVal = function(list, func){
    if(Array.isArray(list)){
        func(arr[0], 0, arr);
    } else{
        for (var key in list) {
            func(list[key], key, list);
        };
    };
};