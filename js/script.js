// slider
$(".movie").slick({
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
});

//check focu search input
const el = document.activeElement;
let elemInput = document.querySelector(".search");
elemInput.addEventListener("focus", (event) => {
  if (elemInput === document.activeElement) {
    document.querySelector(".input-wrap").style.backgroundColor = "#141414";
  }
});
elemInput.addEventListener("blur", (event) => {
  document.querySelector(".input-wrap").style.backgroundColor =
    "rgba(255, 255, 255, 0.1)";
});

//check scrool
let elemScrool = document.querySelector(".nav-wrap");
document.addEventListener("scroll", (event) => {
  if (window.scrollY > 0) {
    elemScrool.style.backgroundColor = "hsla(0,0%,9%,.9)";
  } else {
    elemScrool.style.background =
      "linear-gradient(to bottom,#242424,#242424 0%,transparent 100%)";
  }
});
