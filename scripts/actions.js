Pace.on("done", function(){
    $("#note").animate({"opacity": "1" }, 500);
});


var s = slidr.create('slidr-api-demo', {
  breadcrumbs: true,
  keyboard: true,
  fade: false,
  overflow: true,
  before: function(e) { checkSlide(e.in.slidr); },
  after: function(e) { checkSlideOut(e.out.slidr); },
  transition: 'linear'
}).add('h', ['a','c','g','m','r','u'])
  .add('v', ['a','b'])
  .add('v', ['c','d','e','f'])
  .add('v', ['g','h','i','j','k','l'])
  .add('v', ['m','n','o','p','q'])
  .add('v', ['r','s','t'])
  .add('v', ['u','v','w','x'])
  .start();

window.addEventListener("keypress", checkKeyPressed, false);
var first=true;

function checkKeyPressed(e) {
	var unicode=e.charCode? e.charCode : e.keyCode
	var actualkey=String.fromCharCode(unicode)
	s.slide(actualkey);
    if(first==true){
        document.getElementById("myVideo").play();
        $("#video").animate({"opacity": "1" }, 500);
        $("#front").animate({"opacity": "1" }, 1000);
        $("#note").css({"display": "none"});
        first=false;
    }else if(first==false){
        if(actualkey != "a") swapStyleSheet('null.css');    
        $(".slidr-breadcrumbs").css({"opacity": "0.8"});
    }
}

function checkSlide(nSlide){
  switch(nSlide){
    case "a":
        if(first==false){
            swapStyleSheet('scripts/style2.css');
        }
        $("#video").css({"opacity": "1"});
        $(".slidr-breadcrumbs").animate({"opacity": "0" }, 500);
        $("#map").animate({"opacity": "0" }, 50);
        $("#earth").animate({ "opacity": "1"}, 2000);
        document.getElementById("myVideo").currentTime = 0;
        document.getElementById("myVideo").play();
    break;
    case "b":
        swapStyleSheet('null.css');
    break;
    case "c":
        swapStyleSheet('null.css');
    break;
    case "d":
        swapStyleSheet('null.css');
    break;
    case "e":
        swapStyleSheet('null.css');
    break;
    case "f":
        swapStyleSheet('null.css');
    break;
    case "g":
        swapStyleSheet('null.css');
        $(".g .textTop").css({"margin-top": "1025px"});
        $(function(){
            function slide(){
                $('.g .textTop').animate({'margin-top': '0px'}, 2000);
            }
            setTimeout(slide, 8000);
        });
        $(".g .titleBottom").click(function () { $('.g .textTop').animate({'margin-top': '0px'}, 500); });
    break;
    case "h":
        swapStyleSheet('null.css');
    break;
    case "i":
        swapStyleSheet('null.css');
        $(".i .textTop").css({"margin-top": "1025px"});
        $(function(){
            function slide(){
                $('.i .textTop').animate({'margin-top': '0px'}, 2000);
            }
            setTimeout(slide, 8000);
        });
        $(".i .titleBottom").click(function () { $('.i .textTop').animate({'margin-top': '0px'}, 500); });
    break;
    case "j":
        swapStyleSheet('null.css');
    break;
    case "k":
        swapStyleSheet('null.css');
    break;
    case "l":
        swapStyleSheet('null.css');
    break;
    case "m":
        swapStyleSheet('null.css');
        $(".m .textTop").css({"margin-top": "1025px"});
        $(function(){
            function slide(){
                $('.m .textTop').animate({'margin-top': '0px'}, 2000);
            }
            setTimeout(slide, 8000);
        });
        $(".m .titleBottom").click(function () { $('.m .textTop').animate({'margin-top': '0px'}, 500); });
    break;
    case "n":
        swapStyleSheet('null.css');
    break;
    case "o":
        swapStyleSheet('null.css');
    break;
    case "p":
        swapStyleSheet('null.css');
    break;
    case "q":
        swapStyleSheet('null.css');
        init();
        video.currentTime = 0;
        video.play();
    break;
    case "r":
        swapStyleSheet('null.css');
        $(".r .textTop").css({"margin-top": "1025px"});
        $(function(){
            function slide(){
                $('.r .textTop').animate({'margin-top': '0px'}, 2000);
            }
            setTimeout(slide, 8000);
        });
        $(".r .titleBottom").click(function () { $('.r .textTop').animate({'margin-top': '0px'}, 500); });
    break;
    case "s":
        swapStyleSheet('null.css');
    break;
    case "t":
        swapStyleSheet('null.css');
    break;
    case "u":
        swapStyleSheet('null.css');
        $(".u .textTop").css({"margin-top": "1025px"});
        $(function(){
            function slide(){
                $('.u .textTop').animate({'margin-top': '0px'}, 2000);
            }
            setTimeout(slide, 8000);
        });
        $(".u .titleBottom").click(function () { $('.u .textTop').animate({'margin-top': '0px'}, 500); });
    break;
    case "v":
        swapStyleSheet('null.css');
        $(".v .textTop").css({"margin-top": "1025px"});
        $(function(){
            function slide(){
                $('.v .textTop').animate({'margin-top': '0px'}, 2000);
            }
            setTimeout(slide, 8000);
        });
        $(".v .titleBottom").click(function () { $('.v .textTop').animate({'margin-top': '0px'}, 500); });
    break;
    case "w":
        swapStyleSheet('null.css');
    break;
    case "x":
        swapStyleSheet('null.css');
    break;
  }
}

function checkSlideOut(nSlide){
  switch(nSlide){
    case "q":
        video.pause();
        window.clearInterval(frames);
    break;
  }
}


$("#myVideo").on('timeupdate',function(e) {
  if(this.duration - this.currentTime < 0.2) {
    $("#video").animate({
      opacity: 0 
    }, 2000);  

    $(function(){
        function slide(){
            $(".slidr-breadcrumbs").animate({ "opacity": "0.8"}, 2000);   
            $("#map").animate({ "opacity": "1"}, 2000);   
            $("#earth").animate({ "opacity": "0"}, 2000);
        }
        setTimeout(slide, 6000);
    });
  }
});


function swapStyleSheet(sheet){
    document.getElementById('s2').setAttribute('href', sheet);
}

function showMessage(idd){ 
    $(idd).animate({'opacity': '1'}, 200);
}


$("#note").click(function(){
    if(first==true){
        document.getElementById("myVideo").play();
        $("#video").animate({"opacity": "1" }, 500);
        $("#front").animate({"opacity": "1" }, 1000);
        $("#note").css({"display": "none"});
        first=false;
    }
});