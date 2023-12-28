$(document).ready(function() {
  newOne();
});

$("#newQ").click(function() {
  newOne();
});

$("#share").click(function() {
  var value = $("#quote").text();
  console.log(value);
});

var newOne = function() {
  $.get("https://icanhazdadjoke.com/", function(data) {
    $("#quote").html(data.joke);
  });
}
