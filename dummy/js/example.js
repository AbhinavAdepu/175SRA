answerorder=["i","a","was","said","of"];
questionnumber=1;
chances_for_user=0;
demo_answer_value=false;
logic=0;
logic1=0;
check_user_try=true;
scoreboard=0;
image_showing=false;
$(document).ready(function()
{
	    $("#demo_block").css("visibility","hidden");
	    $("#question_block").css("visibility","visible");
	    $("#i,#said,#a,#of,#was").bind("click",onboxclick);
	    $(".box1").hide();
	    jQuery("#checkbutton").click(function() 
		{
			if (check_user_try) 
		{
			check_user_try=false;
			replay=false;	  
		if (uservalue==answerorder[questionnumber-1])
	  {
	  	
		chances_for_user=0;
		$("#checkbutton").animate({marginTop:"420px"},400);  
		$("#i,#said,#a,#of,#was").css("background-image", "url(images/whiteblock.png)");
		$('#pp1,#pp2,#pp3,#pp4,#pp5').css("visibility","hidden");
		childid=$("#"+uservalue).children().get(0).id;
		$('#'+childid).css("visibility","visible");
		$('#'+uservalue).css("background-image", "url(images/green.png)");
		if (answerorder[questionnumber-1]=="i") 
		{
		    loadNextAudio("FLEX_ER_L17_A5_VO2");
            audio_mode_type="correct";
		   scoreboard=scoreboard+100;
		}
		if (answerorder[questionnumber-1]=="a") 
		{
		    loadNextAudio("FLEX_ER_L17_A5_VO20");
            audio_mode_type="correct";
		    scoreboard=scoreboard+100;
		}
		if (answerorder[questionnumber-1]=="was") 
		{
		    loadNextAudio("FLEX_ER_L17_A5_VO38");
            audio_mode_type="correct";
		   scoreboard=scoreboard+50;
		}
			if (answerorder[questionnumber-1]=="said") 
		{
		    loadNextAudio("FLEX_ER_L17_A5_VO56");
            audio_mode_type="correct";
		   scoreboard=scoreboard+50;
		}
		if (answerorder[questionnumber-1]=="of") 
		{
		    loadNextAudio("FLEX_ER_L17_A5_VO74");
            audio_mode_type="correct";
		    scoreboard=scoreboard+50;
		}
		   total_score=scoreboard+score;
		   if (scoreboard<100&&total_score<100) 
		   {
		   	var str=scoreboard.toString();
			var end_score=str.split("");
		   $("#q3","#flip").val("0");
		   $("#q2","#flip").val(end_score[0]);
		   $("#q1","#flip").val(end_score[1]);
			total_score=scoreboard+score;
			var str_1=total_score.toString();
			var total_score_split=str_1.split("");
		   $("#p4","#flip").text("0");
		   $("#p5","#flip").text(total_score_split[0]);
		   $("#p6","#flip").text(total_score_split[1]);
		   }
		   else if(scoreboard<100&&total_score>=100){
				var str=scoreboard.toString();
				var end_score=str.split("");
			   $("#q3","#flip").val("0");
			   $("#q2","#flip").val(end_score[0]);
			   $("#q1","#flip").val(end_score[1]);
			   var str_1=total_score.toString();
				var total_score_split=str_1.split("");
			   $("#p4","#flip").text(total_score_split[0]);
			   $("#p5","#flip").text(total_score_split[1]);
			   $("#p6","#flip").text(total_score_split[2]);
		   }
		   else if(scoreboard>=100&&total_score>=100) 
		   {
			   var str=scoreboard.toString();
				var end_score=str.split("");
			    $("#q3","#flip").val(end_score[0]);
			   $("#q2","#flip").val(end_score[1]);
			   $("#q1","#flip").val(end_score[2]);
				var str_1=total_score.toString();
				var total_score_split=str_1.split("");
			   $("#p4","#flip").text(total_score_split[0]);
			   $("#p5","#flip").text(total_score_split[1]);
			   $("#p6","#flip").text(total_score_split[2]);
		   }		   
	}
	else
	{ 
			chances_for_user=chances_for_user+1;
		//first try
		if (chances_for_user==1) 
		{
			if(questionnumber==1){
				if(uservalue=='said')loadNextAudio("FLEX_ER_L17_A5_VO3");
				else if(uservalue=='a')loadNextAudio("FLEX_ER_L17_A5_VO4");
				else if(uservalue=='of')loadNextAudio("FLEX_ER_L17_A5_VO5");
				else if(uservalue=='was')loadNextAudio("FLEX_ER_L17_A5_VO6");
			}
			if(questionnumber==2){
				
				if(uservalue=='i')loadNextAudio("FLEX_ER_L17_A5_VO21");
				else if(uservalue=='said')loadNextAudio("FLEX_ER_L17_A5_VO23");
				else if(uservalue=='of')loadNextAudio("FLEX_ER_L17_A5_VO24");
				else if(uservalue=='was')loadNextAudio("FLEX_ER_L17_A5_VO22");
				
			}
			if(questionnumber==3){
				if(uservalue=='i')loadNextAudio("FLEX_ER_L17_A5_VO39");
				else if(uservalue=='said')loadNextAudio("FLEX_ER_L17_A5_VO40");
				else if(uservalue=='a')loadNextAudio("FLEX_ER_L17_A5_VO41");
				else if(uservalue=='of')loadNextAudio("FLEX_ER_L17_A5_VO42");
			}
			if(questionnumber==4){
				if(uservalue=='i')loadNextAudio("FLEX_ER_L17_A5_VO57");
				else if(uservalue=='a')loadNextAudio("FLEX_ER_L17_A5_VO58");
				else if(uservalue=='of')loadNextAudio("FLEX_ER_L17_A5_VO59");
				else if(uservalue=='was')loadNextAudio("FLEX_ER_L17_A5_VO60");
			}
			if(questionnumber==5){
				if(uservalue=='i')loadNextAudio("FLEX_ER_L17_A5_VO75");
				else if(uservalue=='said')loadNextAudio("FLEX_ER_L17_A5_VO76");
				else if(uservalue=='a')loadNextAudio("FLEX_ER_L17_A5_VO77");
				else if(uservalue=='was')loadNextAudio("FLEX_ER_L17_A5_VO78");
			}
			audio_mode_type="wrong";
		}
		//Second try
		if (chances_for_user==2) 
		{
				if(questionnumber==1){
				if(uservalue=='said')loadNextAudio("FLEX_ER_L17_A5_VO7");
				else if(uservalue=='a')loadNextAudio("FLEX_ER_L17_A5_VO9");
				else if(uservalue=='of')loadNextAudio("FLEX_ER_L17_A5_VO11");
				else if(uservalue=='was')loadNextAudio("FLEX_ER_L17_A5_VO13");
			}
			if(questionnumber==2){
				if(uservalue=='i')loadNextAudio("FLEX_ER_L17_A5_VO25");
				else if(uservalue=='said')loadNextAudio("FLEX_ER_L17_A5_VO29");
				else if(uservalue=='of')loadNextAudio("FLEX_ER_L17_A5_VO31");
				else if(uservalue=='was')loadNextAudio("FLEX_ER_L17_A5_VO27");
			}
			if(questionnumber==3){
				if(uservalue=='i')loadNextAudio("FLEX_ER_L17_A5_VO43");
				else if(uservalue=='said')loadNextAudio("FLEX_ER_L17_A5_VO45");
				else if(uservalue=='a')loadNextAudio("FLEX_ER_L17_A5_VO47");
				else if(uservalue=='of')loadNextAudio("FLEX_ER_L17_A5_VO49");
			}
			if(questionnumber==4){
				if(uservalue=='i')loadNextAudio("FLEX_ER_L17_A5_VO61");
				else if(uservalue=='a')loadNextAudio("FLEX_ER_L17_A5_VO63");
				else if(uservalue=='of')loadNextAudio("FLEX_ER_L17_A5_VO65");
				else if(uservalue=='was')loadNextAudio("FLEX_ER_L17_A5_VO67");
			}
			if(questionnumber==5){
				if(uservalue=='i')loadNextAudio("FLEX_ER_L17_A5_VO79");
				else if(uservalue=='said')loadNextAudio("FLEX_ER_L17_A5_VO81");
				else if(uservalue=='a')loadNextAudio("FLEX_ER_L17_A5_VO83");
				else if(uservalue=='was')loadNextAudio("FLEX_ER_L17_A5_VO85");
			}
			audio_mode_type="wrong";
		}
		//Third try
		if (chances_for_user==3) 
		{
				if(questionnumber==1){
				if(uservalue=='said')loadNextAudio("FLEX_ER_L17_A5_VO15");
				else if(uservalue=='a')loadNextAudio("FLEX_ER_L17_A5_VO16");
				else if(uservalue=='of')loadNextAudio("FLEX_ER_L17_A5_VO17");
				else if(uservalue=='was')loadNextAudio("FLEX_ER_L17_A5_VO18");
			}
			if(questionnumber==2){
				if(uservalue=='i')loadNextAudio("FLEX_ER_L17_A5_VO33");
				else if(uservalue=='said')loadNextAudio("FLEX_ER_L17_A5_VO35");
				else if(uservalue=='of')loadNextAudio("FLEX_ER_L17_A5_VO36");
				else if(uservalue=='was')loadNextAudio("FLEX_ER_L17_A5_VO34");
			}
			if(questionnumber==3){
				if(uservalue=='i')loadNextAudio("FLEX_ER_L17_A5_VO51");
				else if(uservalue=='said')loadNextAudio("FLEX_ER_L17_A5_VO52");
				else if(uservalue=='a')loadNextAudio("FLEX_ER_L17_A5_VO53");
				else if(uservalue=='of')loadNextAudio("FLEX_ER_L17_A5_VO54");
			}
			if(questionnumber==4){
				if(uservalue=='i')loadNextAudio("FLEX_ER_L17_A5_VO69");
				else if(uservalue=='a')loadNextAudio("FLEX_ER_L17_A5_VO70");
				else if(uservalue=='of')loadNextAudio("FLEX_ER_L17_A5_VO71");
				else if(uservalue=='was')loadNextAudio("FLEX_ER_L17_A5_VO72");
			}
			if(questionnumber==5){
				if(uservalue=='i')loadNextAudio("FLEX_ER_L17_A5_VO87");
				else if(uservalue=='said')loadNextAudio("FLEX_ER_L17_A5_VO88");
				else if(uservalue=='a')loadNextAudio("FLEX_ER_L17_A5_VO89");
				else if(uservalue=='was')loadNextAudio("FLEX_ER_L17_A5_VO90");
			}
		    audio_mode_type="correct";
		}
		 $("#checkbutton").animate({marginTop:"420px"},400);  
	    }
	   }
		});
});
function onboxclick()
{
	jQuery('.replay').hide();
	uservalue=$(this).attr("id");
	$("#i,#said,#a,#of,#was").css("background-image", "url(images/planeblock.png)");
    $('#'+uservalue).css("background-image", "url(images/greenblock.png)");
    var childs=$("#"+uservalue).children().get(0).id;
    if(childs=="pp1"){$('#pp2,#pp3,#pp4,#pp5').css("color","#484848");}
    if(childs=="pp2"){$('#pp1,#pp3,#pp4,#pp5').css("color","#484848");}
    if(childs=="pp3"){$('#pp1,#pp2,#pp4,#pp5').css("color","#484848");}
    if(childs=="pp4"){$('#pp1,#pp2,#pp3,#pp5').css("color","#484848");}
    if(childs=="pp5"){$('#pp1,#pp2,#pp3,#pp4').css("color","#484848");}
    $("#"+childs).css("color","black");
   if($("#checkbutton").css("marginTop")=="332px"){}
    else{showcheck();}
}
function showcheck()
{
	check_user_try=true;
	$("#checkbutton").animate({marginTop:"332px"},400);
}
function showretry()
{
	check_user_try=true;
	$("#retrybutton").animate({marginTop:"332px"},400);
}
function shownext()
{
	check_user_try=true;
	$("#i,#said,#a,#of,#was").unbind("click");
	$("#i,#said,#a,#of,#was").css("cursor","default");
	if (questionnumber==5) 
	{$("#finishbutton").animate({marginTop:"332px"},400);}
	else{$("#nextbutton").animate({marginTop:"332px"},400);}
}
function retrydown()
{
jQuery('.replay').hide(400);
jQuery('.replay').animate({'bottom' : '-20px'},400);  
$("#retrybutton").animate({marginTop:"420px"},400);  
$("#i,#said,#a,#of,#was").bind("click",onboxclick);
$("#i,#said,#a,#of,#was").css("cursor","pointer");
}
function nextdown()
{
jQuery('.replay').hide(400);
 jQuery('.replay').animate({'bottom' : '-20px'},400);  
$("#retrybutton").css("marginTop","420px");  
$("#nextbutton").animate({marginTop:"420px"},400); 
$("#i,#said,#a,#of,#was").bind("click",onboxclick); 
$("#i,#said,#a,#of,#was").css("cursor","pointer");

}
function deactivate_click()
{
	if ($("#retrybutton").css("marginTop")=="420px"||$("#nextbutton").css("marginTop")=="420px"||$("#finishbutton").css("marginTop")=="420px") 
	{
		$("#i,#said,#a,#of,#was").bind("click",onboxclick);
		$("#i,#said,#a,#of,#was").css("cursor","pointer");
	}
	if ($("#retrybutton").css("marginTop")=="332px"||$("#nextbutton").css("marginTop")=="332px"||$("#finishbutton").css("marginTop")=="332px")
	{
		$("#i,#said,#a,#of,#was").unbind("click");
		$("#i,#said,#a,#of,#was").css("cursor","default");
	}
}
function retrys()
{
	//check_user_try=true;
	retrydown();
	$('#pp1,#pp2,#pp3,#pp4,#pp5').css("visibility","visible");
	$('#pp1,#pp2,#pp3,#pp4,#pp5').css("color","#484848");
	$("#i,#said,#a,#of,#was").css("background-image","url(images/planeblock.png)");
}
function nexts()
{
	
	  if (check_user_try) 
		{
			check_user_try=false;
	    nextdown();
	    replay=false;
	    demo_answer_value=false;
	    $("#checkbutton").css("marginTop","420px");  
	    chances_for_user=0;
	    $("#i,#said,#a,#of,#was").bind("click",onboxclick);
	    $('#pp1,#pp2,#pp3,#pp4,#pp5').css("color","#484848");
		questionnumber=questionnumber+1;
		if (questionnumber==2) 
		{	
		$("#active_2").addClass("active");
		screenId_ref="#17-3-cancel-audio";
	  
	    audio_mode_type="next";
	    setTimeout(function()
	    {
		$("#demo_block").css("visibility","hidden");
	    $("#question_block").css("visibility","visible");  loadNextAudio("FLEX_ER_L17_A5_VO19");
		jQuery('.aside-right').css({ 'right': '-200px', 'left': '' }).animate({'right' : '0px'});
		$('#pp1,#pp2,#pp3,#pp4,#pp5').css("visibility","visible");
	    $("#i,#said,#a,#of,#was").css("background-image","url(images/planeblock.png)");	
	    },400);
		}
		if (questionnumber==3) 
		{	
		$("#active_3").addClass("active");
		screenId_ref="#17-3-cancel-audio";
	   
	    audio_mode_type="next";
	    setTimeout(function()
        {
		$("#demo_block").css("visibility","hidden"); loadNextAudio("FLEX_ER_L17_A5_VO37");
	    $("#question_block").css("visibility","visible");
		jQuery('.aside-right').css({ 'right': '-200px', 'left': '' }).animate({'right' : '0px'});
		$('#pp1,#pp2,#pp3,#pp4,#pp5').css("visibility","visible");
	    $("#i,#said,#a,#of,#was").css("background-image","url(images/planeblock.png)");	
	    },400);
		}
		if (questionnumber==4) 
		{	
		$("#active_4").addClass("active");
		screenId_ref="#17-3-cancel-audio";
	   
	    audio_mode_type="next";
	    setTimeout(function()
	    {
		$("#demo_block").css("visibility","hidden");
		$("#question_block").css("visibility","visible"); loadNextAudio("FLEX_ER_L17_A5_VO55");
		jQuery('.aside-right').css({ 'right': '-200px', 'left': '' }).animate({'right' : '0px'});
		$('#pp1,#pp2,#pp3,#pp4,#pp5').css("visibility","visible");
	    $("#i,#said,#a,#of,#was").css("background-image","url(images/planeblock.png)");	
	    },400);
		}
		if (questionnumber==5) 
		{
			$("#active_5").addClass("active");
		screenId_ref="#17-3-cancel-audio";
	    
	    audio_mode_type="next";
	    setTimeout(function()
	    {
		$("#demo_block").css("visibility","hidden");
		$("#question_block").css("visibility","visible");loadNextAudio("FLEX_ER_L17_A5_VO73");
		jQuery('.aside-right').css({ 'right': '-200px', 'left': '' }).animate({'right' : '0px'});
		$('#pp1,#pp2,#pp3,#pp4,#pp5').css("visibility","visible");
	    $("#i,#said,#a,#of,#was").css("background-image","url(images/planeblock.png)");	
	    },400);
		}
		}
}
function finishs()
{
	hideReplay();
	$("#finishbutton").animate({marginTop:"420px"},400);  
	setTimeout(function(){window.location.href="../17-6/index.html";},400);
}