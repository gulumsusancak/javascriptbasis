let introElement = document.querySelector("#intro");
// introElement.textContent = "Dit is een wijziging."; //met textContent gwn de text
introElement.innerHTML = "<strong>Dit is een wijziging.</strong>"; //met innerHTML stijl geven
// introElement.innerText = "<strong>Dit is een wijziging.</strong>"; //platte text met de tags

let logo = document.getElementById("logo");
logo.setAttribute("src","nieuwe_logo.png");
logo.setAttribute("alt","nieuwe alt");