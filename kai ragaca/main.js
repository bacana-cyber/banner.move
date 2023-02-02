$(document).ready(function () {

    let counter = 0;

    $('#callSidebar').click(function () {
        counter++;
        if (counter == 1) {
            $('.sidebar').css('right', '-280px');
        }

        if (counter == 2) {
            $('.sidebar').css('right', '0');
            counter = 0;
        }
    })


    $('.new').on('mouseover', function () {
        $('.new').css('margin-left', '-200px')
    })
})