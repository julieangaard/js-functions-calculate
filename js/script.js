// Skriv "use strict" herunder
"use strict"
function beregnSum(number1, number2) {
    // Funktionen skal beregne summen af de to tal og udskrive resultatet i konsollen, fx: "Summen af 15 og 27 er 42"
    const result = number1+number2 
    console.log (`Resultatet er` ${result}); 
}


// Skriv en funktion, der hedder beregnDifference, og som tager to parametre: number1 og number2
// Funktionen skal beregne forskellen mellem de to tal og udskrive resultatet i konsollen, fx: "Forskellen mellem 27 og 15 er 12"

function beregnDifference(number1, number2) {
    const result = number1-number2 
    console.log (`Resultatet er` ${result}); 
}


// Kald begge funktioner herunder med to selvvalgte tal, så du selv kan se i konsollen, om dine funktioner virker
beregnSum(23,17) 
beregnDifference(23,17)
