const slide = document.querySelectorAll(".slide");
let counter = 0;

function aboutSlide() {
  const leftBtn = document.querySelector(".fa-arrow-left");
  const rightBtn = document.querySelector(".fa-arrow-right");
  const dots = document.querySelectorAll(".dot");

  rightBtn.addEventListener("click", function () {
    counter++;
    if (counter > slide.length - 1) {
      counter = 0;
    }
    slider2();
    slideDots();
  });

  leftBtn.addEventListener("click", function () {
    counter--;
    if (counter < 0) {
      counter = slide.length - 1;
    }
    slider2();
    slideDots();
  });
}

function slider2() {
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.transform = `translateX(-${counter * 100}%)`;
  }
}

function slideDots() {
  const dots = document.querySelectorAll(".slider-dots");
  dots.forEach((dot) => {
    if (counter === 0) {
      dot.children[0].style.background = "#f26631";
      dot.children[1].style.background = "#c5c5c5";
      dot.children[2].style.background = "#c5c5c5";
      dot.children[3].style.background = "#c5c5c5";
      dot.children[4].style.background = "#c5c5c5";
      dot.children[5].style.background = "#c5c5c5";
    } else if (counter === 1) {
      dot.children[0].style.background = "#c5c5c5";
      dot.children[1].style.background = "#f26631";
      dot.children[2].style.background = "#c5c5c5";
      dot.children[3].style.background = "#c5c5c5";
      dot.children[4].style.background = "#c5c5c5";
      dot.children[5].style.background = "#c5c5c5";
    } else if (counter === 2) {
      dot.children[0].style.background = "#c5c5c5";
      dot.children[1].style.background = "#c5c5c5";
      dot.children[2].style.background = "#f26631";
      dot.children[3].style.background = "#c5c5c5";
      dot.children[4].style.background = "#c5c5c5";
      dot.children[5].style.background = "#c5c5c5";
    } else if (counter === 3) {
      dot.children[0].style.background = "#c5c5c5";
      dot.children[1].style.background = "#c5c5c5";
      dot.children[2].style.background = "#c5c5c5";
      dot.children[3].style.background = "#f26631";
      dot.children[4].style.background = "#c5c5c5";
      dot.children[5].style.background = "#c5c5c5";
    } else if (counter === 4) {
      dot.children[0].style.background = "#c5c5c5";
      dot.children[1].style.background = "#c5c5c5";
      dot.children[2].style.background = "#c5c5c5";
      dot.children[3].style.background = "#c5c5c5";
      dot.children[4].style.background = "#f26631";
      dot.children[5].style.background = "#c5c5c5";
    } else if (counter === 5) {
      dot.children[0].style.background = "#c5c5c5";
      dot.children[1].style.background = "#c5c5c5";
      dot.children[2].style.background = "#c5c5c5";
      dot.children[3].style.background = "#c5c5c5";
      dot.children[4].style.background = "#c5c5c5";
      dot.children[5].style.background = "#f26631";
    }
  });
}

aboutSlide();
slideDots();
slider2();

// function slideDots() {
//   const dots = document.querySelectorAll(".slider-dots");
//   dots.forEach((dot) => {
//     if (counter === 0) {
//       dot.children[slide.length - 1].classList.remove("active");
//       dot.children[0].classList.add("active");
//     } else {
//       dot.children[counter].classList.add("active");
//       dot.children[counter - 1].classList.remove("active");
//     }
//   });
// }
