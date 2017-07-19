console.log("Hi!");

var side = 16;
var size = 48;


$(document).ready(function() {
  create();
  reset();
});


function reset() {
  $("button").click(function() {
    $(".pixel").css("background-color", "#E84A47");
    side = prompt("How many balloons per side would you like your grid to be? No more than 99 red balloons.");
    size = 768/side
    $(".container").empty();
    create();
  });
}

function hover() {
  $(".pixel").hover(function() {
    $(this).css("background-color", "pink");
  });
}

function create() {
  var total = side * side;
  for(var i = 0;i < total; i++) {
    $(".container").append("<div class='pixel'></div>");
  }
  $(".pixel").css("width", size);
  $(".pixel").css("height", size);
  hover();
}
