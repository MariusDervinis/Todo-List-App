$("ul").on("click", "li", function () {
  //toggle completed
  $(this).toggleClass("completed");
});

//click on x to delete todo
$("ul").on("click", "span", function (e) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  e.stopPropagation();
});

$("input[type='text']").keypress(function (e) {
  $(this).val()
    ? e.which === 13
      ? ($("ul").append(
          "<li><span><i class='fa fa-trash'></i></span> " +
            $(this).val() +
            "</li>"
        ),
        $(this).val(""))
      : null
    : null;
});

$("#inputExpand").on("click", function () {
  $("input[type='text']").fadeToggle(200);
  $("#inputExpand").hasClass("fa-plus")
    ? ($(this).addClass("fa-minus"), $(this).removeClass("fa-plus"))
    : ($(this).removeClass("fa-minus"), $(this).addClass("fa-plus"));
});


