// $(document).ready(function (){

// });

$(function () {

    // let elem = document.querySelector("h4").innerText;
    
    // let elem = $("h4").text();
    
    let elems = $("#products h4")
    
    // for (const item in elems) {
    //     console.log(item);
    // }
    
    $("#products button")
    .first()
    .click(function () {
      // console.log($(this).html(`<span class="text-danger">Bye bye</span>`));
      $("#products .box").hide(2500);
      $("h4").css({
        "font-size": "50px",
        color: "blue",
      });
    });
    
    $("#products button")
    .first()
    .next()
    .click(function () {
      // console.log($(this).html(`<span class="text-danger">Bye bye</span>`));
      $("#products .box").show(2500, function () {
        $("#products .box").css("background-color", "yellow");
      });
    });
    
    $("#products button")
    .last()
    .click(function () {
      // console.log($(this).html(`<span class="text-danger">Bye bye</span>`));
      $("#products .box").toggle(2500, function () {
        $("#products .box").css("background-color", "yellow");
      });
    });
    
    
    
    });