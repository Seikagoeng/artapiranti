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
    $.fn.fullpage.moveSlideLeft();
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

  $("#btn1").click(function() {
    $("#scrollbar").children().removeClass();
    $("#btn1").addClass("scrollcolor1");
    $("#btn2").addClass("scrollcolor2");
    $("#timeaxis").animate({left: 0}, 1000);
  });
  $("#btn2").click(function() {
    $("#scrollbar").children().removeClass();
    $("#btn2").addClass("scrollcolor1");
    $("#btn1").addClass("scrollcolor2");
    $("#timeaxis").animate({left: '-1222px'}, 1000);
  });

  // $("#timeaxis").click(function () {
    // $("#timeaxis").mouseover(function () {
      // alert('a');
    // })
  });
