let huidigeTijd = new Date();

//console.log(huidigeTijd.gethours());

 

if(huidigeTijd.getHours() > 9 ){

    console.log("je hebt school");

} else if(huidigeTijd.getHours() > 4){

 

    console.log("naar huis");

}
 

/*

 

let huidigeTijd = new Date();

 

 

 

if(huidigeTijd.getHours() > 9){

 

     console.log("ik ben op school");

 

} else if(huidigeTijd.getHours() > 16){

    console.log("naar huis");

}

*/

 


/*
var readlineSync = require('readline-sync');

var answer = readlineSync.question('Goedenavond hoe oud bent u? : ');


if (answer >= 18){
    answer = readlineSync.question('Mag ik je id zien? ');

    if(answer  == ("ja")){
        console.log ("Perfect, kom maar naar binnen")
    } else if (answer == ("nee")){
        console.log("Dan mag u niet naar binnen")
    }

} else if (answer < 18){
    console.log("U mag helaas niet naar binnen");
}


let schooldag = "maandag";

if (schooldag == "maandag") {
    console.log("Ik moet naar school.");
} else if (answer == "dinsdag"){
    console.log("ik hoef niet naar school!");
} 
*/
