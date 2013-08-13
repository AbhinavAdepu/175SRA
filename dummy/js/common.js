 var arg;
 var arg1;
 var arg2;
 var arg3;
 calls=1;
var isEnded = false; 
var isStart = false; 
audio_mode_type="";
var screenId;	
var replay=false;
var loop=false;
function loadcanvas(){
		init();
}
function loadvocabulary(){
   		jQuery('#canvas').hide();
		jQuery('.canvasHolder').hide();
		jQuery("body").addClass("overlaybg");
		jQuery('#container').show();
}
function loadNextAudio(src)
{
	oAudio.pause();
	isEnded=false;
	isStart=false;
	loop=false;
	jQuery('#audio1').attr('src' , 'audios/'+src+'.'+extension);	
	if (checker.apple) 
	{
		audio1.load();	
	}
	oAudio.play();
}
function canPlayThroughHandler()
{
	isEnded=false;
	showManAnimation();
}
function showManAnimation(){
	jQuery('.mananimation').show();
	jQuery('.man').hide();
}
function hideManAnimation(){
	jQuery('.mananimation').hide();
	jQuery('.man').show();
}
function progressHandler()
{
	var oAudio = document.getElementById('audio1');	
	var dif = oAudio.duration-oAudio.currentTime;
 
	 if (screenId=="#flip") 
	 {
		$("#i,#said,#a,#of,#was").unbind("click");
		$("#i,#said,#a,#of,#was").css("cursor","default");
	 }	
	if (checker.ie) {
		if(dif>=0 && dif<0.5 && isEnded==false){
			isEnded=true;
			endedHandler();
		}
	}else{
		if(oAudio.currentTime==oAudio.duration && isEnded==false){
			isEnded=true;
			endedHandler();
		}	
	}
	$("#i,#said,#a,#of,#was").unbind("click");
	$("#i,#said,#a,#of,#was").css("cursor","default");
}
function endedHandler()
{	
	hideManAnimation();
	if(loop == true){
		loopAudio();
	}
	if(screenId=='#charactercontent')
	{
			showSuccessMessage();
			if(replay==true){
			replay =false;
		}else
		{
			showReplay();
		}
	}
	if(screenId_ref=="#17-3-demo1-audio")
	{
		screenId_ref="finish";
		screenId="#flip";
		if(replay==true)
		{
			replay =false;
		}
		else
		{
			showReplay();
		}
	}
	if(audio_mode_type=="next")
	{
		if(replay==true)
		{
			replay =false;
		}
		else
		{
			showReplay();
		}
	}
		if(audio_mode_type=="correct")
	{
		shownext();
		if(replay==true)
		{
			replay =false;
		}
		else
		{
			showReplay();
		}
	}
	if(audio_mode_type=="wrong")
	{
		showretry();
		if(replay==true)
		{
			replay =false;
		}
		else
		{
			showReplay();
		}
	}
	if(chances_for_user==2) 
	{
		$('#pp1,#pp2,#pp3,#pp4,#pp5').css("color","#484848");
		$("#i,#said,#a,#of,#was").css("background-image", "url(images/planeblock.png)");
		var child_get_id=$("#"+answerorder[questionnumber-1]).children().get(0).id;
		$("#"+answerorder[questionnumber-1]).css("background-image","url(images/greenblock.png)");
		$("#"+child_get_id).css("color","black");
	}
	if(chances_for_user==3)
	{
		$("#i,#said,#a,#of,#was").css("background-image", "url('images/whiteblock.png')");
		$("#"+answerorder[questionnumber-1]).css("background-image", "url(images/green.png)");
		$('#pp1,#pp2,#pp3,#pp4,#pp5').css("visibility","hidden");
		var child_get_id=$("#"+answerorder[questionnumber-1]).children().get(0).id;
		$("#"+child_get_id).css("color","black");
		$("#"+child_get_id).css("visibility","visible");
	}
	setTimeout(deactivate_click,1200);
}
function loopAudio(){
	
	 oAudio = document.getElementById('audio1');	
	 oAudio.currentTime=0;
	 oAudio.play();	
	 isEnded=false; 
}
function showReplay()
{
    if (checker.apple) {
		jQuery('.replay',screenId).show();
		jQuery('.replay',screenId).css({ 'bottom': '-12px'}).animate({'bottom' : '-10px'}); 	
   	}
	else {
		jQuery('.replay',screenId).show();
		jQuery('.replay',screenId).css({ 'bottom': '-20px'}).animate({'bottom' : '-10px'});                   
	}	
}
function hideReplay()
{
	jQuery('.replay').hide();
}
function showSuccessMessage()
{
	jQuery('#successMessage',screenId).show();
	jQuery('#successMessage',screenId).animate({bottom: '0px'}, 800);	
	
}
function hideSuccessMessage(){
	jQuery('#successMessage',screenId).animate({bottom: '-100px'}, 1000);
}