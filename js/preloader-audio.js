
var tmp=0;
function preload_audio()
   {	  	
   		 
 
  window.applicationCache.addEventListener('checking',logEvent,false);
  window.applicationCache.addEventListener('noupdate',logEvent,false);
  window.applicationCache.addEventListener('downloading',logEvent,false);
  window.applicationCache.addEventListener('cached',logEvent1,false);
  window.applicationCache.addEventListener('updateready',logEvent,false);
  window.applicationCache.addEventListener('obsolete',logEvent,false);
  window.applicationCache.addEventListener('error',logEvent,false);
   window.applicationCache.addEventListener('progress',logEvent2,false);
		var myLoader = new html5Preloader();
		myLoader.addFiles('images/common/bg-main.jpg','images/common/bg-inner.jpg','images/common/brow_matrix.png','images/common/point-bg.png','images/common/head-bg.png','images/common/login-icon.png','images/common/man-run.png','images/common/man-stand.png','images/common/man-photo.png','images/common/arrow.png','images/common/cube.png','images/common/cube_animation.gif','images/common/green_stone_jerk.gif','images/common/red_stone_jerk.gif','images/common/manrun_left.png','images/common/balloon_red.png','images/common/red_animation.gif','images/common/red1_animation.gif','images/common/balloon_green.png','images/common/green_animation.gif','images/common/tool-close.png','images/common/tool-icon.gif','images/animation/doctor_sequence.png','images/animation/doctor_withmouth.png','images/animation/doctor_withoutmouth.png','images/button/check.png','images/button/check-hov.png','images/button/finish.png','images/button/finish-hov.png','images/button/next.png','images/button/next-hov.png','images/button/retry.png','images/button/retry-hov.png','images/button/replay.png','images/img-start.gif','images/green.png','images/greenblock.png','images/planeblock.png','images/whiteblock.png'); 
		// To shorten load times, you should always offer the .mp3 as a last alternative.
		myLoader.onfinish = function(){ 
		
		jQuery('.startarrow').show();
   };
		myLoader.onerror = function(e){alert('Error occured while loading '+this.loadingFile); return true; };
 }
 function logEvent(event) {
      console.log(event.type);
  }
  function logEvent2(event) {
  	tmp=tmp+1;
      console.log(event.type+"Event.File donloading "+(tmp));
       $("#status_progree").text(tmp+" of 503 Files is Downloading..");
  }
   function logEvent1(event) {
      
      $("#opacity_back").css("opacity","1");
      $("#progree_loader").css("display","none");
     
      
  }
 