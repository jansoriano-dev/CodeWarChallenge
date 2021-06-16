//Positive to negative to positive to negative
//myanswer
function opposite(number) {
    //your code here
    return (number<0? Math.abs(number) : -Math.abs(number))
  }


//best practice
  function opposite(number) {
    return(-number);
  }

  opposite(2)