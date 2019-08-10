// Select DOM items

const menuBtn = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");

const navItems = document.querySelectorAll(".nav-items");

//  Set intial state of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
