const text = [
  "AI Enthusiast 🤖",
  "Creative Web Developer 💻",
  "Future Engineer 🚀",
  "Building Smart Ideas with Code 💡"
];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;
const typingElement = document.querySelector(".typing-text");

function type() {
  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      currentText = text[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentText = text[i].substring(0, j--);
    }

    typingElement.textContent = currentText;

    if (j === text[i].length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (j === 0 && isDeleting) {
      isDeleting = false;
      i++;
      if (i === text.length) i = 0;
    }

    setTimeout(type, isDeleting ? 50 : 100);
  }
}

type();
