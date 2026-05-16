// MODAL
function openModal(element) {
  const img = element.querySelector("img");
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-img").src = img.src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
// TYPING MESSAGE
function startTyping() {
  const msg = "Happy Birthday! You are genuinely an amazing person and I’m really glad to have you in my life. Wishing you happiness always ✨";
  let i = 0;
  function type() {
    if (i < msg.length) {
      document.getElementById("typeMsg").innerHTML += msg.charAt(i);
      i++;
      setTimeout(type, 40);
    }
  }
  type();
}
