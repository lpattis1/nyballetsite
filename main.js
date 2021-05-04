const sliderImg = document.querySelectorAll(".bg-slide");
const infoSlider = document.querySelector(".info-slider");
const sliderContain = document.querySelector(".slider-contain");
const upArrow = document.querySelector(".fa-arrow-up");
const downArrow = document.querySelector(".fa-arrow-down");
const saleOffer = document.querySelector(".sale-notice");
const closeOffer = document.querySelector(".fa-times-circle");
const slidesHeight = sliderContain.clientHeight;
let current = 0;

// -----------------------------------

const windowLoad = (window.onload = setInterval(() => {
  saleOffer.style.transform = `translateY(${0}%)`;
}, 500));

closeOffer.addEventListener("click", function () {
  if (document.readyState === "complete") {
    clearInterval(windowLoad);
    saleOffer.style.transform = `translateY(-${200}%)`;
  }
});

// ------------------------------------

downArrow.addEventListener("click", function () {
  current++;
  if (current > sliderImg.length - 1) {
    current = 0;
  }
  slider();
});

upArrow.addEventListener("click", function () {
  current--;
  if (current < 0) {
    current = sliderImg.length - 1;
  }
  slider();
});

function slider() {
  for (let i = 0; i < sliderImg.length; i++) {
    sliderImg[i].style.transform = `translateY(-${current * 100}%)`;
  }
}

setInterval(() => {
  current++;
  if (current > sliderImg.length - 1) {
    current = 0;
  }
  slider();
}, 5200);

// ------------------------------------------------------

const slideMenu = document.querySelector(".sliding-sidebar");
const close = document.querySelector(".fa-times");
const open = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");
const menuTwo = document.querySelector(".menu2");
const openTwo = document.querySelector(".fa-bars2");
const closeTwo = document.querySelector(".fa-times2");
const darkenBg = document.querySelector(".bg-slide");

function menuSlide() {
  menu.addEventListener("click", function () {
    menu.style.display = "none";
    menuTwo.style.display = "block";
    openTwo.style.display = "none";
    closeTwo.style.display = "block";
    slideMenu.style.opacity = "1";
    slideMenu.style.transition = `.5s ease-in`;
    slideMenu.style.transform = `translateX(48.5%)`;
  });
}

function menuClose() {
  menuTwo.addEventListener("click", function () {
    menuTwo.style.display = "none";
    menu.style.display = "block";
    open.style.display = "block";
    slideMenu.style.opacity = "0";
    slideMenu.style.transition = `.5s ease-out`;
    slideMenu.style.transform = `translateX(-150%)`;
  });
}

menuSlide();
menuClose();

// -----------------------------------------------------

// hover states
const seasonHover = document.querySelector(".season");
const supportHover = document.querySelector(".support-us");
const discoverHover = document.querySelector(".discover");
const educateHover = document.querySelector(".educate");
const aboutHover = document.querySelector(".about-us");
const visitHover = document.querySelector(".your-visit");
const slideMenu2 = document.querySelector(".sliding-sidebar2");

// links
const linksOne = document.querySelector(".links-1");
const linksTwo = document.querySelector(".links-2");
const linksThree = document.querySelector(".links-3");
const linksFour = document.querySelector(".links-4");
const linksFive = document.querySelector(".links-5");
const linksSix = document.querySelector(".links-6");

function hoverState1() {
  seasonHover.addEventListener("mouseover", function () {
    slideMenu2.style.opacity = "1";
    slideMenu2.style.transition = `350ms`;
    linksOne.style.display = "block";
    linksTwo.style.display = "none";
    linksThree.style.display = "none";
    linksFour.style.display = "none";
    linksFive.style.display = "none";
    linksSix.style.display = "none";
    slideMenu2.style.zIndex = `60`;
    slideMenu2.style.transform = `translateX(148.5%)`;
  });

  slideMenu2.addEventListener("mouseleave", function () {
    slideMenu2.style.opacity = "0";
    slideMenu2.style.transition = `350ms`;
    linksOne.style.display = "none";
    slideMenu2.style.zIndex = `0`;
    slideMenu2.style.transform = `translateX(-150%); `;
  });
}

