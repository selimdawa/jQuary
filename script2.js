$(document).ready(function () {
  $(".next").click(function () {
    const currect_img = $(".show");
    const next_img = currect_img.next();

    if (next_img.length) {
      currect_img.fadeOut("fast").removeClass("show");
      next_img.fadeIn("fast").addClass("show");
    }
  });

  $(".prev").click(function () {
    const currect_img = $(".show");
    const prev_img = currect_img.prev();

    if (prev_img.length) {
      currect_img.fadeOut("fast").removeClass("show");
      prev_img.fadeIn("fast").addClass("show");
    }
  });
});
