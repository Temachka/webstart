$(document).ready(function() {
  


  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');

  button.on('click', function() {
    timeout = setTimeout(function() {
      modal.removeClass('modal_active');
    }, 5000);
    modal.addClass('modal_active');
  });

  close.on('click', function() {
    clearTimeout(timeout);
    modal.removeClass('modal_active');
  });

});
