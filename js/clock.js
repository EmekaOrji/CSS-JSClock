var date = new Date();

var currentSecond = date.getSeconds();
var secondHand = document.querySelector(".second");
var x = currentSecond * 6;

var currentMinute = date.getMinutes();
var minuteHand = document.querySelector(".minute");
var y = currentMinute * 6 + ((6/60)*currentSecond);

var currentHour = date.getHours();
var hourHand = document.querySelector(".hour");
var z = currentHour * 30 + ((30/60)*currentMinute + (((30/60)/60)*currentSecond));

// 'x' is the degree value of the secondHand 'Transform[Rotate]'
// 'y' is the degree value of the minuteHand 'Transform[Rotate]'
// 'z' is the degree value of the hourHand 'Transform[Rotate]'
function timer() {
  x += 6/100;
  y += (6/100/60);
  z += (6/100/60/12);
  secondHand.style.transform = `rotate(${x}deg)`;
  minuteHand.style.transform = `rotate(${y}deg)`;
  hourHand.style.transform = `rotate(${z}deg)`;
}
setInterval(timer, 10);
window.addEventListener("focus", function () {
  window.location.reload();
});