let addFriend = document.getElementById("add-button");
let addFriendBox = document.getElementById("add-box");
let closeFriendBox = document.getElementById("close-btn");

addFriend.addEventListener("click", () => {
  addFriendBox.classList.toggle("hidden");
});

closeFriendBox.addEventListener("click", () => {
  addFriendBox.classList.toggle("hidden");
});
