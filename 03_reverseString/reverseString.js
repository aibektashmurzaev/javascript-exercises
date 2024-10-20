const reverseString = function(text) {
    let arr = [];
    for(let i=0; i<text.length; i++){
        arr.push(text[i]);
    }
    arr.reverse();
    return arr.join('');
};

//I need to take the last character

// Do not edit below this line
module.exports = reverseString;
