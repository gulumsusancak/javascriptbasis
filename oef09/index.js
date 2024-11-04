
let namen=["Jan","Piet","Klaas"];

console.log(namen[0]);
console.log(namen.push("Fabio"));
console.log(namen[3]);
console.log(namen);
console.log(namen.push("Tom")); //elementen toevoegen
console.log(namen);
console.log(namen.pop()); //laatste element verwijderen
console.log(namen);
console.log(namen.shift()); //eerste element verwijderen
console.log(namen);
console.log(namen.unshift("Jonas","Dieter")); //voeg VOORAAN de array elementen toe
console.log(namen);
console.log(namen.length); // geeft de aantal terug


namen.forEach(naam=>console.log(naam)); //iedere naam apart weergeven, output ALTIJD STRING

let getallen = [1,2,3];
let verdubbeld = getallen.map(getal=> getal * 2); //output ALTIJD TERUG EEN ARRAY
console.log(verdubbeld);

let numbers = [1,2,3,4,5];
let evengetallen = numbers.filter(getal=> getal%2===0); //zelfsde zoals foreach en map maar dit zal alleen tonen wat true is
console.log(evengetallen);

let nieuwenummers = [1,2,3,4];
let eersteGroterDanTwee= nieuwenummers.find(getal=> getal > 2);
console.log(eersteGroterDanTwee);
let index = nieuwenummers.findIndex(getal=> getal > 2);//waar staat "3" = 2de plaats van array
console.log(index);

let fruits= ["appel","banaan","peer","kiwi","kersen","sinaasappel"];
let sommigeFruits=fruits.slice(3,6); //stukjes daaruit pakken
console.log(sommigeFruits);

let tvfruits = fruits.splice(3,1,"druiven"); //kiwi wordt vervangen door druiven
console.log(tvfruits);
console.log(fruits);

let newnumbers = [1,2,3,4];
let som = newnumbers.reduce((acc,num)=> acc + num , 0); //som van getallen
console.log(som);