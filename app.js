$(document).ready(function () {
  newOne();
});

$("#newQ").click(function () {
  newOne();
});

$("#share").click(function () {
  var value = $("#quote").text();
  console.log(value);
});

var newOne = function () {
  $.ajax({
    url: 'https://icanhazdadjoke.com/',
    method: 'GET',
    headers: {
      'Accept': 'application/json',

    },
    success: function (data) {
      console.log(data)
      $("#quote").html(data.joke);
    }
  });
}
