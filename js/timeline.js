$('.content').each( function(i){

var bottom_of_object= $(this).offset().top + $(this).outerHeight();
var bottom_of_window = $(window).height();

if( bottom_of_object > bottom_of_window){
$(this).addClass('hidden');
}
});


$(window).scroll( function(){
/* Check the location of each element hidden */
$('.hidden').each( function(i){
  
    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
  
    /* If the object is completely visible in the window, fadeIn it */
    if( bottom_of_window > bottom_of_object ){
      $(this).animate({'opacity':'1'},700);
    }
});
});