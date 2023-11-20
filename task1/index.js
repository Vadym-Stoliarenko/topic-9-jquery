/**
знайдіть всі <h2> з класом head,
зробіть для них зелений колір фону,
потім серед знайдених елементів знайдіть елементи з класом inner
і поставте їм розмір шрифту 35px (не вносьте змін до html-файлу)
 */

$(document).ready(function () {
 let headerElements = $("h2.head");
 headerElements.css("background-color", "green");
 headerElements.find(".inner").css("font-size", "35px");
});
