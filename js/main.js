$('.flag-r').on('click', function () {
    $(this).parent().next().toggleClass('inf-text-open');
})

$('.p-nav').on('click', function () {
    $('.p-nav').removeClass('active');
    $(this).addClass('active');
})


//Select

$('.slct').click(function(){
    var dropBlock = $(this).parent().find('.drop');
    if( dropBlock.is(':hidden') ) {
        dropBlock.slideDown();
        $(this).addClass('active');
        $('.drop').find('li').click(function(){
            var selectResult = $(this).html();
            $(this).parent().parent().find('input').val(selectResult);
            $(this).parent().parent().find('.slct').removeClass('active').html(selectResult);
            dropBlock.slideUp();
        });
    } else {
        $(this).removeClass('active');
        dropBlock.slideUp();
    }
    return false;
});


// $('.form-btn').on('click', function () {
//     $(this).parents().find('#p-modal').toggleClass('show');
//     $(this).parents().find('#p-modal').hide();
//     $('body').toggleClass('modal-open');
//     $(this).parents().find('.modal-backdrop').hide();
// });
