//document.querySelector("#myCard").classList.toggle("flip");


  $(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
  // 
   $(".responsive-vid").fitVids();
  });

$("nav.circle").click(function () {
  $(this).parents('.banner').slideUp();
  $('.menu-collapsed').removeClass('is-hidden');
});

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
