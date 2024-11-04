//Oefening 6
// Zorg ervoor dat je het alfabet in een array inleest in kleine letters. Gebruik hiervoor een lus
// Zorg ervoor dat je deze array naar een andere array kopieert en dat deze opgevuld is met het alfabet in hoofdletters
// Je mag geen gebruiken maken van de functies lowercase of uppercase!

let kleineLetters = [];
for (let i = 97; i <= 122; i++) {
    kleineLetters.push(String.fromCharCode(i));
}
let hoofdletters = [];
for (let i = 65; i <= 90; i++) {
    hoofdletters.push(String.fromCharCode(i));
}
console.log("kleine letters: "+kleineLetters);
console.log("hoofdletters: "+hoofdletters);

