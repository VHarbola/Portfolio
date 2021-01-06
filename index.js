$(document).ready(function () {
  $windowHeight = $(window).height();
  //console.log($windowHeight);

  $("#flexContainer1").height($windowHeight);

  $("#mB3").click(function () {
    $.get("http://localhost:3000/contact", function (data, status) {
      console.log(JSON.stringify(data));
    });
    $("#mask").show();
    $(".popup-div").show();
  });

  $("#mask").click(function () {
    $(".popup-div").hide();
    $("#mask").hide();
  });

  $("#mB1").click(function () {
    $("html, body").animate(
      {
        /*   $(window).scrollTop($("#sec--about").offset().top),*/
        scrollTop: $("#sec--about").offset().top,
      },
      700
    );
  });

  /*$(window).scroll(function () {
    console.log(document.documentElement.scrollTop);
    console.log($(window).scrollTop());
  });*/

  $(".popup-div_form").submit(function (e) {
    e.preventDefault();

    let name = $("#name").val();
    let email = $("#email").val();
    let phone_numebr = $("#phone_numebr").val();
    let message = $("#message").val();

    const data = {
      name: name,
      email: email,
      phone_numebr: phone_numebr,
      message: message,
    };

    $.ajax({
      method: "POST",
      url: "http://localhost:3000/contact",
      data: data,
    }).done(function (resp) {
      console.log("Data Saved");
      console.log(resp);
    });
    console.log("Form submitted");
  });

  $("#mB3").click;
});
