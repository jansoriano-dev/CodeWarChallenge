//my answer

function getCount(str) {
    var vowelsCount = 0;
    
    // enter your majic here
    
    var vowelsList = "aeiou"
    
    for (i=0;i<str.length;i++){
       if(vowelsList.indexOf(str[i])!==-1){
         vowelsCount++
       }
    }
    
    return vowelsCount;
  }

  //best practice for
  function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }