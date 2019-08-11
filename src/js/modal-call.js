$(document).ready(function() {
var button_call = $('#button_call');
var modal_call = $('#modal-call');
var close_call = $('#close_call');

  button_call.on('click', function() {
    modal_call.addClass('modal_active');
  });

  close_call.on('click', function() {
    modal_call.removeClass('modal_active');
  });

  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 700);
    return false;
  });
});