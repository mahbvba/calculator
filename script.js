function appendCharacter(character) {
    document.getElementById("display").value += character;
  }
  
  function deleteLastCharacter() {
    var display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function calculate() {
    var display = document.getElementById("display");
    var result = eval(display.value);
    display.value = result;
  }