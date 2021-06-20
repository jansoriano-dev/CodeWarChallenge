//my ans

function makeNegative(num) {
  
    return(num<0? parseFloat(num):parseFloat("-"+num))
    
  
  }

  //best practice

  function makeNegative(num) {
    return -Math.abs(num);
  }