



const burger = document.querySelector("#menu-btn");
const ul = document.querySelector(" nav ul");

const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

const navlink = document.querySelectorAll(".nav-link");
navlink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);

