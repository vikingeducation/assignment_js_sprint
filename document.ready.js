$(document).ready(function(){

//Set H1 text to "Something Cheeky"
$('h1').text("Something Cheeky");

//Insert an HTML element to our div element with the class info-box
$('div.info-box').append("<ol><li>one</li><li>two</li><li>three</li></ol>");

//Change the class of "sad" elements to "happy"
$('.sad').addClass("happy");
$('.happy').removeClass("sad");

//Change the attribute of the pop up's href link to a different url
$('#annoying-popup a').attr('href', 'http://www.cashcats.biz');

//Change the position of the pop-up with CSS styling
$('#annoying-popup').css({
  'right': '0px',
  'top': '30px'
});

//Set our $list variable as our list we want so we can refer to it's cells
var $list = $('.suggested-topics ul').children();
//check each cell's inner HTML and then change it if it is "..."
for ( i = 0; i < $list.length; i++ ) {
  if( $list[i].innerHTML == "..." ) {
    $list[i].innerHTML = "sample text";
  }}

//Add in a textarea and remove the text input
$('.input-form input[type="text"]').remove();
$('.input-form').html("<textarea></textarea>" + $('.input-form').html());


});
