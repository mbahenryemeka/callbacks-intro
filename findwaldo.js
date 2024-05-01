const newFunction = function (names, found) {
  names.forEach(function (value, index){
    if(value === "Waldo"){
      found(value, index)
    }
  })  
  }
  const actionWhenFound = function (name, i) {
    console.log("found " + name + " at index " + i + "!");
  };
  
  newFunction(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
  