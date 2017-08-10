$(function() {
  // if ($(".css-cdn-fallback:first").is(":visible") !== true) {
  //   $('<link rel="stylesheet" href="./static/css/main.min.css">').appendTo('head');
  // }
  $('.loading-div').remove();
  $('.wrap').removeClass('gaosiBlur');
  $('#fullpage').fullpage({
    verticalCentered: true,
    resize: true,
    easing: 'easeInQuart',
    anchors: ['about', 'product', 'career', 'timeline', 'blog', 'parters', 'staffs', 'contact'],
    scrollingSpeed: 1000,
    navigation: true,
    menu: '.nav',
    fixedElements: '.header, .footer',
    scrollOverflow: true,
    lazyloading: true,
    afterLoad: function(anchorLink, index) {
      $('.section').removeClass('pageAnim');
      $('.section').eq(index - 1).addClass('pageAnim');
    },
    onLeave: function(index, nextIndex, direction) {
      $('.slide').removeClass('slideAnim');
      if ([2, 3, 5, 7].indexOf(nextIndex) !== -1) {
        // todo
        $('.slide.active').eq(nextIndex === 2 ? 0 : 1).addClass('slideAnim');
      }
    },
    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
      // console.log(anchorLink, index, slideIndex, direction, nextSlideIndex)
      $('.slide').removeClass('slideAnim');
      $('.slide').eq(nextSlideIndex).addClass('slideAnim');
    }
  });

  $("#allstaff").click(function () {
      $.fn.fullpage.moveSlideLeft();
  });
  $("#myBlog").click(function () {
      $.fn.fullpage.silentMoveTo(5,0);
  });
  $(".goBack").click(function () {
    $.fn.fullpage.silentMoveTo(7,0);
  });
  $(".nav>ul>li:eq(2)").click(function () {
    $.fn.fullpage.moveTo(2,0);
  });
  $(".nav>ul>li:eq(3)").click(function () {
    $.fn.fullpage.moveTo(3,0);
  });
  $(".nav>ul>li:eq(5)").click(function () {
    $.fn.fullpage.moveTo(5,0);
  });
  $(".nav>ul>li:eq(7)").click(function () {
    $.fn.fullpage.moveTo(7,0);
  });

  var mydate = new Date();
  var month=new Array(12);
  month[0]="January";
  month[1]="February";
  month[2]="March";
  month[3]="April";
  month[4]="May";
  month[5]="June";
  month[6]="July";
  month[7]="August";
  month[8]="September";
  month[9]="October";
  month[10]="November";
  month[11]="December";
  $("#schedule-year").html(mydate.getFullYear());
  $("#schedule-month").html(month[mydate.getMonth()]);
  $("#schedule-date").html(mydate.getDate());


  // function getStyle(obj, name)
  // {
  //   if(obj.currentStyle)
  //   {
  //     return obj.currentStyle[name];
  //   }
  //   else
  //   {
  //     return getComputedStyle(obj, false)[name];
  //   }
  // };

  $("#btn1").click(function() {
    $("#scrollbar").children().removeClass();
    $("#btn1").addClass("scrollcolor1");
    $("#btn2").addClass("scrollcolor2");
    $("#timeaxis").animate({left: '1px'}, 1000);
  });
  $("#btn2").click(function() {
    $("#scrollbar").children().removeClass();
    $("#btn2").addClass("scrollcolor1");
    $("#btn1").addClass("scrollcolor2");
    $("#timeaxis").animate({left: '-1287px'}, 1000);
  });

/*  window.onload=function () {
    var oTime=document.getElementById('timeaxis');

    oTime.onmousedown=function (ev)
    {
      var oEvent=ev||event;
      var oldPoint=oEvent.clientX;
      var ol=this.offsetLeft;
      var l=getStyle(oTime, 'left');
      document.title= l;

      document.onmousemove=function (ev)
      {
        var oEvent=ev||event;
        var newPoint=oEvent.clientX;
        var disX=newPoint-oldPoint;

       if(parseFloat(l)>0)
        {
          l=1+'px';
        }
        else if(parseFloat(l)<-1221)
        {
          l=-1222+'px';
        }
        oTime.style.left=parseFloat(l)+disX+'px';
      };
      document.onmouseup=function ()
      {
        document.onmousemove=null;
        document.onmouseup=null;
      };

      return false;

    };
  };*/

  // $("#timeaxis").mousedown(function () {
  //   var oldPoint=event.pageX;
  //   var l=$("#timeaxis").css("left");


  //   $(document).mousemove(function () {
  //     var newPoint=event.pageX;
  //     var disX=newPoint-oldPoint;
  //     document.title=l;

  //     if(parseFloat($("#timeaxis").css("left"))>0){
  //       // $("#timeaxis").css("left","0px")
  //       $("#timeaxis").css("left",function () {
  //       return 0;
  //       });
  //     }
  //     else if(parseFloat($("#timeaxis").css("left"))<-1222){
  //       // $("#timeaxis").css("left","-1224px")
  //     }
  //     $("#timeaxis").css("left",function (i,c) {
  //       return parseFloat(l)+disX+'px';
  //     });
  //   });

  //   $(document).mouseup(function () {
  //     $(document).off("mousemove");
  //     $(document).off("mouseup");
  //   });
  //   return false;
  // });
});

