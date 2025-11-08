// MENU HAMBURGUER
function hamburgue() {
  const nav = document.getElementById("nav");
  nav.style.display = nav.style.display === "block" ? "none" : "block";

  const icon = document.getElementById("menuburg");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
}

