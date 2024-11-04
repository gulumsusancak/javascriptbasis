// Oefening 1
// Schrijf een programma waarmee je aan de gebruiker vraagt om getallen in te geven tot hij een negatief getal intikt. Lees de getallen in een array in.
// Geef GETAL x in:
// Vervolgens vraag je aan de gebruiker het hoeveelste getal hij wenst te zien op het scherm.


let getallen = [];

while (true) {
    let getal = parseInt(prompt("Voer een getal in (of een negatief getal om te stoppen):"));

    if (getal < 0) {
        break;
    }
    getallen.push(getal);
}

console.log(getallen);