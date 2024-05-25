function sendMessage(e){
  e.preventDefault();
  console.log("I am gonna send a message")
  fetch("http://52.21.190.0/contact", {
    method: "GET",
  }).then((res) => {
    console.log(res.text())
  });
  //form.reset()
}

form = document.getElementById("contact-form");

if (form.addEventListener) {
  form.addEventListener("submit", sendMessage, false);
} else if (form.attachEvent) {
  form.attachEvent('onsubmit', sendMessage);
}
