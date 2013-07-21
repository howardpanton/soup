//document.querySelector("#myCard").classList.toggle("flip");


  $(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
  // 
   $(".responsive-vid").fitVids();
  }); 

$('.menu-normal').hide();
      
$('nav.circle').toggle(function(e){ 
  // Remove video
$('#big-video-vid').css('display', 'none');
// Hide menu
$(this).prev('.menu').slideUp('1500','linear');
$(this).prev('.menu-normal').slideDown('1500','linear');
   e.preventDefault();
},function(e){

  $('#big-video-vid').css('display', 'block');
  $(this).prev('.menu').slideDown('1500','linear');
  $(this).prev('.menu-normal').slideUp('1500','linear');
  e.preventDefault();
});





$(".credit").click(function () {
  $(this).parents('.flip-container').addClass('flip');
});

$(".project").click(function () {
  $(this).parents('.flip-container').removeClass('flip');
});

$(".play-button").click(function () {
  var test = $(this).attr("data-video");
  var thisDiv = $('.content-video').find("[id='" + test +"']");
  thisDiv.siblings('.play-btn').hide();
  var Vimeo = thisDiv.next('.video-item');
  var videoID = Vimeo.attr("data-item");
  var setHTML = "<iframe src=http://player.vimeo.com/video/" + videoID + "?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=1\" width=\"1400\" height=\"787\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe> ";
  Vimeo.removeClass('is-hidden');
  Vimeo.children('.responsive-vid').html(setHTML);
  thisDiv.hide();
  return false;
});

$(".close").click(function () {
  var test = $(this).attr("data-video");
  var thisDiv = $('.content-video').find("[id='" + test +"']");
  var Vimeo = thisDiv.next('.video-item');
  var videoID = Vimeo.attr("data-item");
  //var setHTML = "<iframe src=http://player.vimeo.com/video/" + videoID + "?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=1\" width=\"1400\" height=\"787\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe> ";
  Vimeo.children('.responsive-vid').children().remove();
    Vimeo.addClass('is-hidden');
  thisDiv.siblings('.play-btn').show();
  thisDiv.show();
  return false;
});

