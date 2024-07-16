const slider = document.querySelector(".slider");

const dots = document.querySelectorAll(".dot");

console.log(slider);

let activeDotNum = 0;

dots.forEach((dot, idx) => {
  dot.setAttribute("data-num", idx);

  dot.addEventListener("click", (e) => {
    let clickedDotNum = e.target.dataset.num;
    if (clickedDotNum == activeDotNum) {
      // console.log('active');
      return;
    } else {
      // console.log('not active');
      // shift the wrapper
      let displayArea = slider.parentElement.clientWidth;
      // let pixels = -wrapper.clientWidth * clickedDotNum;
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
    }
  });
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
