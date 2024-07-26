// 側選單
$(".sideBar a[href^='#']").on("click", function (e) {
    // store hash
    var hash = this.hash;
    console.log(hash);
  
    // animate
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 40,
      },
      800,
    );
  });
  
$(".title3").click(function () {
$("body, html").animate(
    {
    scrollTop: 0,
    },
    1000
);
});
