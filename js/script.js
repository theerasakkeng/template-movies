// slider
$(".movie").slick({
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: false,
  speed: 800,
  fade: true,
});

$(".rank").slick({
  slidesToShow: 7,
  arrows: true,
  infinite: false,
  slidesToScroll: 7,
  appendArrows: $(".rank-wrap .custom-arrow"),
});

$(".recommend").slick({
  slidesToShow: 7,
  arrows: true,
  infinite: false,
  slidesToScroll: 7,
  appendArrows: $(".slider-content-wrap .custom-arrow"),
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

//openide menu
const openSideMenu = () => {
  let elemSideMenu = document.querySelector(".side-bar");
  let elemOpenMenu = document.querySelector(".side-bar.open");
  if (elemSideMenu) {
    elemSideMenu.classList.add("open");
  }
  if (elemOpenMenu) {
    elemOpenMenu.classList.remove("open");
  }
};
