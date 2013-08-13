jQuery.noConflict();
var oAudio;
 jQuery(document).ready(function() {
	 
	var browser = '';
	var browserVersion = 0;
	
	if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
		browser = 'Opera';
	} else if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
		browser = 'MSIE';
	} else if (/Navigator[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
		browser = 'Netscape';
	} else if (/Chrome[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
		browser = 'Chrome';
	} else if (/Safari[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
		browser = 'Safari';
		/Version[\/\s](\d+\.\d+)/.test(navigator.userAgent);
		browserVersion = new Number(RegExp.$1);
	} else if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
		browser = 'Firefox';
	}
	if(browserVersion === 0){
		browserVersion = parseFloat(new Number(RegExp.$1));
	}
	
	if((browser == "Firefox" && browserVersion > 7) || (browser == "Safari" && browserVersion >= 5)  || (browser == "Chrome" && browserVersion > 12)  || (browser == "MSIE" && browserVersion > 8))	
	
	{
      jQuery('body').jpreLoader('',preload_audio());
		
	  var ua = navigator.userAgent;
	  var checker = {
			apple: ua.match(/(iPhone|iPod|iPad)/),
			android: ua.match(/Android 3.2/),
			macintosh: ua.match(/Macintosh/)
		};
	   if (checker.apple) {
		jQuery('.startarrow').show();
   	   }
	   
	   jQuery('#canvas').show();
	   jQuery('#container').hide();
	   jQuery('#charactercontent').hide();
	   jQuery('#flip').hide();
	   jQuery('#question1').hide();
	   jQuery('#question2').hide();
	   jQuery('#question3').hide();
	// Check Sounds
	if(jQuery.browser.webkit ){
		extension= "mp3";
	}
	else if(jQuery.browser.msie){
		extension= "mp3";
	}     
	else{
		extension= "ogg";
	}
	
	 //load canvas
   	jQuery(".startarrow").click(function() {		
		bgaudio = "zoo";
		screenId = '#canvas';
		loop=true;
		jQuery("#audio1").bind('canplaythrough', canPlayThroughHandler);		
		oAudio  = document.getElementById("audio1");
		oAudio.addEventListener("timeupdate", progressHandler, true);
		oAudio.addEventListener("durationchange",function(){},false); 
		jQuery('#audio1').attr('src' , 'audios/'+bgaudio+'.'+extension);		
		oAudio.play();		
		// Canvas code Start
		jQuery('#withoutcanvas').hide();
		jQuery('.man-walk-h').hide();
		jQuery('.startarrow').hide();
		jQuery('.tooltip').hide();	
		jQuery('#canvas').removeClass("clouds-h").addClass("clouds");	
		setInterval("bgscroll()", scrollSpeed);
	    setInterval("MoveSprite()",100);
	    var box=document.createElement("marquee");
      	box.setAttribute("id","marquee_direction");
		box.setAttribute("behavior","scroll");
		box.setAttribute("scrollamount","12");
		box.setAttribute("scrolldelay","5");
		box.setAttribute("direction","left");
		box.setAttribute("align","center");
		box.setAttribute("height","350");
		box.setAttribute("width","1000");
        box.setAttribute("style","float:left;background:#;margin-top:150px;");
	     for (var i=0;i<4;i++)
		 {
		  var box_div=document.createElement("div");
			box_div.setAttribute("class","myclass"+i);
		   box.appendChild(box_div);
		 }
		 document.getElementById("mainbox").appendChild(box);
		jQuery('#canvas').show();		
		// Canvas code End		
	});
	jQuery(".tool-icon").click(function() {
		jQuery('.tooltip').fadeIn("slow");	
	});
	jQuery("#tooltip-close").click(function() {
		jQuery('.tooltip').fadeOut("slow");	
	});
	
}
else{
 jQuery('#canvas').hide();
 jQuery('#container').hide();
	   jQuery('#charactercontent').hide();
	   jQuery('#flip').hide();
	   jQuery('#question1').hide();
	   jQuery('#question2').hide();
	   jQuery('#question3').hide();
	   alert("Your Browser is not compatible to view this content. ");
	   jQuery('#browser').show();
}
});