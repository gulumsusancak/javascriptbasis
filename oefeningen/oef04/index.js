//Oefening 4
// We maken onze klaslijst. Vraag aan de gebruiker hoeveel namen hij wil ingeven en vul deze in een array.
// Zorg ervoor dat je de namen onder elkaar afdrukt op de volgende manier.
// Dirk
//  Sam
// Luc
//  Bob


let hoeveelnamen=parseInt(prompt("Hoeveel namen wil je ingeven? :"));
let namen =[];
for (let i=1;i<=hoeveelnamen;i++){
    let naam=prompt(`Geef naam ${i} in:`);
    namen.push(naam);
}
namen.forEach(naam=>console.log(naam));