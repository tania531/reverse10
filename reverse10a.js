function reverse2(string){
  var words = string.split(" ");
  console.log('words: ', words);
  var reverses = [];


  words.forEach(function(word){

      word = word.split('').reverse();
      word = word.join('');
      console.log('word: ', word);
      reverses.push(word);
  });

  string = reverses.join(" ");
  console.log(string);

}

  // var input = "This is fun, hopefully.";
console.log(reverse2("This is fun, hopefully."));



function isALetter(charVal)
{
    if( charVal.toUpperCase() != charVal.toLowerCase() )
       return true;
    else
       return false;
}
