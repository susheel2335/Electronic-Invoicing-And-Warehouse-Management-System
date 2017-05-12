$(document).ready(function () {
    $('.carousel-caption img').fadeIn(3000);
    $('.carousel').carousel({
        pause: 'hover',
        interval: 5000,
    });
    $('#collapseLogin').on("show.bs.collapse", function () {
        $('.support-top').hide();
    });
    $('#collapseLogin').on("hidden.bs.collapse", function () {
        $('.support-top').show();
    });
    $('.close-alert').click(function () {
        $('.alert-errors').hide();
    });
});
function registerValidate()
{
    $('.form-registration sup').text('');
    var valid = true;
    var email = $('#user_email').val();
    var password = $('#user_password').val();
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,15})+$/;
    var result_email = regex.test(email);
    password = $.trim(password);
    var pass_lenght = password.length;
    if (result_email == false) {
        $('.err-email').text(lang.invalid_email);
        valid = false;
    }
    if (pass_lenght == 0) {
        $('.err-password').text(lang.invalid_pass);
        valid = false;
    }
    var check_rules = $('#user_rules').is(":checked");
    if (!check_rules) {
        $('.err-rules').text(lang.rules_not_checked);
        valid = false;
    }
    if (valid == true) {
        document.getElementById("registerMe").submit();
    }
}