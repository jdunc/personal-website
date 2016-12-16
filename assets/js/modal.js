// Get the modal
var span = document.getElementsByClassName("close")[0];
var emap_modal = document.getElementById('myModal_emap');
$('#myBtn_emap').click(function(){
    emap_modal.style.display = "block";
})
var myModal_amo = document.getElementById('myModal_amo');
$('#myBtn_amo').click(function(){
    myModal_amo.style.display = "block";
})
var myModal_sfm = document.getElementById('myModal_sfm');
$('#myBtn_sfm').click(function(){
    myModal_sfm.style.display = "block";
})
var myModal_gald = document.getElementById('myModal_gald');
$('#myBtn_gald').click(function(){
    myModal_gald.style.display = "block";
})
var myModal_resume = document.getElementById('myModal_resume');
$('.img_resume').click(function(){
    myModal_resume.style.display = "block";
});
var myModal_emo1 = document.getElementById('myModal_emotion1');
$('#myBtn_emo1').click(function(){
    myModal_emo1.style.display = "block";
});
var myModal_emo2 = document.getElementById('myModal_emotion2');
$('#myBtn_emo2').click(function(){
    myModal_emo2.style.display = "block";
});
var myModal_photo = document.getElementById('myModal_photography');
$('#myBtn_photo').click(function(){
    myModal_photography.style.display = "block";
});
var myModal_screens = document.getElementById('myModal_screens');
$('#myBtn_screens').click(function(){
    myModal_screens.style.display = "block";
});
$('.close').click(function() {
  $('.modal').hide();
});
window.onclick = function(event) {
  if (event.target == myModal_amo) {
    myModal_amo.style.display = "none";
  } else if (event.target == emap_modal) {
    emap_modal.style.display = "none";
  }else if (event.target == myModal_gald) {
    myModal_gald.style.display = "none";
  }
  else if (event.target == myModal_sfm) {
    myModal_sfm.style.display = "none";
  }   else if (event.target == myModal_resume) {
      myModal_resume.style.display = "none";
  } else if (event.target == myModal_emo2) {
      myModal_emo2.style.display = "none";
  } else if (event.target == myModal_emo1) {
      myModal_emo1.style.display = "none";
  } else if (event.target == myModal_photography) {
      myModal_photography.style.display = "none";
  } else if (event.target == myModal_screens) {
      myModal_screens.style.display = "none";
  }
}
$('#resume_text').click(function(){
  window.open('assets/css/images/jordan-duncan-2016.jpg');
})
