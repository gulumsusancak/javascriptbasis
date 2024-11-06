let knop= document.getElementById("klikmij");
knop.addEventListener("click",function (){//als je op de button klikt dan krijg je alles daaronder
    alert("Je hebt op mij geklikt!");
    document.body.style.backgroundColor="blue";
    knop.textContent="Ik ben aangeklikt!";//als je op de knop klikt dan wijzigt de text
});

let form= document.getElementById("mijnform");
form.addEventListener("submit",function (event){
   event.preventDefault(); // hiermee vermijd je het herladen van de pagina!!
   let naam = document.getElementById("naamInput").value; //enkel de value halen
   console.log("Naam:",naam);
   document.getElementById("naamInput").value="";
});

document.addEventListener("keydown",function (event){
    console.log("Toets ingedrukt:",event.key); // toont de geklikte toets
});