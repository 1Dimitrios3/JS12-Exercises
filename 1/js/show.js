$(document).ready(() => {
  $("#show").click(() => {
    $(".box").fadeIn();
  });
  $("#hide").click(() => {
    $(".box").fadeOut(2000);
  });
});
