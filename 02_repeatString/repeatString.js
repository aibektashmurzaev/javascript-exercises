const repeatString = function(word, number) {
  let updatedWord = '';
  if(number > 0){
    for(let i=0; i<number; i++){
        updatedWord += word;
     }
  }else if(number == 0){
     return '';
  }else{
    return 'ERROR';
  }
  return updatedWord;
};

// Do not edit below this line
module.exports = repeatString;
