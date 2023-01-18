// slider
$(".main-slider").slick({
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 800,
  fade: true,
});

$(".main-slider-mobile").slick({
  arrows: false,
  autoplay: true,
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "30px",
        slidesToShow: 1,
      },
    },
  ],
});

$(".rank").slick({
  slidesToShow: 7,
  arrows: true,
  infinite: false,
  slidesToScroll: 7,
  appendArrows: $(".rank-wrap .custom-arrow"),
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 7,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      },
    },
  ],
});

$(".recommend").slick({
  slidesToShow: 7,
  arrows: true,
  infinite: false,
  slidesToScroll: 7,
  appendArrows: $(".slider-content-wrap .custom-arrow"),
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 7,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      },
    },
  ],
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
