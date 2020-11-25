$(document).ready(() => {
  $(".main-nav").on("click", () => {
    $("ul").slideToggle(300);
  });

  $("button").click(() => {
    $("#popup").fadeToggle("slow");
  });
});
