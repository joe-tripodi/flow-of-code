
function navigateHome(event){
  // If we're on the home page, don't navigate
  if(window.location.href.includes("home.html")){
    event.preventDefault();
  }
}
