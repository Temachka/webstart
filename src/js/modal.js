$(document).ready(function() {
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');
  
  button.on('click', function() {
    modal.addClass('modal_active');
  });

  close.on('click', function() {
    modal.removeClass('modal_active');
  });

  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 700);
    return false;
  });
});
