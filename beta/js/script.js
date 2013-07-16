//document.querySelector("#myCard").classList.toggle("flip");


  $(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
  // 
   $(".responsive-vid").fitVids();
  });


// $('nav.circle').toggle(function(e){ 
//     $(this).next('.menu').removeClass('mobile-hidden').slideDown('1500','easeInOutSine');
//   e.preventDefault();
// },function(e){
//   $(this).next('.menu').addClass('mobile-hidden').slideUp('1500','easeInOutSine');
//     e.preventDefault();
// });

$('nav.home').toggle(function(e){ 
  
  $(this).next('.menu').addClass('mobile-hidden');
   $('.black-banner').animate({
    height: '100%'
  }, 2000, function() {
    // Animation complete.
  });
      $('.banner').animate({
    height: '260px'
  }, 2000, function() {
    // Animation complete.
  });
  //   $(this).next('.menu').removeClass('mobile-hidden').slideDown('1500','easeInOutSine');
  // e.preventDefault();
},function(e){
  $(this).next('.menu').addClass('mobile-hidden').slideUp('1500','easeInOutSine');
    e.preventDefault();
});


// $("nav.centered.menu-active").click(function (e) {
//   alert('ive beenc lcicked');
//   $(this).removeClass('menu-active').addClass('circle').next('.menu').addClass('mobile-hidden').slideUp('1500','easeInOutSine');
//     e.preventDefault();
// });


$("p.credit").click(function () {
  $(this).parents('.flip-container').addClass('flip');
});

$("p.close").click(function () {
  $(this).parents('.flip-container').removeClass('flip');
});

$(".play-button").click(function () {
  var test = $(this).attr("data-video");
  var thisDiv = $('.content-video').find("[id='" + test +"']");
  thisDiv.siblings('.play-btn').hide();
  var Vimeo = thisDiv.next('.video');
  var videoID = Vimeo.attr("data-item");
  var setHTML = "<iframe src=http://player.vimeo.com/video/" + videoID + "?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=1\" width=\"1400\" height=\"787\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe> ";
  Vimeo.removeClass('is-hidden');
  Vimeo.children('.responsive-vid').html(setHTML);
  thisDiv.hide();
  return false;
});
