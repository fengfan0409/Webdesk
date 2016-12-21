function startTime()
{
    var today=new Date()
    var h=today.getHours()
    var m=today.getMinutes()
    var s=today.getSeconds()
// add a zero in front of numbers<10
    m=checkTime(m)
    s=checkTime(s)
    document.getElementById('dayTime').innerHTML=h+":"+m+":"+s
    t=setTimeout('startTime()',500)
}

function checkTime(i)
{
    if (i<10)
    {i="0" + i}
    return i
}
$(function(){
    $(document).ready(function(){
        $("#loading").hover(function(){
            $(this).css({cursor:"wait"})
        })
        $("#loading").delay(3000).fadeOut("slow");
    },3000,function(){
        $("#loading").hide();

    })
    $("*").mousedown(function(e){
//                alert(e.which) // 1 = 鼠标左键 left; 2 = 鼠标中键; 3 = 鼠标右键
        return false;//阻止链接跳转

    })
    $("#desk ul,.bottom").mousedown(function(e){
        if(1 == e.which){
            $("#bottom-set,#bg-set").hide()


        }
    })
    $(".bottom").mousedown(function(e){
        if(3 == e.which){
//                    alert("这 是右键单击事件");
//                    $(this).css({background:" none repeat scroll 0 0 rgba(124,201,252, 0.9)"})
            var div = $("#bottom-set");
            if(div.is(":hidden")){
                div.show()

//       div.style.left=document.body.scrollLeft+event.clientX+10;  
//       div.style.top=document.body.scrollLeft+event.clientY+10;  
                div.css("left",document.body.scrollLeft+event.clientX+1);
                div.css("top",document.body.scrollLeft+event.clientY-200);
                div.css("background-color","#EFF7FE");
            }else{
                div.hide();
            }}

//                }else if(1 == e.which){
////                    alert("这 是左键单击事件");
//
//
//                }
    })
    $("#desk ul").mousedown(function(e){
        if(3 == e.which){
//                    alert("这 是右键单击事件");
//                    $(this).css({background:" none repeat scroll 0 0 rgba(124,201,252, 0.9)"})
            var div = $("#bg-set");
            if(div.is(":hidden")){
                div.show()

//       div.style.left=document.body.scrollLeft+event.clientX+10;  
//       div.style.top=document.body.scrollLeft+event.clientY+10;  
                div.css("left",document.body.scrollLeft+event.clientX+1);
                div.css("top",document.body.scrollLeft+event.clientY+1);
                div.css("background-color","#EFF7FE");
            }else{
                div.hide();
            }}

//                }else if(1 == e.which){
////                    alert("这 是左键单击事件");
//
//
//                }
    })
    $("#bottom-set li").click(function(){
        var bbg=$(this).attr("style");
//                alert(bbg);
        $(".bottom").attr("style",bbg)
    })
//  $("#bg-set img").hover(function(){
//      $(this).animate({width:600,height:370,position:"absolute",marginLeft:"-50px",marginTop:"0"},0).siblings("img").hide()
//  },function(){
//      $(this).animate({width:162,height:97,position:"relative",marginLeft:"0px",marginTop:"0px"},0).siblings("img").show()
//  })

    $("#bg-set img").click(function(){
        var dbg=$(this).attr("src");
//                alert(dbg)
        $("body").attr("style","background:url("+dbg+")no-repeat scroll center top transparent;");
    })
    $("#desk ul li").hover(function(){
        $(this).find("em").css("display","block");
    },function(){
        $(this).find("em").hide()
    });
    $("#desk ul li:not(.wy-music)").click(function(){
        var n=$(this).attr("title");
//                alert(n);
//                var c=$(this).attr("class");
//                alert(c)
        var p=$(this).find("img").attr("src");
//                alert(p)
        $(".bottom-ul h2").text(n);
        $(".bottom-ul li img").attr("src",p)
        $(".bottom-ul").show();
        $(this).next("div").show().children("div").show().width("0px");
        $(".title-frame").animate({width:"1158px"},300); $(".window-frame").animate({width:"1200px"},300);

    })
    $("#desk ul li#nba").click(function(){
        $(this).next("div").find("iframe").attr("src","nba.html");

    })
    $("#desk ul li#douyu").click(function(){
        $(this).next("div").find("iframe").attr("src","douyu.html");
    })
     $("#desk ul li#web_mv").click(function(){
        $(this).next("div").find("iframe").attr("src","webmv/music.html");
    })
    $("#close-nba").click(function(){
        $("#frame-nba").attr("src","")
    })
    $("#close-dy").click(function(){
        $("#frame-dy").attr("src","")
    })
     $("#close-mv").click(function(){
        $("#frame-mv").attr("src","")
    })






    $(".close-window").click(function(){
        $(".window").hide();
        $(".bottom-ul").hide()
        $(".window").find(".window-frame").css({width:"1200px"});
        $(".window").find(".title-frame").css({width:"1158px"})
    })
    $(".max-small").click(function(){
        $(".window").find(".window-frame").css({width:"1200px"});
        $(".window").find(".title-frame").css({width:"1158px"})
    })
    $(".max-big").click(function(){
        $(".window").find(".window-frame").css({width:"100%"});
        $(".window").find(".title-frame").css({width:"98%"})
    })
    $(".reload").click(function(){
//                $("iframe").frame.reload()
    })
//            var timeout = '';
//            $('body').mouseover(function(){
//                timeout = setTimeout(function(){
////                    alert('2秒');
//                    var node=$(".window");
//
//                    $("#window-safe").show()
//                },3000);
//            })
//
//            $('body').mouseout(function(){
//                clearTimeout(timeout);
//                $("#window-safe").hide()
//
//            })
    $(".leave").click(function(){
        $("#window-safe").show()
    })
    $('#window-safe').click(function(){

        $(this).hide()
        $(".bottom-ul").hide()

    })
    $(".wy-music").click(function(){
        $(".my-music").show()
    })
    $(".close-music").click(function(){
        $(".my-music").hide()
    })
 
    





})