function hoverState2() {
  supportHover.addEventListener("mouseover", function () {
    slideMenu2.style.opacity = "1";
    slideMenu2.style.transition = `200ms`;
    linksOne.style.display = "none";
    linksTwo.style.display = "block";
    linksThree.style.display = "none";
    linksFour.style.display = "none";
    linksFive.style.display = "none";
    linksSix.style.display = "none";
    slideMenu2.style.zIndex = `60`;
    slideMenu2.style.transform = `translateX(148.5%)`;
  });

  slideMenu2.addEventListener("mouseleave", function () {
    slideMenu2.style.opacity = "0";
    slideMenu2.style.transition = `350ms`;
    linksTwo.style.display = "none";
    slideMenu2.style.zIndex = `0`;
    slideMenu2.style.transform = `translateX(-150%); `;
  });
}

function hoverState3() {
  discoverHover.addEventListener("mouseover", function () {
    slideMenu2.style.opacity = "1";
    slideMenu2.style.transition = `200ms`;
    linksOne.style.display = "none";
    linksTwo.style.display = "none";
    linksThree.style.display = "block";
    linksFour.style.display = "none";
    linksFive.style.display = "none";
    linksSix.style.display = "none";
    slideMenu2.style.zIndex = `60`;
    slideMenu2.style.transform = `translateX(148.5%)`;
  });

  slideMenu2.addEventListener("mouseleave", function () {
    slideMenu2.style.opacity = "0";
    slideMenu2.style.transition = `350ms`;
    linksOne.style.display = "none";
    linksTwo.style.display = "none";
    linksThree.style.display = "none";
    linksFour.style.display = "none";
    linksFive.style.display = "none";
    slideMenu2.style.zIndex = `0`;
    slideMenu2.style.transform = `translateX(-150%); `;
  });
}

function hoverState4() {
  educateHover.addEventListener("mouseover", function () {
    slideMenu2.style.opacity = "1";
    slideMenu2.style.transition = `200ms`;
    linksOne.style.display = "none";
    linksTwo.style.display = "none";
    linksThree.style.display = "none";
    linksFour.style.display = "block";
    linksFive.style.display = "none";
    linksSix.style.display = "none";
    slideMenu2.style.zIndex = `60`;
    slideMenu2.style.transform = `translateX(148.5%)`;
  });

  slideMenu2.addEventListener("mouseleave", function () {
    slideMenu2.style.opacity = "0";
    slideMenu2.style.transition = `350ms`;
    linksOne.style.display = "none";
    linksTwo.style.display = "none";
    linksThree.style.display = "none";
    linksFour.style.display = "none";
    slideMenu2.style.zIndex = `0`;
    slideMenu2.style.transform = `translateX(-150%); `;
  });
}

function hoverState5() {
  aboutHover.addEventListener("mouseover", function () {
    slideMenu2.style.opacity = "1";
    slideMenu2.style.transition = `200ms`;
    linksOne.style.display = "none";
    linksTwo.style.display = "none";
    linksThree.style.display = "none";
    linksFour.style.display = "none";
    linksFive.style.display = "block";
    linksSix.style.display = "none";
    slideMenu2.style.zIndex = `60`;
    slideMenu2.style.transform = `translateX(148.5%)`;
  });

  slideMenu2.addEventListener("mouseleave", function () {
    slideMenu2.style.opacity = "0";
    slideMenu2.style.transition = `350ms`;
    linksOne.style.display = "none";
    linksTwo.style.display = "none";
    linksThree.style.display = "none";
    linksFour.style.display = "none";
    linksFive.style.display = "none";
    slideMenu2.style.zIndex = `0`;
    slideMenu2.style.transform = `translateX(-150%); `;
  });
}

