let bodyElement = document.querySelector("body");


function dark() {
   bodyElement.classList.remove("light");
   bodyElement.classList.add("dark");
}


function light() {
   bodyElement.classList.remove("dark");
  bodyElement.classList.add("light");
}