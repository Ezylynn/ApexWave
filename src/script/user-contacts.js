let contactButton = document.getElementById("contact");
let xButton = document.getElementById("x-button");
let contactList = document.getElementById("contact-list");
let chatBox = document.getElementById("chat-box");

contactButton.addEventListener("click", () => {
  contactList.classList.toggle("hidden");
  contactList.classList.toggle("md:hidden");
  chatBox.classList.toggle("hidden");
});

xButton.addEventListener("click", () => {
  contactList.classList.toggle("hidden");
  contactList.classList.toggle("md:hidden");
  chatBox.classList.toggle("hidden");
});
