//begroeting: schrijf een functie begroet die een naam als parameter ontvangt en een begroeting returneerd.
//output= Hallo Tom!

let mijnNaam=prompt('wat is je naam? :');
function begroet(naam){
    return `Hallo ${naam}! `;
}
console.log(begroet(mijnNaam));