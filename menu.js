let menuState = "closed";

document.querySelector(".menu_button").addEventListener("click", menu);

function menu() {
  if (menuState == "closed") {
    openMenu();
    menuState = "open";
    console.log(menuState);
  } else {
    closeMenu();
    menuState = "closed";
    console.log(menuState);
  }
}

function openMenu() {
  document.querySelector(".menu").style.transform = "translateX(0)";
  document.querySelector(".menu_button").innerHTML = "✕";
}

function closeMenu() {
  document.querySelector(".menu").style.transform = "translateX(-100%)";
  document.querySelector(".menu_button").innerHTML = "☰";
}
