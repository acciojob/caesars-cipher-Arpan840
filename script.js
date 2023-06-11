// Your Script here.

const lookup = {
    A: "N",
    B: "O",
    C: "P",
    D: "Q",
    E: "R",
    F: "S",
    G: "T",
    H: "U",
    I: "V",
    J: "W",
    K: "X",
    L: "Y",
    M: "Z",
    N: "A",
    O: "B",
    P: "C",
    Q: "D",
    R: "E",
    S: "F",
    T: "G",
    U: "H",
    V: "I",
    W: "J",
    X: "K",
    Y: "L",
    Z: "M",
    "?": "?",
    ",": ",",
  };
  
  function rot13(str) {
  var decoded = '';
  
  for (var i = 0; i < str.length; i++) {
  var char = str[i];
  
  if (char.match(/[A-Z]/)) {
  var code = str.charCodeAt(i);
  var decodedChar;
  
  if (code >= 65 && code <= 77) {
  // Letters A-M
  decodedChar = String.fromCharCode(code + 13);
  } else if (code >= 78 && code <= 90) {
  // Letters N-Z
  decodedChar = String.fromCharCode(code - 13);
  }
  
  decoded += decodedChar;
  } else {
  // Non-alphabetic character, pass it as it is
  decoded += char;
  }
  }
  
  return decoded;
  }
  
  // You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line
  
   //console.log(rot13("SERR YBIR? NPPVBWBO"));
  
  //Do not change this line
  window.rot13 = rot13;
  