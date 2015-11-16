document.getElementById("start-button").addEventListener("click", countDown);
var count;
   



var clicks = 0;
    function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
};