function hoverState6() {
  visitHover.addEventListener("mouseover", function () {
    slideMenu2.style.opacity = "1";
    slideMenu2.style.transition = `200ms`;
    linksOne.style.display = "none";
    linksTwo.style.display = "none";
    linksThree.style.display = "none";
    linksFour.style.display = "none";
    linksFive.style.display = "none";
    linksSix.style.display = "block";
    slideMenu2.style.zIndex = `60`;
    slideMenu2.style.transform = `translateX(148.5%)`;
  });

  slideMenu2.addEventListener("mouseleave", function () {
    slideMenu2.style.opacity = "0";
    slideMenu2.style.transition = `350ms`;
    linksOne.style.display = "none";
    linksTwo.style.display = "none";
    linksThree.style.display = "none";
    linksFour.style.display = "none";
    linksFive.style.display = "none";
    linksSix.style.display = "none";
    slideMenu2.style.zIndex = `0`;
    slideMenu2.style.transform = `translateX(-150%); `;
  });
}

function menuClose2() {
  menuTwo.addEventListener("click", function () {
    menuTwo.style.display = "none";
    menu.style.display = "block";
    open.style.display = "block";
    slideMenu2.style.opacity = "0";
    slideMenu2.style.transition = `.5s ease-out`;
    slideMenu2.style.transform = `translateX(-150%)`;
  });
}

hoverState1();
hoverState2();
hoverState3();
hoverState4();
hoverState5();
hoverState6();
menuClose2();

// ------------------------------------------------------
// Search popup

const searchBg = document.querySelector(".search-bg");
const searchBar = document.querySelector(".search");
const searchPopUp = document.querySelector(".search-popup");
const closePopUp = document.querySelector(".close-out");

function searchModal() {
  searchBar.addEventListener("click", function () {
    searchPopUp.style.visibility = "visible";
    searchPopUp.style.transition = `.5s ease-out`;
    searchPopUp.style.opacity = `1`;
    searchPopUp.animate(
      [{ transform: "scale(0.5)" }, { transform: "scale(1)" }],
      {
        duration: 1000,
        fill: "forwards",
      }
    );
  });
}

function closeSearchModal() {
  closePopUp.addEventListener("click", function () {
    searchPopUp.animate(
      [{ transform: "scale(1)" }, { transform: "scale(0.5)" }],
      {
        duration: 1000,
        fill: "forwards",
      }
    );
    searchPopUp.style.visibility = "hidden";
    searchPopUp.style.transition = `.5s ease-out`;
    searchPopUp.style.opacity = `0`;
  });
}

searchModal();
closeSearchModal();

// ---------------------------------

// Media queries
let mobile = window.matchMedia("(max-device-width: 480px)");

function makeMobileFriendly(mobile) {
  if (mobile.matches) {
    const animationCard = document.querySelectorAll(".card");
    animationCard.forEach((card) => {
      card.setAttribute("data-aos", "fade");
    });
    menu.addEventListener("click", function () {
      slideMenu.style.transform = `translateX(0%)`;
    });

    seasonHover.addEventListener("click", function () {
      slideMenu2.style.transform = `translateX(0%)`;
    });

    supportHover.addEventListener("click", function () {
      slideMenu2.style.transform = `translateX(0%)`;
    });

    discoverHover.addEventListener("click", function () {
      slideMenu2.style.transform = `translateX(0%)`;
    });

    educateHover.addEventListener("click", function () {
      slideMenu2.style.transform = `translateX(0%)`;
    });

    aboutHover.addEventListener("click", function () {
      slideMenu2.style.transform = `translateX(0%)`;
    });

    visitHover.addEventListener("click", function () {
      slideMenu2.style.transform = `translateX(0%)`;
    });
  }
}

makeMobileFriendly(mobile);
