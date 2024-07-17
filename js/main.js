const sectionSlider = document.querySelector(".section_slider");
const mainSection = document.querySelector(".main_section");
//main_section
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider .slide");
const sliderArrows = document.querySelectorAll(".section_slider .arrow");

const dots = document.querySelectorAll(".dot");
const width = sectionSlider.offsetWidth;

function outputsize() {
  slides.forEach((slide) => {
    const width = sectionSlider.offsetWidth;
    const slideWidth = (width - 60) / 2;
    slide.style.width = `${slideWidth}px`;
    aspect = 318 / 213;
    slide.style.height = `${slideWidth / aspect}px`;
  });
}
outputsize();

new ResizeObserver(outputsize).observe(mainSection);

slides.forEach((slide) => {
  const slideWidth = (width - 60) / 2;
  slide.style.width = `${slideWidth}px`;
  aspect = 318 / 213;
  slide.style.height = `${slideWidth / aspect}px`;
});
//sectionSlider.style.width = `${sectionSlider.offsetWidth}px`;
let activeDotNum = 0;
console.log(sliderArrows[0]);
dots.forEach((dot, idx) => {
  dot.setAttribute("data-num", idx);

  dot.addEventListener("click", (e) => {
    let clickedDotNum = e.target.dataset.num;
    if (clickedDotNum == activeDotNum) {
      // console.log('active');
      return;
    } else {
      fn(clickedDotNum);
    }
  });
});
const fn = (clickedDotNum) => {
  let displayArea = slider.parentElement.clientWidth;

  let pixels = -displayArea * clickedDotNum - 20;
  if (clickedDotNum == 0) {
    pixels = -displayArea * clickedDotNum;
  }
  if (clickedDotNum == 2) {
    pixels = -displayArea * clickedDotNum - 40;
  }
  slider.style.transform = "translateX(" + pixels + "px)";
  //       remove the active class from the active dot
  dots[activeDotNum].classList.remove("active");
  //       add the active class to the clicked dot
  dots[clickedDotNum].classList.add("active");
  //       now set the active dot number to the clicked dot;
  activeDotNum = clickedDotNum;
};
sliderArrows[0].addEventListener("click", () => {
  let clickedDotNum;
  if (+activeDotNum === 0) {
    clickedDotNum = 2;
  } else {
    clickedDotNum = +activeDotNum - 1;
  }
  fn(clickedDotNum);
});
sliderArrows[1].addEventListener("click", () => {
  let clickedDotNum;

  if (+activeDotNum === 2) {
    clickedDotNum = 0;
  } else {
    clickedDotNum = +activeDotNum + 1;
  }
  console.log(clickedDotNum);
  fn(clickedDotNum);
});
const match = document.querySelectorAll(".type_match button");

match.forEach((btn, index) =>
  btn.addEventListener("click", () => {
    if (index === 0 && !match[index].classList.contains("active")) {
      match[0].classList.add("active");
      match[1].classList.remove("active");
    } else if (index === 1 && !match[index].classList.contains("active")) {
      match[1].classList.add("active");
      match[0].classList.remove("active");
    }
  })
);

// const expands = document.querySelectorAll(".expand");

// expands.forEach((expand) => expand.classList.add("active"));

////
const leftSidebar = document.querySelector(".left_sidebar");
const minimazeLeftSidebar = document.querySelector(".typical-heder-block.back");

minimazeLeftSidebar.addEventListener("click", () => {
  leftSidebar.classList.toggle("close");
});

const buttonBack = document.querySelector(".header .back");
const header = document.querySelector("header.header");
buttonBack.addEventListener("click", () => {
  buttonBack.classList.toggle("active");
});
//const button = document.querySelector(".header .profile");
buttonProfile.addEventListener("click", () => {
  buttonBack.classList.toggle("active");
});

//TEST
const TEST = document.querySelector("button.bonus");
TEST.addEventListener("click", () => {
  header.classList.toggle("is_login");
});
//TEST
