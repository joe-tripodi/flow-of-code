let lastKnownScrollPosition = 0;

document.addEventListener("scroll", () => {
  let nav = document.getElementsByClassName("navigation__list")[0];

  if(window.scrollY > 50 && !nav.classList.contains("blur-background")){
    nav.classList.add("blur-background");
  } else if (window.scrollY < 100){
    nav.classList.remove("blur-background");
  }
});
