
$(document).ready(function(){
    $('.town').click(function(){
        var id = $(this).attr('id').slice(1);
        var town = '#rt' + id;
        $(town).addClass('active');
        $('html, body').animate({
            scrollTop: $(town).offset().top
        }, 2000);

    });
    $(".mi").click(function(){
        $(this).parents('.register').toggleClass('active');
    });
});
