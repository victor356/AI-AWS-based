$(document).ready(function () {

    setLoginPosition();

    $('#submit-login').click(function () {
        submitLogin();
    });

    $(document).keypress(function (e) {
        if (e.which == 13) {
            submitLogin();
        }
    });

    window.onresize = function (event) {
        setLoginPosition();
    };
});

function setLoginPosition() {
    var wContainer = $('#login-box').width();
    var hContainer = $('#login-box').height();
    var wScreen = $(window).width();
    var hScreen = $(window).height();
    $('#login-box').css('left', (wScreen / 2 - wContainer / 2));
    $('#login-box').css('top', (hScreen / 2 - hContainer / 2));
}

function submitLogin() {
    $('#wrong-login-message').hide();
    $('#login-container').height(460);
    var data = 'username=' + $('[name=login-username]').val();
    data += '&pw=' + $('[name=login-pw]').val();
    data += '&rememberMe=' + $('[name=remember-me]').prop('checked');
    $.ajax({
        type: "POST",
        url: baseurl + 'Home/LoginAjax',
        data: data,
        success: function (data) {
            if (data) {
                window.location.replace(baseurl + 'Home/Dashboard');
                //location(baseurl + 'Home/Dashboard');
            }
            else {
                $('#login-container').height(500);
                $('#wrong-login-message').show();
            }
        },
        error: function (data) {
            showModalMessage('Fatal error');
        }
    });
}