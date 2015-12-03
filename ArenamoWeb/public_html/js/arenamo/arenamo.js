$(document).ready(function () {
    // This command is used to initialize some elements and make them work properly

    $.get('header.html', function (data) {
        $("#mynavigation").html(data);
    });
    $.get('footer.html', function (data) {
        $("#footer").html(data);
    });
    $.get('modules/login/login.html', function (data) {
        $("#loginModal").html(data);
        $.material.init();
        $('.toggle').on('click', function () {
            $('.loginContainer').stop().addClass('active');
        });

        $('.close').on('click', function () {
            $('.loginContainer').stop().removeClass('active');
        });

    });
});
