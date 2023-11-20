$(document).ready(function () {
    let checkboxes = $("input[type='checkbox']");

    checkboxes.change(function() {
        let checkedCount = checkboxes.filter(":checked").length;

        if (checkedCount >= 3) {
            checkboxes.not(":checked").prop("disabled", true);
        } else {
            checkboxes.prop("disabled", false);
        }
    });
});