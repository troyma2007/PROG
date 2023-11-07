let rls = require("readline-sync");
const geheim = "Papichulo"
let antwoord = "";

while(antwoord != geheim){
    if(antwoord!="")console.log("Je hebt het fout!");
    antwoord = rls.question("Hehe wat is mijn naam??.. : ")
}
console.log("Je hebt het goed!")
