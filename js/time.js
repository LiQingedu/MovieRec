// Javascript time function

var d = new Date()
var time = d.getTime()

function currentTime() {
    var d2 = new Date()
    return d2.getTime()-time;
}

function sayTime() {
  finalTime = currentTime()
  alert("Time elapsed is " + finalTime + " milliseconds");
}
