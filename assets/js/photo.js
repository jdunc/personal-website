var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
// options
  itemSelector: '.grid-item',
  columnWidth: 200
  });
// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
// options
});

$('img').each(function(i) {
$(this).delay(i * 400).animate({
opacity: 1,
}, 2000, function() {
// Animation complete.
});
});
$('h1').fadeIn(2000);
$('h1').textillate({ in: { effect: 'flipInX', delayScale: 3,
} });
$('.grid-item').mouseenter(
 function(){
   console.log('hovered');
   console.log($(event)[0]['target']);
 });
$('.grid-item').click(
  function(){
    console.log($(event)[0]['target']);
    var selectedImg = $(event)[0]['target'];
    $('.modal').append($('<div />', {
        "class": 'modal-content',
        text: "<",
        }))
    $(selectedImg).clone().appendTo('.modal-content');
    // $('.modal > img').addClass('modal-content');
    $('.modal-content').append('<a>></a>');
    $('#myModal').show();
  });
// Get the modal
var span = document.getElementsByClassName("close")[0];
var myModal = document.getElementById('myModal');
$('.close').click(function() {
  $('#myModal').hide();
  $('.modal-content').remove();
});
window.onclick = function(event) {
  if (event.target == myModal) {
    myModal.style.display = "none";
    $('#myModal').empty();

  }
}
