// jquery for image toggle
$(document).ready(function () {
  $("#cool").hide();
  $("#cool2").hide();
  $("#cool3").hide();
  $(".imgtoggle01, .imgtoggle01").click(function () {
      $("#cool").toggle();
      $(".imgtoggle01").toggle();
  });
  $(".imgtoggle02, .imgtoggle2").click(function () {
      $("#cool2").toggle();
      $(".imgtoggle02").toggle();
  });
  $(".imgtoggle03, .imgtoggle3").click(function () {
      $("#cool3").toggle();
      $(".imgtoggle03").toggle();
  });
});
//hover for on the portfolio section
$(document).ready(function () {
  $(".portfolio8").hover(
      function () {
          $(this)
              .find(".ultron")
              .show();
      },
      function () {
          $(this)
              .find(".ultron")
              .hide();
      }
  );
});

//pop this up on submission
$(document).ready(function () {
  document.getElementById("form").addEventListener("submit", popUp);
  function popUp() {
      alert("Your feedback has been received.");
  }
});
