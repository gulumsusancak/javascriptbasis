//1. controleer even of oneven: schrijf een functie isEven die controleert of een getal even is
//resultaat moet true or false zijn

let testgetal= parseInt(prompt('geef een getal in:'))
function isEven(getal){
    return getal%2===0;
}
console.log(isEven(testgetal));