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
var myModal_bdv = document.getElementById('myModal_bdv');
$('#myBtn_bdv').click(function(){
    myModal_bdv.style.display = "block";
})
var myModal_gald = document.getElementById('myModal_gald');
$('#myBtn_gald').click(function(){
    myModal_gald.style.display = "block";
})
var myModal_resume = document.getElementById('myModal_resume');
$('.img_resume').click(function(){
    myModal_resume.style.display = "block";
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
  else if (event.target == myModal_bdv) {
    myModal_bdv.style.display = "none";
  }   else if (event.target == myModal_resume) {
      myModal_resume.style.display = "none";
  }
}
$('#resume_text').click(function(){
  window.open('assets/css/images/jordan-duncan-2016.jpg');
})
