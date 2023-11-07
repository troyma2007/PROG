function helloworld(){
    console.log("dit is een functie")
}

helloworld();


function add(nummer1 , nummer2){
    console.log(nummer1 + nummer2)
}

add(1, 2);

console.log("Hello world")


function multiply(number1 , number2){
    let newnumber = number1 * number2;
    console.log(newnumber)
}

multiply(1, 2);



function rolldice() { 
    return Math.floor(Math.random() * (6 - 1 + 1) + 1)
  }
  
  const rndInt = rolldice(1, 6)
  console.log(rndInt)

  function LargerNum(number1 , number2){
    if (number1 < number2){
        return number2;
    }    else {
        return number1;
    }
}
let Largestnum = LargerNum(20, 6);
console.log(Largestnum);
 
const readline = require("readline-sync");

function aksM (question, optionA, optionB, optionC, answer){
   console.log(question)
   let input = readline.question("de opties zijn: " + optionA + ", " + optionB + ", " + optionC );
   if (input === optionA) {
      console.log ("Goed Gedaan!");
   } else {
      console.log("FOUT!");
   }
}

aksM ("wat is mij naam?", "Troy", "Alex", "Kelvin", "bart");

const characters = woordDatGeschudtMoetWorden.split('programmeren');
  for (let i = characters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [characters[i], characters[j]] = [characters[j], characters[i]];
  }
  const geschudWoord = characters.join('');

  var woord1 = ShakeFunctie("Programmeren");
console.log(woord1);
