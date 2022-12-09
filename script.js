//const text = document.getElementsByClassName ("title");
const title = $(".title");
const content = $(".content");
title.click(function () {
  const this_title = $(this);
  const this_content = $(this).parent().find(content);

  this_content.slideToggle("fast");

  content.not(this_content).hide("fast");

  //content.show();
  //content.slideDown();
  //content.slideUp();
  //content.toggle();
});
