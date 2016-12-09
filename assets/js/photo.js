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
}, 3000, function() {
// Animation complete.
});
});
$('h1').fadeIn(2500);
$('h1').textillate({ in: { effect: 'flipInX', delayScale: 3,
} });
$('.grid-item').mouseenter(
 function(){
   console.log('hovered');
   console.log($(event)[0]['target']['id']);
 }
);
