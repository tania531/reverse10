function reverseWords(string){
  var words = string.split(" ");
  var reverses = [];
  var nonLetter = '';
  var index = 0;

  words.forEach(function(word){
      word = word.split('');
      word = word.reverse();
      word.forEach(function(w){
          if(w.toUpperCase() === w.toLowerCase()){
              nonLetter = w;
              index = word.indexOf(nonLetter);
              word.splice(index, 1);
              word.push(nonLetter);
          }
      });

      word = word.join('');
      reverses.push(word);
  });

  reverses = reverses.join(" ");
  return reverses;
}

var input = "This is fun, hopefully.";

console.log(reverseWords(input));

// outputs:   sihT si nuf, yllufepoh.
