const about = document.querySelector("#About")
const project = document.querySelector("#projects")
const contact = document.querySelector("#contact")
let blinkInterval;

about.addEventListener("mouseenter", () => {
  blinkInterval = setInterval(() => {
    about.style.opacity =
      about.style.opacity = about.style.opacity === "0" ? "1" : "0";
  }, 300);
});

about.addEventListener("mouseleave", () => {
  clearInterval(blinkInterval);
  about.style.opacity = "1";
});

project.addEventListener("mouseenter", () => {
  blinkInterval = setInterval(() => {
    project.style.opacity =
      project.style.opacity = project.style.opacity === "0" ? "1" : "0";
  }, 300);
});

project.addEventListener("mouseleave", () => {
  clearInterval(blinkInterval);
  project.style.opacity = "1";
});

contact.addEventListener("mouseenter", () => {
  blinkInterval = setInterval(() => {
    contact.style.opacity =
      contact.style.opacity = contact.style.opacity === "0" ? "1" : "0";
  }, 300);
});

contact.addEventListener("mouseleave", () => {
  clearInterval(blinkInterval);
  contact.style.opacity = "1";
});
