function openTab(event, tabName) {
  const tabContents = document.getElementsByClassName("content-tabComment");
  for (const content of tabContents) {
    content.style.display = "none";
  }

  const tabButtons = document.getElementsByClassName("content_tablinks");
  for (const button of tabButtons) {
    button.classList.remove("active");
  }

  document.getElementById(tabName).style.display = "block";
  event.currentTarget.classList.add("active");
}

// Open the first tab by default
document.getElementById("tab-1").style.display = "block";
document.querySelector(".content_tablinks").classList.add("active");
// mobile menu
var mobileMenu = document.querySelector("#mobile-menu");
mobileMenu.onclick = function () {
  let navbar = document.querySelector(".navbar-menu");
  navbar.classList.toggle("active");
};
