const activePage = window.location.href;
const pathName = activePage.split("/").pop();

if (pathName == "#home") {
  document.querySelector(".home-class").classList.add("activeLink");
} else if (pathName == "#about") {
  document.querySelector(".about-class").classList.add("activeLink");
} else if (pathName == "#resume") {
  document.querySelector(".resume-class").classList.add("activeLink");
} else if (pathName == "#contact") {
  document.querySelector(".contact-class").classList.add("activeLink");
}
