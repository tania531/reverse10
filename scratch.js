letters.forEach(function(l){
        if(l.toUpperCase() === l.toLowerCase() ){
            nonLetter = l;            
        }
    
    if(!isALetter(l)){
        nonLetter = l; 
    }
    
       // letters.push(nonLetter);
      //  letters = letters.reverse().join('');       
     //   console.log('letters: ', letters);

});
index = letters.indexOf(nonLetter);
letters.splice(index, 1);
letters = letters.reverse();
letters.push(nonLetter);
string = letters.join("");
console.log(string);