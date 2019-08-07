/* Обработка и отправка формы через AJAX */
var modal = $('#modal');

$('#offer-form').on('submit', function(event) {
  event.preventDefault();
  $.ajax({
    url: 'mail.php', 
    type: 'POST',
    data: $(this).serialize(),
    success: function(data) {

      console.log(data);

      modal.addClass('modal_active');
      $('#offer-form')[0].reset();

      $('.success').html(data + ', Ваша форма отправлена!');

    },
    error: function(jqXHR, textStatus) {
      console.log(jqXHR + ': ' + textStatus);
    }
  });
});

