let menuButton = document.getElementById("mobile-menu");
let menuOption = document.getElementById("mobile-options");

menuButton.addEventListener("click", () => {
  menuOption.classList.toggle("hidden");
});
