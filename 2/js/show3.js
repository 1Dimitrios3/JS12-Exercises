$(document).ready(() => {
  //   $(".allBlack").on("click", () => {
  //     $("*").css({
  //       "background-color": "black",
  //       color: "white"
  //     });
  //   });

  // background white && black on button click
  const $blackBg = $("*");

  $(".allBlack").on("click", () => {
    $blackBg.css({
      "background-color": "black",
      color: "white"
    });
    $(".allBlack").on("click", () => {
      $blackBg.css({
        "background-color": "white",
        color: "black"
      });
    });
  });

  // selections
  $("a[hreflang|='en']").css("border", "5px double green");
  //   $("a[href='thereissomeexample.html']").fadeOut("slow");

  // select listB sins
  //   $("li[class$='B']").mouseover(function() {
  //     $(this).hide(3000);
  //   });

  //   $("ul li:nth-child(2) span").mouseover(function() {
  //     $(this).css({
  //       "font-size": "2em",
  //       color: "acqua"
  //     });
  //   });

  //   $("ul li:nth-child(7) span").mouseover(function() {
  //     $(this)
  //       .css({
  //         "font-size": "3em",
  //         "background-color": "#eee",
  //         color: "pink"
  //       })
  //       .on("click", () => {
  //         $(this).css("background-color", "purple");
  //       });
  //   });

  // select letter O
  $("li*:contains('Ο')").css("text-decoration", "underline");

  // change attributes

  $("div>a").attr("href", "https://johnresig.com/");
  $("div a:contains('ich')").attr("href", "https://brendaneich.com/");
  //   $("#nameValueSelector>a:odd").attr("href", "https://brendaneich.com/");

  //   $("div a:nth-child(3)")
  //     .text("Ryan Dahl")
  //     .attr("href", "https://nodejs.org/en/");

  // $(".grow-big-sins").on("click", () => {
  //   $("li span").css("font-size", "33px");
  // });

  $(".grow-big-sins").click(function() {
    const $ul = $(".seven-sins");
    $ul.css("list-style-type", "none");
    $ul.animate(
      {
        width: "70%",
        opacity: 0.5,
        marginLeft: ".7em",
        fontSize: "3em"
      },
      1500
    );
  });

  $(".doubleClick").on("dblclick", () => {
    $(".growBig").animate(
      {
        fontSize: "4em",
        opacity: 0.3
      },
      3000
    );
  });
});
