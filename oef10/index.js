//stap 1: vraag aan de gebruiker hoeveel namen hij wilt ingeven
//stap 2: iedere naam wordt aan de array doorgegeven (push)
//stap 3: console.log(namen);
//stap 4: sorteer de namen alfabetisch
//stap 5: sorteer de namen in omgekeerde volgorde

let hoeveelnamen=parseInt(prompt("Hoeveel namen wil je ingeven? :"));
let namen =[];
for (let i=1;i<=hoeveelnamen;i++){
    let naam=prompt(`Geef naam ${i} in:`);
    namen.push(naam);
}
console.log(namen);
console.log(namen.sort());
console.log(namen.reverse());