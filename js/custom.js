$(document).ready(function () {
  $('.group').hide();
  $('#nothing').show();
  $('#contact-form').change(function () {
    $('.group').hide();
    $('#'+$(this).val()).slideDown('slow');
  })
  $('input').focus(function(){
    $(this).css('outline-color', '#FF0000')
  })
  $('select').focus(function(){
    $(this).css('outline-color', '#FF0000')
  })
});



// //Form
// $(function() {
//   //Get the form
//   var form = $('#form-messages');
//
//   //Get the messages div
//   var formMessages = $('#form-messages');
//
//   //Set up a event listener for the contact form
//   $(form).submit(function(e){
//       //stop te browser from submitting the form
//     e.preventDefault();
//
//     //Serialize the form data
//     var formData = $(form).serialize();
//
//     //Submit the form using AJAX
//     $.ajax({
//       type: 'POST',
//       url: $(form).attr('action'),
//       data: formData
//     })
//     .done(function(response){
//       //Make sure that the formMessages div has the 'success' class.
//       $(formMessages).removeClass('error');
//       $(formMessages).addClass('success');
//
//       //Set the message text.
//       $(formMessages).text(response);
//
//       //Clear the form
//       $('#name').val('');
//       $('#email').val('');
//       $('#message').val('');
//     })
//     .fail(function(data){
//       //Make sure that the formMessages div has the error class.
//       $(formMessages).removeClass('success');
//       $(formMessages).addClass('error');
//
//       //Set the message text
//       if (data.responseText !== ''){
//         $(formMessages).text(data.responseText);
//       } else {
//         $(formMessages).text('Oops! An error occured and your message could not be sent.')
//       }
//     });
//   });
// });
