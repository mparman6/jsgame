var timer;
var remainingTime = 20;

function beginCount() {
  remainingTime = 20;
  timer = setInterval(gameTimer, 1000);
}
   
function gameTimer() {
  if(remainingTime > 0) {
    document.getElementById("start-button").innerHTML = remainingTime -=1;
  }
  else {
    document.getElementById("start-button").innerHTML = "START"
    clearInterval(gameTimer);
  }
}

document.getElementById("start-button").addEventListener("click", beginCount);

function picEvent() {
  for(var i = 0; i < document.getElementByClassName("img-thumbnail").length; i++)
    document.getElementByClassName("img-thumbnail")[i].addEventListener("click", counter);
}

function counter() {
  count++;
}



