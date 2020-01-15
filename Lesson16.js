// ::Final Lesson!:: Using Callbacks in Array Methods
function exerciseOne(names){
// Exercise One: In this exercise you will be given and array called names.
// Using the forEach method and a callback as it's only argument, console log
// each of the names.
  names.forEach(function(names){
  console.log(names);
});
}

function exerciseTwo(cents){
// Exercise Two: In this exercise you will be given an array called 'cents'
// This array is a list of prices, but everything is in cents instead of dollars.
// Using the map method, divide every value by 100 and save it as a new array 'dollars'
  function centsToDollars(num){
    return num / 100;
  }

  let dollars = cents.map(centsToDollars);

// Please write your answer in the lines above.
  return dollars;

}
