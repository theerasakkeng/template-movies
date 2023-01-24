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

$(".rank-badge").slick({
  slidesToShow: 7,
  arrows: true,
  infinite: false,
  slidesToScroll: 7,
  appendArrows: $(".rank-badge-wrap .custom-arrow"),
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

//change menu detail
document.getElementById("ep").addEventListener("change", (e) => {
  if (e.target.checked) {
    document.querySelector(".ep-label").classList.add("active");
    document.querySelector(".more-label").classList.remove("active");
    document.querySelector(".comment-label").classList.remove("active");
  }
});

document.getElementById("more").addEventListener("change", (e) => {
  if (e.target.checked) {
    document.querySelector(".more-label").classList.add("active");
    document.querySelector(".ep-label").classList.remove("active");
    document.querySelector(".comment-label").classList.remove("active");
  }
});

document.getElementById("comment").addEventListener("change", (e) => {
  if (e.target.checked) {
    document.querySelector(".comment-label").classList.add("active");
    document.querySelector(".ep-label").classList.remove("active");
    document.querySelector(".more-label").classList.remove("active");
  }
});

document.querySelector(".input-select").addEventListener("click", () => {
  document.querySelector(".dropdonw-list").style.display = "block";
});

document.querySelector(".input-select").addEventListener("focus", () => {
  document.querySelector(".dropdonw-list").style.display = "block";
});

document.querySelector(".input-select").addEventListener("keypress", (e) => {
  if(e){
    e.preventDefault();
  }
});

const menuItems = document.querySelectorAll(".dropdonw-item");
document.querySelector(".input-select").value = menuItems[0].innerText;
if (document.querySelector(".input-select").value == menuItems[0].innerText) {
  menuItems[0].classList.add("border-active");
}
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("mousedown", (e) => {
    document.querySelector(".input-select").value = e.target.innerText;
    if (document.querySelector(".input-select").value == e.target.innerText) {
      document
        .querySelector(".border-active")
        .classList.remove("border-active");
      setTimeout(() => {
        menuItems[i].classList.add("border-active");
      }, 100);
    }
    document.querySelector(".dropdonw-list").style.display = "none";
  });
}

document.querySelector(".input-select").addEventListener("blur", () => {
  document.querySelector(".dropdonw-list").style.display = "none";
});

let inputReportElems = document.querySelectorAll(".input-report");
let reportTextElems = document.querySelectorAll(".report-text");
inputReportElems.forEach((inputReportElem, inputReportElemIndex) => {
  inputReportElems[inputReportElemIndex].addEventListener("focus", () => {
    // inputReportElems[inputReportElemIndex].setAttribute('readonly','readonly')
    reportTextElems[inputReportElemIndex].classList.add("show-report");
  });
  inputReportElems[inputReportElemIndex].addEventListener("blur", () => {
    setTimeout(() => {
      reportTextElems[inputReportElemIndex].classList.remove("show-report");
    }, 150);
  });
});