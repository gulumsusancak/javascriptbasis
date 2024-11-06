function VoegToeAanLijst(){
    //haal eerst alle items op
    let invoer = document.getElementById("invoer").value;
    let lijst = document.getElementById("lijst");

//maak een li tag aan
    let nieuwElement = document.createElement("li");
    nieuwElement.textContent = invoer;//<li>invoer</li>

//maak een trash icon aan: <li>invoer<span>trash</span></li>
    let trashIcon=document.createElement("span");
    trashIcon.innerHTML ='<i class="bi bi-trash"></i>';
    trashIcon.classList.add("btn","text-danger","ms-3","fs-1","pe-3","cursor-pointer");
    nieuwElement.appendChild(trashIcon);

    trashIcon.addEventListener("click",function (){
        nieuwElement.remove();
    });


//maak een checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("me-auto");
    nieuwElement.appendChild(checkbox);
    checkbox.addEventListener("click", function () {
        if (checkbox.checked) {
            nieuwElement.style.textDecoration = "line-through";
        } else {
            nieuwElement.style.textDecoration = "none";
        }
    });


//X button
    let wissen=document.getElementById("wissen");
    wissen.addEventListener("click",function (){
        lijst.removeChild(nieuwElement);
    })

//toeveogen aan de lijst
    lijst.appendChild(nieuwElement);

//wissen van invoerveld

    document.getElementById("invoer").value="";

//injectie van classes
    nieuwElement.classList.add("p-2","bg-light","rounded-pill","shadow-sm","mb-2","d-flex","justify-content-evenly","fs-1");

}

//Event lister knop
let knop = document.getElementById("toevoegen");
knop.addEventListener("click", VoegToeAanLijst);

