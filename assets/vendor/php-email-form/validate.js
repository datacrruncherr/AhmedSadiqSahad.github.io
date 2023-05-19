$(document).ready(function() {
  $('.php-email-form').submit(function(e) {
      e.preventDefault();
      var form = $(this);
      var alert = form.find('.alert-message');
      var submitButton = form.find('button[type="submit"]');
      var buttonText = submitButton.text();

      $.ajax({
          url: form.attr('action'),
          type: 'POST',
          data: form.serialize(),
          beforeSend: function() {
              alert.removeClass('alert-success alert-danger').addClass('alert-info').text('Sending...');
              submitButton.prop('disabled', true).text('Sending...');
          },
          success: function(result) {
              if(result == 'success') {
                  alert.removeClass('alert-info alert-danger').addClass('alert-success').text('Your message has been sent. Thank you!');
                  form.trigger('reset');
              } else {
                  alert.removeClass('alert-info alert-success').addClass('alert-danger').text('Sorry, there was an error sending your message. Please try again later.');
              }
          },
          error: function() {
              alert.removeClass('alert-info alert-success').addClass('alert-danger').text('Sorry, there was an error sending your message. Please try again later.');
          },
          complete: function() {
              submitButton.prop('disabled', false).text(buttonText);
          }
      });
  });
});
