function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
      console.error(name)
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
