var leClick = document.querySelector(".liste__titre1");
var content = document.querySelector("contenu1");

leClick.addEventListener("click", function() {
    content.classList.toggle("--isActive");
});


