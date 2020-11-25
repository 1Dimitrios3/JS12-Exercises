$(function() {
  $(".eventTargetParagraph, p, ul, li").click(function(e) {
    e.stopPropagation();
    $("h2").text("e.currentTarget hero is:" + $(e.currentTarget).text());
  });
});
