// $(document).ready(() => {
//   $(".hide-button").click(() => {
//     // $(".button-text").text("SHOW");
//     $(".first-image").hide();
//   });
// });

// an alternative way

$(document).ready(() => {
  $(".hide-button").on("click", () => {
    $(".first-image").hide();
  });
  $(".show-button").on("click", () => {
    $(".first-image").show();
  });
  $(".hide-button").hover(
    function() {
      $(this).css({ "background-color": "blue" });
    },
    function() {
      $(this).css({ "background-color": "" });
    }
  );
});

// the toggle way

// $(".hide-button").click(() => {
//   $(".first-image").toggle();
//   $(".button-text").html("SHOW");
// });
