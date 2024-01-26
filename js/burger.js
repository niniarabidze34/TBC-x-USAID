import { navItems, burgerBar,Xmark } from "./constants.js";

function openNav() {
    burgerBar.classList.replace("block", "none");
    Xmark.classList.replace("none", "block");
    navItems.classList.replace("navItems", "block");
    header.classList.add('showNav');
}

function closeNav() {
    burgerBar.classList.replace("none", "block");
    Xmark.classList.replace("block", "none");
    navItems.classList.replace("block", "navItems");
    header.classList.remove('showNav');
}

burgerBar.addEventListener('click', openNav);
Xmark.addEventListener('click', closeNav);