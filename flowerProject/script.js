// Redirect after bloom
if (document.body.classList.contains("flower-page")) {
  setTimeout(() => {
    window.location.href = "question.html";
  }, 4000);
}

// Question logic
if (document.body.classList.contains("question-page")) {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const msg = document.getElementById("message");
  const card = document.querySelector(".card");

  function moveNo() {
    const c = card.getBoundingClientRect();
    const b = noBtn.getBoundingClientRect();

    noBtn.style.left = Math.random() * (c.width - b.width) + "px";
    noBtn.style.top = Math.random() * (c.height - b.height) + "px";
  }

  noBtn.addEventListener("mouseenter", moveNo);
  noBtn.addEventListener("touchstart", moveNo);

  yesBtn.addEventListener("click", () => {
    msg.textContent = "Yay! 💖 I knew it!";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
  });
}
