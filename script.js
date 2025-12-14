$(document).ready(function () {

    $("#registrationForm").submit(function () {

        if ($("#phone").val().length < 10) {
            alert("Phone number must be at least 10 digits");
            return false;
        }

        return true;
    });

});
