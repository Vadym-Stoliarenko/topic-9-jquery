/**
Знайдіть теги `<div>`, які стоять безпосередньо після `<h3>` 
і перемістіть ці `<div>`-елемент так, щоб кожен з них став
безпосередньо над відповідним елементом `<h3>`.
 */
$(document).ready(function () {
  $("h3").each(function() {
    let h3 = $(this);
    let div = h3.next("div");
    if (div.length) {
      h3.before(div)
    }
  });
});
