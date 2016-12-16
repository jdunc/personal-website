var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  itemSelector: '.grid-item',
  columnWidth: 200
});
var msnry = new Masonry( '.grid', {
});
$('img').each(function(i) {
  $(this).delay(i * 400).animate({
    opacity: 1,
  }, 2000, function() {
  });
});
$('h1').fadeIn(2000);
$('h1').textillate({ in: { effect: 'flipInX', delayScale: 3,
} });

//modal content and arrows
$('.grid-item').mouseenter(
  function(){
    console.log('hovered');
    console.log($(event)[0]['target']);
});
$('.grid-item').click(
  function(){
    console.log($(event)[0]['target']);
    var selectedImg = $(event)[0]['target'];
    $('.modal').append('<div class="modal-content"><a class="previous" target="blank" onclick="displayPrevious()"><</a>&nbsp&nbsp&nbsp</div>');
    $(selectedImg).clone().appendTo('.modal-content');
    // $('.modal > img').addClass('modal-content');
    $('.modal-content').append('&nbsp&nbsp&nbsp<a class="next" onclick="displayNext()">></a>');
    $('#myModal').show();
  });

function displayNext(){
  var path1 = $('.modal-content > img')[0]['src'];
  var newpath = path1.split('assets');
  var currentImage = $(`.grid-item > img[src='assets${newpath[1]}']`);
  var nextImage = $(currentImage).parent().next().children();
  console.log($('.previous'), 'previous selector');
  if(nextImage.length > 0){
    $('.modal-content img').remove();
    if($('.previous').length > 0){
      $('.previous').after(nextImage.clone());
    } else {
      $('.next').before(`<a class="previous" target="blank" onclick="displayPrevious()"><</a>`);
      console.log('putting before next');
      console.log(nextImage.clone());
      $('.previous').after(nextImage.clone());
    }
  }
}

function displayPrevious(){
  var path1 = $('.modal-content > img')[0]['src'];
  var newpath = path1.split('assets');
  var currentImage = $(`.grid-item > img[src='assets${newpath[1]}']`);
  var nextImage = $(currentImage).parent().prev().children();
  console.log($(nextImage).parent().prev(), 'nextone');
  if(nextImage.length > 0){
    $('.modal-content img').remove();
    $('.previous').after(nextImage.clone());
    if($(nextImage).parent().prev().length === 0 ){
      $('.previous').remove();
    }
  }
}

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
