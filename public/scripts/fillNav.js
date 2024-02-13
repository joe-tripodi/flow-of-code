let url = window.location.href;
if ( url.includes("about") ) {
  let about = document.getElementById("about__nav");
  about.classList.add("fill-nav");
} else if ( url.includes("blog") ) {
  let blog = document.getElementById("blog__nav");
  blog.classList.add("fill-nav");
} else if ( url.includes("contact") ) {
  let contact = document.getElementById("contact__nav");
  contact.classList.add("fill-nav");
} else {
  let home = document.getElementById("home__nav");
  home.classList.add("fill-nav");
}

