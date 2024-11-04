//Oefening 7
// Zorg ervoor dat je 2 arrays inleest met willekeurige getallen. De arrays tellen elk 10 getallen.
// Zorg ervoor dat een array wordt gemaakt in de derde array met enkel en alleen de even getallen vanuit de 2 vorige arrays.
// Daarnaast geef je de som van de oneven getallen ook terug van de eerste 2 arrays.

let array1 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
let array2 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));


let evenGetallenArray = [...array1, ...array2].filter(getal => getal % 2 === 0);

let somOnevenGetallen = [...array1, ...array2]
    .filter(getal => getal % 2 !== 0)
    .reduce((totaal, getal) => totaal + getal, 0);

console.log("Array 1:"+ array1);
console.log("Array 2:"+ array2);
console.log("Even getallen uit beide arrays:"+ evenGetallenArray);
console.log("Som van oneven getallen:"+ somOnevenGetallen);
