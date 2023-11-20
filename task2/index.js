/**
Для усіх посилань зі сторінки додайте атрибут target="\_blank", якщо
href починається на`https://
 */
$(document).ready(function () {
  $("a").filter(function() {
    return $(this).attr("href").trim().startsWith("https://");
  }).attr("target", "_blank");
});
