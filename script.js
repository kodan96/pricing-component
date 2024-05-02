$(document).ready(() => {

    const determinePrice = () => {
        if($('.inner-circle').hasClass('monthly')) {
            $('.basic-price').html('19.99');
            $('.prof-price').html('24.99');
            $('.master-price').html('39.99');
        } else {
            $('.basic-price').html('199.99');
            $('.prof-price').html('249.99');
            $('.master-price').html('399.99');
        }
    }
    determinePrice();

    $('.inner-circle').on('click', (e) => {
        $(e.currentTarget).toggleClass('monthly');
        $('.btn-main').toggleClass('gray');
        determinePrice();
    })

    $('.btn-main').on('keydown', function(e) { 
        if(e.keyCode === 13 || e.keyCode === 32) {
            e.preventDefault();
            $(this).toggleClass('gray');
            $('.inner-circle').toggleClass('monthly');
            determinePrice();   
        }
    });
})