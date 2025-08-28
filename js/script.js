const text = ["Welcome to My Website!", "Explore My Projects", "Let’s Connect 🚀"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
const typingElement = document.querySelector(".hero h1");

function type() {
  if (count === text.length) {
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  typingElement.textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 2000); // jeda sebelum ganti teks
  } else {
    setTimeout(type, 120); // kecepatan mengetik
  }
}

type();

document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

const backToTop = document.createElement("button");
backToTop.innerText = "↑";
backToTop.classList.add("back-to-top");
document.body.appendChild(backToTop);

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
