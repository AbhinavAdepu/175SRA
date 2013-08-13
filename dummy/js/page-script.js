var screenId_ref;
  var ua = navigator.userAgent;
  var checker = {
			apple: ua.match(/(iPhone|iPod|iPad)/),
			android: ua.match(/Android 3.2/),
			macintosh: ua.match(/Macintosh/),
			ie: ua.match(/MSIE/)
		};

   function loadflip()
   {
   		inits();
 		jQuery('#container').hide();
		jQuery('#flip').show();
		
		 if (checker.apple) {
		 jQuery('.top','#flip').show();
         jQuery('.top','#flip').css({ 'right': '0px', 'left': '' }).animate({'right' : '260px'});
   	   }
	   else {
		   jQuery('.top','#flip').show();
		   jQuery('.top','#flip').css({ 'right': '0px', 'left': '' }).animate({'right' : '260px'});                    
	   }
	   //17-1
	   //demo bg audio
	   var bgaudio="FLEX_ER_L17_A5_VO1";
	    screenId_ref="#17-3-demo1-audio";
	    $("#active_1").addClass("active");
	   loadNextAudio(bgaudio);
		
		setTimeout(function() 
		{
		jQuery('#flip').show();
		jQuery('#flip').css({ 'bottom': '-20px'}).animate({'bottom' : '-10px'});  
		}, 2000);
		jQuery(".replay").click(function() {
				replay=true;	
				isEnded=false;
				$("#retrybutton,#finishbutton,#nextbutton").animate({marginTop:"420px"},400);
					oAudio.play();
				jQuery('.collapse').show();	
				hideReplay();
				showManAnimation();		
			});
   }  