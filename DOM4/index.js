let nieuwparagraaf = document.createElement("p"); //tag creeren
nieuwparagraaf.textContent = "Dit is een nieuwe paragraaf"; // nieuwe text
document.body.appendChild(nieuwparagraaf); //nieuwe child toevoegen in body

let container = document.getElementById("container");
let paragraaf = document.getElementById("paragraaf");
container.removeChild(paragraaf);//child van container verwijderen (paragraaf)