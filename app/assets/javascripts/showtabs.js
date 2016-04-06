$(document).ready(function() {
  var contentSectionHide = $('.content-section');
  var buttonClassToggle = $('button');

  $("#jb-home").fadeIn(1000);

  $("#home").click(function() {
    buttonClassToggle.removeClass('active');
    contentSectionHide.hide();
    $("#jb-home").fadeIn();
  });

  $('#work').click(function() {
    buttonClassToggle.removeClass('active');
    $(this).addClass('active');
    contentSectionHide.hide();
    $('#jb-work').fadeIn();
  });

  $('#about').click(function() {
    buttonClassToggle.removeClass('active');
    $(this).addClass('active');
    contentSectionHide.hide();
    $('#jb-about').fadeIn();
  });  

  $('#contact').click(function() {
    buttonClassToggle.removeClass('active');
    $(this).addClass('active');
    contentSectionHide.hide();
    $('#jb-contact').fadeIn();
  });

  /* Puts content at top */

  $('.jb-internal-link').click(function(){
    $('html, body').animate({scrollTop : 0});
    return false;
  });
});

