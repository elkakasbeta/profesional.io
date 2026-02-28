document.getElementById("year").textContent = new Date().getFullYear();

const nav = document.querySelector(".nav-custom");
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) nav.classList.add("shrink");
  else nav.classList.remove("shrink");
});

const btnToggleExp = document.getElementById("btnToggleExp");
const expBox = document.getElementById("expBox");

btnToggleExp.addEventListener("click", () => {
  expBox.classList.toggle("d-none");
});

const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  let ok = true;

  [name, email, message].forEach(i => i.classList.remove("is-invalid"));

  if (!name.value.trim()) { name.classList.add("is-invalid"); ok = false; }
  if (!email.value.includes("@") || !email.value.includes(".")) { email.classList.add("is-invalid"); ok = false; }
  if (!message.value.trim()) { message.classList.add("is-invalid"); ok = false; }

  if (ok) {
    alert("Mensaje enviado.");
    form.reset();
  }
});

const typingEl = document.getElementById("typingText");
const originalText = typingEl.textContent.trim();
let i = 0;
typingEl.textContent = "";

function typeEffect() {
  if (i < originalText.length) {
    typingEl.textContent += originalText.charAt(i);
    i++;
    setTimeout(typeEffect, 18);
  }
}
typeEffect();