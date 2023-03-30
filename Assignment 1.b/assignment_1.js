const box = document.getElementById("message-box")
const successButton = document.getElementById("success")
const errorButton = document.getElementById("error")
const infoButton = document.getElementById("info")

function onSuccessButtonClick(event) {
  box.className = ""
  box.classList.add("success")
}

function onErrorButtonClick(event) {
  box.className = ""
  box.classList.add("error")
  console.log("HEJ!")
}

function onInfoButtonClick(event) {
  box.className = ""
  box.classList.add("info")
}


successButton.addEventListener("click", onSuccessButtonClick)
errorButton.addEventListener("click", onErrorButtonClick)
infoButton.addEventListener("click", onInfoButtonClick)

