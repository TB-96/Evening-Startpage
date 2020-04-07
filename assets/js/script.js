/*
 * Evening Startpage
 * Inspired by https://github.com/jeroenpardon/sui
 * You can find it at https://github.com/TB-96/Evening-Startpage
 * Made by TB-96 2020
 *
 */

function startTime() {
  var currentDate = new Date();
  var hr = parseInt(currentDate.getHours());
  var min = parseInt(currentDate.getMinutes());
  //Add a zero in front of numbers<10
  if (min < 10) {
    min = "0" + min;
  }
  document.getElementById("header-time").innerHTML = hr + ":" + min;

  var dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }

  var date = currentDate.toLocaleDateString("en-GB", dateOptions);
  document.getElementById("header-date").innerHTML = date;

  var time = setTimeout(function(){ startTime() }, 60000);
}

const quotes = [
  'Hello, world...',
  'yeet',
  'fuq'
];
document.getElementById("header-quote").innerText = quotes[
  Math.floor(Math.random() * quotes.length)
];

$(document).ready(function(){
  $("#togglebookmarks").click(function(){
    $("#hiddenbookmarks").toggle();
  });
});

document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('#link')) return;
	// Otherwise, run your code...
	document.body.style.opacity = 0;

}, false);

document.getElementById("container").addEventListener("DOMContentLoaded", startTime());
