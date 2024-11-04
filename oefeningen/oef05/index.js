//Oefening 5
// Zorg ervoor dat je het alfabet in een array inleest in kleine letters. Gebruik hiervoor een lus
// Zorg ervoor dat je deze array naar een andere array kopieert en dat deze opgevuld is met het alfabet in hoofdletters
// Gebruik een Built-in functie hiervoor

let kleineLetters = [];
for (let i = 97; i <= 122; i++) { // ASCII-waarden van 'a' tot 'z'
    kleineLetters.push(String.fromCharCode(i));
}
let hoofdLetters = kleineLetters.map(letter => letter.toUpperCase());

console.log("Kleine letters: " + kleineLetters);
console.log("Hoofdletters: " + hoofdLetters);