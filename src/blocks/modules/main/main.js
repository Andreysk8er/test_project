const slider = document.querySelectorAll(".slider");
document.querySelector(".menu__next").addEventListener("click", (event) => {
  let index;
  for (let i = 0; i < slider.length; i++) {
    if (slider[i].checked) {
      index = i;
    }
  }
  if (index >= slider.length - 1) {
    index = 0;
    slider[index].checked = true;
  } else {
    slider[index].checked = false;
    slider[index + 1].checked = true;
  }
});
document.querySelector(".menu__prev").addEventListener("click", (event) => {
  let index;
  for (let i = 0; i < slider.length; i++) {
    if (slider[i].checked) {
      index = i;
    }
  }
  if (index <= 0) {
    index = slider.length - 1;
    slider[index].checked = true;
  } else {
    slider[index].checked = false;
    slider[index - 1].checked = true;
  }
});
const modal = document.querySelector(".modal");
const body = document.querySelector("body");
const burger = document.querySelector(".mobile-menu");
const modalLink = document.querySelectorAll(".modal__link");
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  modal.classList.toggle("modal-active");
  body.classList.toggle("hidden");
});
modalLink.forEach((el) => {
  el.addEventListener("click", () => {
    modal.classList.toggle("modal-active");
  });
});

const select = document.querySelectorAll(".test");
const prev = document.querySelector(".menu__prev");
const next = document.querySelector(".menu__next");

next.addEventListener("click", () => {
  let index;
  for (let i = 0; i < select.length; i++) {
    if (select[i].classList[1] === "dot-active") {
      index = i;
      select[i].classList.remove("dot-active");
    }
  }
  if (index === select.length - 1) {
    index = 0;
    select[index].classList.add("dot-active");
  } else {
    select[index + 1].classList.add("dot-active");
  }
});
prev.addEventListener("click", () => {
  let index;
  for (let i = 0; i < select.length; i++) {
    if (select[i].classList[1] === "dot-active") {
      index = i;
      select[i].classList.remove("dot-active");
    }
  }
  if (index === 0) {
    index = select.length - 1;
    select[index].classList.add("dot-active");
  } else {
    select[index - 1].classList.add("dot-active");
  }
});

select.forEach((el) =>
  el.addEventListener("click", (e) => {
    for (let i = 0; i < select.length; i++) {
      select[i].classList.remove("dot-active");
    }
    e.target.classList.add("dot-active");
  })
);
