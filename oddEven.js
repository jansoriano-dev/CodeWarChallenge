//my ans

function even_or_odd(number) {
    // ...
    if(number % 2 ===0){
      return ("Even")
    }else{
       return ("Odd")
  }
  }

  //best practice


  function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
  }