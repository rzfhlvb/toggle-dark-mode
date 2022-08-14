var $html = $("html");

$("#toggle-switch").on("change", function () {
  if (this.checked) {
    $html.addClass("dark-mode");
  } else {
    $html.removeClass("dark-mode");
  }
});
