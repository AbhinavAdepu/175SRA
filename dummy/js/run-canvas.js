currentRow = 0;
currentColumn = 0;
count=0;
score=0;
jumped1=0;
jumped2=0;
jumped3=0;
walk_mode="right";
$(document).ready(function()
{
	   document.getElementById("empty_div").addEventListener('touchstart',down_swipe1,false);
       document.getElementById("empty_div").addEventListener('touchmove',move_swipe1,false);
       document.getElementById("empty_div").addEventListener('touchend',up_swipe1,false);
	   
		 document.oncontextmenu=new Function("return false") 
		 $("#empty_div1").bind("click",function(e){rightclick();});
         $("#empty_div2").bind("click",function(e){leftclick();});
         $("#empty_div").bind("dblclick",function(e){jump();});
});
function down_swipe1(e){e.preventDefault();down_x1=e.touches[0].pageX;}
function move_swipe1(e){e.preventDefault();up_x1=e.touches[0].pageX;}
function up_swipe1(e){do_work1();}
function do_work1()
{
	if ((down_x1-up_x1)>20){leftclick();}
    if ((up_x1-down_x1)>20){rightclick();}
    //if ((down_x1-up_x1)<=2){jump();}
}
function MoveSprite() 
{
var ximages =8;
var yimages = 1;
count=count+1;
    var imgWidth = $("#kik").width()/ximages;
    var imgHeight =  $("#kik").height()/yimages;
    $("#spritesheet").css("width",imgWidth);
    $("#spritesheet").css("height",imgHeight);
        
		if (walk_mode=="right") 
	{
		  currentColumn++;
	}
	if (walk_mode=="left") 
	{
		  currentColumn--;
	}
        if (currentColumn == ximages) {
            currentColumn = 0;
            if (currentRow == yimages-1) 
            {
                currentRow = 0;
            }
            else 
            {
                currentRow++;
            }
        }
    $("#spritesheet").css("backgroundPosition", -imgWidth * currentColumn + "px " + -imgHeight * currentRow + "px");
    check_togo=$(".myclass0").offset().left-$(".clouds").offset().left;
    if(check_togo>=400&&check_togo<=500)
    {
    }
    //console.log(check_togo);
   if(check_togo<=-64&&check_togo>=-80) 
	{
		$(".myclass3").css("background-image","url('images/common/cube_animation.gif')");
		setTimeout(loadvocabulary,1300);
	    clearInterval(MoveSprite);		
	}    
	
    if(check_togo<=800&&check_togo>=608)
	{
		rightclick();
	}	
}
function loademptybox() 
{
  $("#show_emptybox").show();
}
function clear() 
{
}
document.onkeydown=function(e)
{
var e=window.event || e
var keyunicode=e.charCode||e.keyCode
	if(keyunicode == 37)
	{
		leftclick(e);
	}
	else if (keyunicode == 39)
	{
		rightclick(e);
	}
	else if (keyunicode == 38)
	{
		jump(e);
	}
}
function jump()
{
	$("#spritesheet").animate({top:"240px"},200);
	$("#spritesheet").animate({top:"331px"},200);
    jump_value=$(".myclass0").offset().left-$(".clouds").offset().left;
    //console.log(jump_value);
	if(jump_value<=440&&jump_value>=380)
	{
		if(jumped1==0)
		{
		$(".myclass0").css("background-image","url('images/common/red_animation.gif')");
		score=score+10;
		jumped1=jumped1+1;
		}
	}
	if(jump_value<=284&&jump_value>=212)
	{
		if(jumped2==0)
		{
		$(".myclass1").css("background-image","url('images/common/green_animation.gif')");
		score=score+10;
		jumped2=jumped2+1;
		}
	}
	if(jump_value<=128&&jump_value>=32)
	{
		if(jumped3==0)
		{
		$(".myclass2").css("background-image","url('images/common/red1_animation.gif')");
		score=score+10;
		jumped3=jumped3+1;
		}
	}
	
	str=score.toString();
	var n=str.split("");
	$("#p5","#canvas").text(n[0]);
	$("#points","#canvas").val(n[0]);
	$("#p5","#container").text(n[0]);
	$("#points","#container").val(n[0]);
	$("#p5","#flip").text(n[0]);
	$("#points","#flip").val(n[0]);
}
function leftclick() 
{
	walk_mode="left";
 	$("#spritesheet").css("background-image",'url("images/common/manrun_left.png")');
	$("#marquee_direction").attr("direction","right"); 
}
function rightclick() 
{
  	walk_mode="right";
   	$("#spritesheet").css("background-image",'url("images/common/man-run.png")');
   	$("#marquee_direction").attr("direction","left"); 
}
function current1() 
{
	if (walk_mode=="right") 
	{
		  return current-4;
	}
	if (walk_mode=="left") 
	{
		  return current+4;
	}

}
	var scrollSpeed = 18;
	var current = 0;
	var direction = 'h';
	function bgscroll()
	{
	    current=current1();
	    // move the background with backgrond-position css properties
	    jQuery('div.clouds').css("backgroundPosition", (direction == 'h') ? current+"px 0" : "0 " + current+"px");
	}	 	