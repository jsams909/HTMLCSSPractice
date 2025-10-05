const gameNight = document.querySelector("#gameNightCap")
const pintFinder = document.querySelector("#pintFinderCap")
let blinkInterval;

gameNight.addEventListener("mouseenter", () => {
  blinkInterval = setInterval(() => {
    gameNight.style.opacity =
      gameNight.style.opacity = gameNight.style.opacity === "0" ? "1" : "0";
  }, 300);
});

gameNight.addEventListener("mouseleave", () => {
  clearInterval(blinkInterval);
  gameNight.style.opacity = "1";
});

pintFinder.addEventListener("mouseenter", () => {
  blinkInterval = setInterval(() => {
    pintFinder.style.opacity =
      pintFinder.style.opacity = pintFinder.style.opacity === "0" ? "1" : "0";
  }, 300);
});

pintFinder.addEventListener("mouseleave", () => {
  clearInterval(blinkInterval);
  pintFinder.style.opacity = "1";
});
