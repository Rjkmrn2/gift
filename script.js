const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const buttons = document.querySelector(".buttons");
const message = document.getElementById("message");

function moveNo() {
  const container = buttons.getBoundingClientRect();
  const btn = noBtn.getBoundingClientRect();

  const padding = 8; // safety margin

  const maxX = container.width - btn.width - padding;
  const maxY = container.height - btn.height - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${Math.max(padding, x)}px`;
  noBtn.style.top  = `${Math.max(padding, y)}px`;
}

// Desktop + mobile
noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);

yesBtn.addEventListener("click", () => {
  buttons.style.display = "none";
  message.classList.add("show");
});
