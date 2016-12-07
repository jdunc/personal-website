// minor tweaks to https://codepen.io/ccrch/pen/GgPLVW for this full div vid code
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
}
else {
	var tag = document.createElement('script');
			tag.src = 'https://www.youtube.com/player_api';
	var firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	var tv,
			playerDefaults = {autoplay: 1, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 1, iv_load_policy: 3, playlist: 'mBuMPzeTnCA', loop: 1};
	var vid =
				{'videoId': 'mBuMPzeTnCA', 'suggestedQuality': 'hd720'};

	function onYouTubePlayerAPIReady(){
	  tv = new YT.Player('tv', {events: {'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange}, playerVars: playerDefaults});
		$('#tv').hide();
	}

	function onPlayerReady(){
	  tv.loadVideoById('mBuMPzeTnCA');
	  tv.mute();
		vidRescale();
		setTimeout(function(){
			$('#tv').fadeIn(2000);
		}, 1000);


		// setTimeout(function(){$('.tv').show();},1000);


	}

	function onPlayerStateChange(e) {
	  if (e.data === 1){
	    $('#tv').addClass('active');
	    $('.hi em:nth-of-type(2)').html(currVid + 1);
	  } else if (e.data === 2){
	    $('#tv').removeClass('active');
	    if(currVid === vid.length - 1){
				tv.loadVideoById('mBuMPzeTnCA');
				tv.seekTo(1);
				tv.playVideo();
			} else {
	      currVid = 0;
	    }
	    tv.loadVideoById('mBuMPzeTnCA');
			tv.seekTo(1);
			tv.playVideo();
			e.target.playVideo();

	  } else if(e.data === 0){
			tv.loadVideoById('mBuMPzeTnCA');
			tv.seekTo(1);
			tv.playVideo();
		}
	}

	function vidRescale(){

	  var w = $(window).width(),
	    h = $(window).height();

	  if (w/h > 16/9){
	    tv.setSize(w, w/16*9);
	    $('.tv .screen').css({'left': '0px'});
	  } else {
	    tv.setSize(h/9*16, h);
	    $('.tv .screen').css({'left': -($('.tv .screen').outerWidth()-w)/2});
	  }
	}

	$(window).on('load resize', function(){
	  vidRescale();
	});
	$(document).on('load', function(){
	  vidRescale();
	});

}
