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
  $.get("http://api.icndb.com/jokes/random", function(data) {
    $("#quote").html(data.value.joke);
  });
}
