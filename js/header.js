import { header } from "./constants.js";

const sticky = header.offsetTop;

function handleScroll() {
    if (window.scrollY > sticky) {
        header.classList.add("transparent");
    } else {
        header.classList.remove("transparent");
    }
}

window.addEventListener("scroll", handleScroll);