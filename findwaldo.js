const newFunction = function (names, found) {
  names.forEach(function (value, index){  //get the value of iteration and index
    if(value === "Waldo"){
      found(value, index)  //callback when value waldo is found
    }
  })  
  }
  const actionWhenFound = function (value, index) {
    console.log("found " + value + " at index " + index + "!");
  };
  
  newFunction(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
  