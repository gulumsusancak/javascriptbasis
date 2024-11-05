let introElement = document.getElementById("intro");
console.log(introElement.textContent);

let berichten = document.getElementsByClassName("bericht");
console.log(berichten[0].textContent);

let paragrafen = document.getElementsByTagName("p");
console.log(paragrafen[0].textContent);

let containerparagraph = document.querySelector("#container");
console.log(containerparagraph.children[0].textContent);

let items = document.querySelectorAll("ul li");
console.log(items.length);

