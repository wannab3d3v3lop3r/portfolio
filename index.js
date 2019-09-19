$(function(){
    let height = $(window).height() - 100;
    let width = $(window).width();
    
    if(width > 375){
        $('.intro').css('height',height)
    }
    else {
        $('.intro').css('height', 'auto')
    }
})